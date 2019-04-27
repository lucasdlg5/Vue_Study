<template>
  <div class="inputData">

    <form>

      <label>Valor 1  </label>
      <input v-model="valor1" @input="valorMethod1"/>
      <br>
      <br>
      <br>
      <label>Valor 2  </label>
      <input v-model="valor2" @input="valorMethod2"/>

    </form>

  </div>
</template>

<script>
export default {
  name: 'inputData',
data () {
  return {
    valor1: '',
    valor2: ''
  }
},
methods: {
  valorMethod1(event){
    this.valor1 = event.target.value,
    this.$emit("valorMethod1", this.valor1)
  },
  valorMethod2(event){
    this.valor2 = event.target.value,
    this.$emit("valorMethod2", this.valor2)
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
