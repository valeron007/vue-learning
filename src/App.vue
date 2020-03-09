<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>

<!--    <app-pizza :pizzaName="pizzaName" :pizzaPrice="pizzaPrice"></app-pizza>-->
    <app-pizza :pizzaName="pizzaName"
               :pizzaPrice="pizzaPrice"
               :changeFunc="changeNameToPizza"
               @nameChange="pizzaName = $event"
               @counterUpdate="counter = $event">
    </app-pizza>
    <app-counter></app-counter>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Pizza from "./components/Pizza";
import Counter from "./components/Counter";

export default {
  name: 'App',
  data(){
    return{
      pizzaName: 'Колхозная пицца из App.vue',
      pizzaPrice: 500
    }
  },
  methods:{
    changeNameToPizza() {
        this.pizzaName = "Сельская";
    }
  },
  components: {
    // HelloWorld,
    appCounter:Counter,
    appPizza:Pizza
  }
}
</script>

<style>

</style>
