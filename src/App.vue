<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public name: string = 'MK-App';
}
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
