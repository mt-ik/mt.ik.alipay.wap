<template>
    <div class="mk-alipay">
        <nav>
            <router-link to="/home">首页</router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/home">首页</router-link>
            <router-link to="/home">首页</router-link>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Alipay extends Vue {
    private msg: string = '业务主页';
}
</script>

<style lang="postcss" scoped>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
