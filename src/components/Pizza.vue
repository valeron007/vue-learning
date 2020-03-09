<template>
  <div>
    <h2>Pizza name: {{ pizzaName }} / {{ reverseName }}</h2>
    <p>Price: {{pizzaPrice}}</p>
    <button @click="changeName">Cnahge name</button>
    <button @click="changeFunc()">Cnahge</button>

    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
    import {eventEmitter} from "../main";

    export default {
        name: "Pizza",
        // data(){
        //   return{
        //     // pizzaName:"Колхозная",
        //     // pizzaPrice: 300
        //   }
        // },
        props:['pizzaName', 'pizzaPrice', 'changeFunc'],
      // props: {
      //     'pizzaName': String,
      //     'pizzaPrice': Number
      // },
      // props: {
      //   'pizzaName': {
      //     'type': String,
      //     // required: true,
      //     default: 'Деревенская Pizza'
      //   },
      //   'pizzaPrice': Number,
      //   'changeFunc': Function,
      // },
      methods:{
        changeName:function () {
          this.pizzaName = "Margarita";
          this.$emit('nameChange', this.pizzaName)
        },
        updateCounter:function () {
          eventEmitter.$emit('counterUpdated', 5)
        }
      },
      computed:{
          reverseName() {
            // return this.pizzaName.split('').reverse().join('');
            return this.pizzaName;

          }
      }

    }
</script>

<style scoped>

</style>
