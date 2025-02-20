<template>
  <a-layout-content class="flex flex-col">
    <div>{{ goods }}</div>
    <async-component />
    <statistics v-if="userStore.user && userStore.user.dashboard === 'statistics'" />
    <work-panel v-else-if="userStore.user" />
  </a-layout-content>
</template>

<script setup>
import { useUserStore } from '@/store'
import Statistics from './components/statistics.vue'
import WorkPanel from './components/work-panel.vue'
import { ref, onMounted } from 'vue';
import AsyncComponent from './AsyncComponent.vue'
import axios from 'axios';
const userStore = useUserStore()

const goods = ref([])
const getMockGoods = async() => {
  goods.value = await axios.get('/core/captcha');
}

onMounted(() => {
  getMockGoods()
})
</script>
<script>
export default { name: 'dashboard' }
</script>
