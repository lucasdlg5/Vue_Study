<template>
  <div class="MainPage">
    <inputData/>
    <resultData/>
  </div>
</template>

<script>
import inputData from './inputData.vue'
import resultData from './resultData.vue'


export default {
  name: 'MainPage',
  components: {
    inputData,
    resultData
  }
}
</script>

<style scoped>

</style>
