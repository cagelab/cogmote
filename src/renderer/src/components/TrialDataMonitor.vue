<script lang="ts" setup>
import { DeviceInfo } from '@/types/device'
import { useTrialDataStore } from '@/stores/trialData'
import { computed, ref, watch, onMounted, nextTick, type ComponentPublicInstance } from 'vue'
import { TableV2Instance } from 'element-plus'
import { useRouter } from 'vue-router'
import { Maximize2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useScroll } from '@vueuse/core'
import { VList } from 'virtua/vue'
import { Card, CardContent } from '@/components/ui/card'
import VueJsonPretty from 'vue-json-pretty/lib/vue-json-pretty.js'
import 'vue-json-pretty/lib/styles.css'

const props = withDefaults(
  defineProps<{
    device: DeviceInfo
    hideMaximizeButton?: boolean
  }>(),
  {
    hideMaximizeButton: false
  }
)

const router = useRouter()

const address = props.device.address
const channel = 'default'

const trialDataStore = useTrialDataStore()

const createColumns = (
  trialData: object,
  props?: object
): {
  key: string
  dataKey: string
  title: string
  width: number
}[] => {
  const keys = Object.keys(trialData)
  return keys.map((key, columnIndex) => ({
    ...props,
    key: `${columnIndex}`,
    dataKey: key,
    title: key
      .split('_')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' '),
    width: 150
  }))
}

const data = ref<object[]>([])
const columns = ref<object[]>([])
const isNested = ref(false)

const tableRef = ref<TableV2Instance>()
const vListRef = ref<InstanceType<typeof VList> | null>(null)
const scrollEl = computed(() => vListRef.value?.$el as HTMLElement | null)

const { arrivedState } = useScroll(scrollEl, { offset: { right: 10 } })

const sharedScrollTop = ref(0)
const sharedScrollLeft = ref(0)
const cardMap = new Map<string, HTMLElement>()

const setCardRef = (el: Element | ComponentPublicInstance | null, id: string): void => {
  if (el) {
    const domEl = (el as ComponentPublicInstance).$el ?? el
    if (domEl instanceof HTMLElement) {
      cardMap.set(id, domEl)
      if (Math.abs(domEl.scrollTop - sharedScrollTop.value) > 1) {
        domEl.scrollTop = sharedScrollTop.value
      }
      if (Math.abs(domEl.scrollLeft - sharedScrollLeft.value) > 1) {
        domEl.scrollLeft = sharedScrollLeft.value
      }
    }
  } else {
    cardMap.delete(id)
  }
}

const handleCardScroll = (e: Event): void => {
  const target = e.target as HTMLElement
  const scrollTopChanged = Math.abs(target.scrollTop - sharedScrollTop.value) >= 1
  const scrollLeftChanged = Math.abs(target.scrollLeft - sharedScrollLeft.value) >= 1

  if (!scrollTopChanged && !scrollLeftChanged) return

  if (scrollTopChanged) sharedScrollTop.value = target.scrollTop
  if (scrollLeftChanged) sharedScrollLeft.value = target.scrollLeft

  cardMap.forEach((el) => {
    if (el !== target) {
      if (scrollTopChanged) el.scrollTop = sharedScrollTop.value
      if (scrollLeftChanged) el.scrollLeft = sharedScrollLeft.value
    }
  })
}

const handleWheel = (e: WheelEvent): void => {
  if (e.deltaY !== 0 && e.deltaX === 0) {
    if (scrollEl.value) {
      scrollEl.value.scrollLeft += e.deltaY
      e.preventDefault()
    }
  }
}

function scrollToBottom(): void {
  if (data.value.length > 0) {
    if (isNested.value) {
      vListRef.value?.scrollToIndex(data.value.length - 1)
    } else {
      tableRef.value?.scrollToRow(data.value.length - 1)
    }
  }
}

const displayItem = (item: object): Record<string, unknown> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, parentId, ...rest } = item as Record<string, unknown>
  return rest
}

const latestData = computed(() => {
  const trialData = trialDataStore.getChannelData(address)
  return trialData?.length > 0 ? trialData[trialData.length - 1] : null
})

const checkForNestedData = (item: object): void => {
  if (isNested.value) return
  isNested.value = Object.values(item).some((val) => typeof val === 'object' && val !== null)
}

watch(
  latestData,
  (newData) => {
    if (newData) {
      checkForNestedData(newData)

      const shouldScroll = !scrollEl.value || arrivedState.right

      data.value.push({
        id: `row-${data.value.length}`,
        parentId: null,
        ...newData
      })

      if (!isNested.value && columns.value.length === 0) {
        columns.value = createColumns(newData)
      }

      nextTick(() => {
        if (shouldScroll) {
          scrollToBottom()
        }
      })
    }
  },
  { immediate: true }
)

onMounted(() => {
  trialDataStore.connectSSE(address, channel).catch(() => {
    // ignore
  })

  const trialData = trialDataStore.getChannelData(address)
  if (trialData) {
    if (trialData.length > 0) checkForNestedData(trialData[0])

    data.value = trialData.map((data, index) => ({
      id: `row-${index}`,
      parentId: null,
      ...data
    }))
  }

  if (data.value.length > 0 && columns.value.length === 0) {
    columns.value = createColumns(data.value[0])
  }

  nextTick(() => {
    scrollToBottom()
  })
})
</script>

<template>
  <div
    style="--el-bg-color: var(--color-muted) 100%"
    class="flex-1 pr-4 pl-4 border rounded-xl bg-muted/50 relative overflow-hidden flex flex-col"
  >
    <Button
      v-if="!hideMaximizeButton"
      variant="ghost"
      size="icon"
      class="absolute top-2 right-2 z-10"
      @click="router.push(`/device/${address}/data-monitor`)"
    >
      <Maximize2 class="h-4 w-4" />
    </Button>

    <VList
      v-if="isNested"
      ref="vListRef"
      :data="data"
      horizontal
      class="h-full w-full overflow-x-auto"
      @wheel="handleWheel"
    >
      <template #default="{ item }">
        <div class="h-full flex items-center justify-center px-2" style="width: 320px">
          <Card class="w-full h-full max-h-[90%] overflow-hidden flex flex-col bg-background">
            <CardContent
              :ref="(el) => setCardRef(el, (item as any).id)"
              class="p-4 overflow-auto flex-1 font-mono text-xs"
              @scroll="handleCardScroll"
            >
              <div class="h-full w-full">
                <VueJsonPretty
                  :data="displayItem(item)"
                  :show-length="true"
                  :show-line="true"
                  :deep="20"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </template>
    </VList>

    <el-auto-resizer v-else>
      <template #default="{ height, width }">
        <el-table-v2
          ref="tableRef"
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
        />
      </template>
    </el-auto-resizer>
  </div>
</template>

<style scoped>
.bg-el-bg {
  --el-bg-color: var(--color-muted);
}
</style>
