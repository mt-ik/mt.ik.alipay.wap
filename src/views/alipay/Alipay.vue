<template>
    <div class="mk-alipay">
        <nav id="nav">
            <router-link to="/home">
                <!-- <icon name="flag"></icon> -->
                <span>首页</span>
            </router-link>
            <router-link to="/wealth">
                <span>财富</span>
            </router-link>
            <router-link to="/reputation">
                <span>口碑</span>
            </router-link>
            <router-link to="/friend">
                <span>朋友</span>
            </router-link>
            <router-link to="/mine">
                <span>我的</span>
            </router-link>
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
    background-color: var(--bg-color);
    padding: 30px;
    & a {
        font-weight: bold;
        // color: #2c3e50;
        color: #ffffff;
        text-decoration: none;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
