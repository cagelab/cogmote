<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-vue-next'
import TrialDataMonitor from '@/components/TrialDataMonitor.vue'
import { useDeviceStore } from '@/stores/device'
import { DeviceInfo } from '@/types/device'

const router = useRouter()
const route = useRoute()
const address = route.params.address as string

const deviceStore = useDeviceStore()
const device = deviceStore.getDevice(address) as DeviceInfo

const goBack = (): void => {
  router.push(`/device/${address}`)
}
</script>

<template>
  <div class="flex flex-col h-screen w-full">
    <div class="flex items-center gap-2 p-2 border-b">
      <Button variant="ghost" size="icon" @click="goBack">
        <ArrowLeft class="h-4 w-4" />
      </Button>
      <span class="text-sm font-medium"
        >Trial Data Monitor - {{ device?.device?.hostname || address }}</span
      >
    </div>
    <div class="flex-1 p-4 flex flex-col">
      <TrialDataMonitor v-if="device" :device="device" class="h-full" hide-maximize-button />
    </div>
  </div>
</template>
