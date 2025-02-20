<template>
  <div class="async-comp">
    <AsyncComp />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router';

defineOptions({ name: 'AsyncComponent' })

const route = useRoute()
console.error(route);

const AsyncComp = defineAsyncComponent(() => 
  import('./components/statistics.vue')
)

</script>

<style lang="less" scoped>
.async-comp {
  width: 100vw;
}
</style>