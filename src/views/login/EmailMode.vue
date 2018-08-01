<template>
    <div class="login-field">
        <md-field>
            <md-input-item
                title="邮箱"
                type="email"
                placeholder="邮箱"
                is-title-latent
                clearable
                ></md-input-item>
            <md-input-item
                title="密码"
                type="password"
                placeholder="密码"
                is-title-latent
                clearable
                ></md-input-item>
            <md-field-item name="rememberFlag" align="left">
                <md-switch name="isRemember" v-model="isRemember"></md-switch>
            </md-field-item>
        </md-field>
        <div class="login-btn">
            <md-button @click="sign">登录</md-button>
        </div>
        <div class="login-other">
            <a href="#">忘记密码?</a>
            <a href="#" @click="changePhoneMode">短信验证码登录</a>
        </div>
        <div class="login-tip">
            <md-button type="ghost-primary" size="small" @click="openMore = true">更多</md-button>
        </div>
        <md-action-sheet
            v-model="openMore"
            :options="options"
            cancel-text="关闭"
            @selected="selectOperate">
        </md-action-sheet>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Icon, Field, FieldItem, InputItem, Switch, Button, Dialog, ActionSheet } from 'mand-mobile';

Vue.component(ActionSheet.name, ActionSheet);

@Component({
    components: {
        [Field.name]: Field,
        [FieldItem.name]: FieldItem,
        [InputItem.name]: InputItem,
        [Switch.name]: Switch,
        [Icon.name]: Icon,
        [Button.name]: Button,
        // [ActionSheet.name]: ActionSheet,
    },
})
export default class MKEmailMode extends Vue {
    private isRemember: boolean = false;
    private openMore: boolean = false;
    private options: any[] = [
        {
          label: '刷脸',
          value: 'brushFace',
        },
        {
          label: '注册',
          value: 'register',
        },
        {
          label: '问题',
          value: 'problem',
        },
    ];
    private changePhoneMode(): void {
        this.$emit('changeMode', true);
    }
    private sign(): void {
        alert('登录中...');
    }
    private selectOperate(item: any): void {
        this.$router.push(item.value);
    }
}
</script>

<style lang="postcss" scoped>
.login-field {
    width: var(--mk-width);
    position: absolute;
    top: 250px;
    & /deep/ .md-field-item-content.left {
        margin-left: 0;
    }
    & .login-btn {
        padding-left: 32px;
        padding-right: 32px;
    }
    & .login-other {
        padding: 20px 32px;
        font-size: 28px;
        line-height: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & .login-tip {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;
    }
}
</style>

