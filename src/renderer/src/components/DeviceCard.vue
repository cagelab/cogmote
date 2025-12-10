<script setup lang="ts">
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useDeviceStore } from '@/stores/device'
import { computed } from 'vue'

import { TrashIcon } from 'lucide-vue-next'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu'

const props = defineProps<{
  address: string
}>()

const deviceStore = useDeviceStore()
const device = computed(() => {
  return deviceStore.getDevice(props.address)
})

const deleteDevice = (): void => {
  deviceStore.deleteDevice(props.address)
}
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>
      <Card class="min-w-auto w-80 h-fit transition-all hover:shadow-white/20 bg-muted/50">
        <CardHeader>
          <div class="flex justify-between">
            <CardTitle>{{ device?.device.hostname }}</CardTitle>
            <Badge v-if="device?.status === 'online'" class="bg-green-300">{{
              device.status
            }}</Badge>
            <Badge v-if="device?.status === 'offline'" class="bg-red-300">{{
              device.status
            }}</Badge>
          </div>
          <CardDescription>Last online: 1 day</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex justify-between">
            <Label>Address: </Label>
            <Label> {{ address }}</Label>
          </div>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button>Detial</Button>
          <Button>Link</Button>
        </CardFooter>
      </Card>
    </ContextMenuTrigger>
    <ContextMenuContent class="w-52">
      <ContextMenuItem inset @click="deleteDevice">
        <TrashIcon />
        Delete
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
