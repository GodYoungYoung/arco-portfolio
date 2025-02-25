<template>
  <div class="portfolio-container">
    <div>发现组件：{{componentNames}}</div>
    <div class="center-box">
      <div class="title-tabs">
        <div :class="{label:true, lactive: pi==activePanelIndex}" v-for="p, pi in panelList" :key="p.name" @click="handleActive(p, pi)">{{ p.label }}</div>
        <div class="active-bar" :style="`--left:${activePanelIndex * 10}vw`"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import AsyncComponent from './components/AsyncComponent.vue'

const modules = import.meta.glob('./visualscreen/*.vue', { eager: true })
console.log('components:', modules);

defineOptions({ name: 'portfolio' })

const activePanelIndex = ref(0)
const panelList = [
  {name:'dashboard', label: '可视化大屏'},
  {name:'workspace', label: '个人工作台'},
  {name:'d3', label: '未定1'},
  {name:'d4', label: '未定2'},
]

function handleActive(p, pi) {
  console.log(p);
  activePanelIndex.value = pi
}

const componentNames = ref([])
onMounted(() => {
  // 提取组件名称列表
  componentNames.value = Object.keys(modules).map(path => {
    // 示例路径：./components/Button.vue → Button
    return path
      .split('/').pop()       // 获取文件名部分
      .replace(/\.vue$/, '')  // 移除扩展名
  })
  console.log('发现组件:', componentNames)
})

</script>

<style lang="less" scoped>
.portfolio-container {
  width: 100vw;
  height: 100vh;
  background-color: #f2f9ff;
  // background-image: radial-gradient(at 10% 5%, #fcc6, #bcf6, #dcf6), radial-gradient(at 60% 55%, #36f6, #9cf6, #fff0, #fff0, #fff0, #fff0);
  .center-box {
    margin: 10vh auto;
    width: clamp(1280px, 80vw, 2400px);
    min-height: 70vh;
    // border: 3px solid royalblue;
    border-radius: 1vh;
  }
}
.title-tabs {
  width: fit-content;
  margin: 2vh auto;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2vw;
  cursor: pointer;
  .label {
    width: 8vw;
    text-align: center;
    text-wrap: nowrap;
    font-size: 2vh;
    margin-bottom: 0.6vh;
    &.lactive {
      color: #36f;
    }
  }
  .active-bar {
    position: absolute;
    left: var(--left);
    transition: .5s;
    bottom: 0;
    width: 120px;
    height: 0.3vh;
    background: #36f;
    border-radius: 1vh;
  }
}
</style>