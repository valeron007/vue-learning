<template>
  <div class="hello">
    <div>
      <h2>Счётчик:{{ counter }}</h2>
      <button @click="counter++">Counter</button>
      <hr>
      <h2>Счётчик:{{ counter2 }}</h2>
      <button @click="counter2++">Counter</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      counter: 0,
      counter2: 0,
      msg: 'Welcome to Your Vue.js App',
      error: "Valeron"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
