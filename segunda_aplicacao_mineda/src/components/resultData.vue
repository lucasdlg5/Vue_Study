<template>
  <div class="resultData">

<ul class="list-group">
  <li >
    Soma
    <span >{{ 1*this.p_v1 + 1*this.p_v2 }}</span>
  </li>
  <li >
    Subtração
    <span >{{ this.p_v1 - this.p_v2 }}</span>
  </li>
  <li >
    Multiplicação
    <span>{{ this.p_v1 * this.p_v2 }}</span>
  </li>
</ul> 


  </div>
</template>

<script>
export default {
  name: 'resultData',
  props: {
    p_v1: Number,
    p_v2: Number
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
