<template>
    <div class="mk-login">
        <div class="login-logo">
            <i class="icon iconfont icon-zhifubao9 size"></i>
        </div>
        <MKEmailMode v-if="!isPhone" @changeMode="changeMode"></MKEmailMode>
        <MKPhoneMode v-else></MKPhoneMode>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MKEmailMode from './EmailMode.vue';
import MKPhoneMode from './PhoneMode.vue';
@Component({
    components: {
        MKEmailMode,
        MKPhoneMode,
    },
})
export default class Login extends Vue {
    private isPhone: boolean = false;
    private open: boolean = false;
    private changeMode(flag: boolean): void {
        this.isPhone = flag;
    }
}
</script>

<style lang="postcss" scoped>
.mk-login {
    // padding: 20px 0;
    position: relative;
    height: var(--mk-height);
    top: 0;
    & .login-logo {
        text-align: center;
        position: relative;
        top: 100px;
        & .size {
            font-size: 100px;
            color: #fc9153;
        }
    }
}
</style>
