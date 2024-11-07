<script setup lang="ts">
import { useDeviceStore } from '@/store/device'
const deviceStore = useDeviceStore()

interface Props {
  title?: string
  showLeftArrow?: boolean

  showBackground?: boolean
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  showLeftArrow: false,
  showBackground: true,
})
const handleClickLeft = () => {
  if (props.showLeftArrow) handleBack()
  else {
    handleBackHome()
  }
}
function handleBack() {
  uni.navigateBack()
}

function handleBackHome() {
  uni.switchTab({ url: '/pages/index/index' })
}
</script>
<template>
  <wd-navbar
    :safe-area-inset-top="true"
    :left-arrow="showLeftArrow"
    :bordered="false"
    :custom-style="`height: ${deviceStore.deviceInfo.navBarHeight}px;background-color: transparent !important;`"
    @click-left="handleClickLeft"
  >
    <template #title>
      <span
        v-if="title"
        class="inline-block font-semibold text-[36rpx] alph"
        :style="`${color ? `color:${color};` : 'color:#ffffff;'}`"
      >
        {{ title }}
      </span>
    </template>
    <template #left>
      <div v-if="!showLeftArrow">
        <img
          class="w-274rpx h-80rpx"
          src="https://user-upfiles.oss-cn-shanghai.aliyuncs.com/wdkejixueyuan/public/logo.png"
          alt=""
        />
      </div>
      <div
        v-else
        style="border: 1px solid rgba(24, 24, 24, 0.08)"
        class="w-[64rpx] h-[64rpx] rounded-[50%] flex items-center justify-center"
      >
        <wd-icon name="thin-arrow-left" :color="`${color ? `${color}` : '#ffffff'}`" size="18" />
      </div>
    </template>
  </wd-navbar>
</template>
<style scoped>
:deep(.wd-navbar__left) {
  padding: unset !important;
}
</style>
