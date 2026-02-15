import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DataQuickJudgeView from '@/views/DataQuickJudgeView.vue'
import VideoMonitorView from '@/views/VideoMonitorView.vue'
import DeviceHomeView from '@/views/DeviceHomeView.vue'
import TrialDataMonitorView from '@/views/TrialDataMonitorView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/device/:address',
      component: DeviceHomeView
    },
    {
      path: '/device/:address/data-monitor',
      component: TrialDataMonitorView
    },
    {
      path: '/quick-judge',
      component: DataQuickJudgeView
    },
    {
      path: '/monitor',
      component: VideoMonitorView
    }
  ]
})

export default router
