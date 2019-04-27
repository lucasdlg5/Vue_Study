<template>
  <div id="app">
    
    <inputData @valorMethod1="setValor1" @valorMethod2="setValor2"/>
    <resultData :p_v1="p_v1" :p_v2="p_v2"/>
  </div>
</template>

<script>
import inputData from './components/inputData.vue'
import resultData from './components/resultData.vue'
 
export default {
  name: 'app',
  components: {
    inputData,
    resultData
  },
  methods: {
    setValor1(v){
      this.p_v1 = v
    },
    setValor2(v){
      this.p_v2 = v
     
    }
  },
  data(){
    return {
      p_v1: 0,
      p_v2: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
