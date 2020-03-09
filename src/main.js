// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Pizza from "./components/Pizza";

export const eventEmitter = new Vue()

Vue.config.productionTip = false

var component = {
  template: `<div>
      <h2>Счётчик:{{ counter }}</h2>
      <button @click="counter++">Counter</button>
      <hr>
    </div>
    `,
  data: function(){
    return {
      counter: 0
    }
  },
  methods:{
    add:function () {
      this.counter++
    }
  }
}

var app2 = new Vue({
    el: '#app-2',
    render: h => h(App)
})
