import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState = { statusBarHeight: '', menuButtonInfo: '', navBarHeight: '' }

export const useDeviceStore = defineStore(
  'device',
  () => {
    const deviceInfo: Record<string, any> = ref({ ...initState })

    const getInfo = () => {
      // 缓存中没有的话就执行下面方法：
      deviceInfo.value.statusBarHeight = uni.getWindowInfo().statusBarHeight
      deviceInfo.value.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
      // 然后计算出navBarHeight
      deviceInfo.value.navBarHeight =
        deviceInfo.value.menuButtonInfo.bottom -
        deviceInfo.value.statusBarHeight +
        (deviceInfo.value.menuButtonInfo.top - deviceInfo.value.statusBarHeight) // 状态栏与胶囊按钮中的空隙
    }

    return {
      deviceInfo,
      getInfo,
    }
  },
  {
    persist: true,
  },
)
