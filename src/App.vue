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

<style lang="postcss" scoped>
#app {
  height: var(--mk-height);
  width: var(--mk-width);
}
</style>
