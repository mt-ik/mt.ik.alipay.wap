<template>
    <div class="mk-alipay">
        <nav id="nav">
            <router-link to="/home">
                <span>首页</span>
                <span>😄</span>
            </router-link>
            <router-link to="/wealth">
                <span>财富</span>
                <span>😄</span>
            </router-link>
            <router-link to="/reputation">
                <span>口碑</span>
                <span>😄</span>
            </router-link>
            <router-link to="/friend">
                <span>朋友</span>
                <span>😄</span>
            </router-link>
            <router-link to="/mine">
                <span>我的</span>
                <span>😄</span>
            </router-link>
        </nav>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Alipay extends Vue {
    private msg: string = '业务主页';
    // private mounted() {
    //     this.$router.push('')
    // }
    private created() {
        alert('我是业务主页入口哦·在这里加载业务全局依赖');
    }
}
</script>

<style lang="postcss" scoped>
.mk-alipay {
    height: var(--mk-height);
    width: var(--mk-width);
    overflow: hidden;

}
#nav {
    padding: 10px 0 10px 0;
    width: var(--mk-width);
    position: fixed;
    bottom: 0;
    display: flex;
    border-top: 1px solid #888888; 
    & a {
        flex: 1;
        padding-top: 10px;
        color: var(--mk-text-color);
        font-size: 14px;
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column-reverse; 
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.main {
    height: calc(100% - 93px);
    overflow: auto;
    position: relative;
}
</style>
