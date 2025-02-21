<template>
  <div>
    <AsyncComp />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router';

defineOptions({ name: 'visualscreen' })

const route = useRoute()
console.error(route);

const AsyncComp = defineAsyncComponent(() => 
  import(`./visualscreen/${route.params.name}.vue`)
)

</script>

<style lang="less" scoped>
</style>