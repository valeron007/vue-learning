<template>
    <h1>Счётчик: {{counter}}</h1>
</template>

<script>
    import {eventEmitter} from "../main";

    export default {
        name: "Counter",
        data(){
          return {
            counter: 0
          }
        },
      created() {
          eventEmitter.$on('counterUpdated', (num) => {
              this.counter += num;
          })
      }
    }
</script>

<style scoped>
</style>
