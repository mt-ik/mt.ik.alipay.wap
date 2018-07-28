<template>
    <div class="mk-login">
        <div class="login-logo">
            <i class="icon iconfont icon-zhifubao9 size"></i>
        </div>
        <div class="login-field">
            <md-field>
                <md-input-item
                    title="邮箱"
                    type="email"
                    placeholder="邮箱"
                    is-title-latent
                    is-highlight
                    clearable
                    ></md-input-item>
                <md-input-item
                    title="密码"
                    type="password"
                    placeholder="密码"
                    is-title-latent
                    is-highlight
                    clearable
                    ></md-input-item>
                <md-field-item name="rememberFlag" title="记住" align="left">
                    <md-switch name="switch0" v-model="switchActive"></md-switch>
                </md-field-item>
            </md-field>
            <div class="login-btn">
                <md-button @click="sign">登录</md-button>
            </div>
        </div>
        <div class="login-tip">
            <md-button type="ghost-primary" size="small" @click="open = true">更多</md-button>
        </div>
        <md-dialog v-model="open" :closable="false" :mask-closable="true">
            人生的刺，就在这里，留恋着不肯快走的，偏是你所不留恋的东西。
        </md-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Icon, Field, FieldItem, InputItem, Switch, Button } from 'mand-mobile';
import { Dialog } from 'mand-mobile';

@Component({
    components: {
        [Dialog.name]: Dialog,
        [Field.name]: Field,
        [FieldItem.name]: FieldItem,
        [InputItem.name]: InputItem,
        [Switch.name]: Switch,
        [Icon.name]: Icon,
        [Button.name]: Button,
    },
})
export default class Login extends Vue {
    private msg: string = 'login';
    private switchActive: boolean = false;
    private open: boolean = false;
    private sign(): void {
        alert('登录中...');
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
    & .login-field {
        width: var(--mk-width);
        position: absolute;
        top: 250px;
    }
    & .login-btn {
        padding-left: 32px;
        padding-right: 32px;
    }
    & .login-tip {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;
    }
}
</style>
