<template>
  <div class="portfolio-container">aaaa</div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import AsyncComponent from './components/AsyncComponent.vue'

const modules = import.meta.glob('./visualscreen/*.vue', { eager: true })
console.log('components:', modules);

defineOptions({ name: 'portfolio' })

onMounted(() => {
  // 提取组件名称列表
  const componentNames = Object.keys(modules).map(path => {
    // 示例路径：./components/Button.vue → Button
    return path
      .split('/').pop()       // 获取文件名部分
      .replace(/\.vue$/, '')  // 移除扩展名
  })
  
  console.log('发现组件:', componentNames)
  // 输出示例：['Button', 'Header', 'Icon'] 
})

</script>

<style lang="less" scoped>
.portfolio-container {
  width: 100vw;
  height: 100vh;
}
</style>