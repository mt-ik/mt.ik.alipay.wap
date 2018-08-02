<template>
    <div class="mk-register">
        <MKHeader :isBack="back" :isTitle="title"></MKHeader>
        <div class="register-logo">
            <i class="icon iconfont icon-zhifubao9 size"></i>
        </div>
        <div class="register">
            <md-field>
                <md-field-item
                    name="phoneAttribution"
                    title="归属地"
                    arrow="arrow-right"
                    value="中国大陆"
                    align="right">
                </md-field-item>
                <md-input-item
                    title="+86"
                    type="phone"
                    size="large"
                    v-model="phone"
                    clearable
                    placeholder="xxx xxxx xxxx">
                </md-input-item>
            </md-field>
            <div class="register-btn">
                <md-button @click="register">注册</md-button>
            </div>
            <div class="register-tip">
                <span>注册即表示同意</span>
                <span><a href="javascript:void(0);" @click="showPolicy(1, '支付宝服务协议')">支付宝服务协议</a>、</span>
                <span><a href="javascript:void(0);" @click="showPolicy(2, '隐私权政策')">支付宝隐私权政策</a>、</span>
                <span>和<a href="javascript:void(0);" @click="showPolicy(3, '支付宝隐私权政策')">支付宝隐私权政策</a></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Field, FieldItem, InputItem, Icon, Button } from 'mand-mobile';
import MKHeader from '@/components/common/header/Header.vue';

@Component({
     components: {
        [Field.name]: Field,
        [FieldItem.name]: FieldItem,
        [InputItem.name]: InputItem,
        [Icon.name]: Icon,
        [Button.name]: Button,
        MKHeader,
    },
})
export default class Register extends Vue {
    private msg: string = 'register';
    private phone: string = '';
    private back: object = {
        isBack: true,
        dialog: {
            cancel: '返回',
            confirm: '继续注册',
            msg: '输入手机号即可轻松完成注册，你确定返回吗？',
        },
    };
    private title: object = {
        isTitle: true,
        label: '手机号注册',
        // weight: 'bolder',
        // size: '16px',
        // align: 'left',
    };
    private register(): void {
        alert('注册');
    }
    private showPolicy(type: number, title: string): void {
        const encodeTitle = encodeURI(title);
        const params: any = { path: '/policy', query: { type, title: encodeTitle }};
        this.$router.push(params);
    }
}
</script>

<style lang="postcss" scoped>
.mk-register {
    position: relative;
    & .register-logo {
        text-align: center;
        position: relative;
        top: 100px;
        & .size {
            font-size: 100px;
            color: #fc9153;
        }
    }
    & .register {
        width: 100%;
        position: absolute;
        top: 400px;
        & .register-btn {
            padding-left: 32px;
            padding-right: 32px;
        }
        & .register-tip {
            margin-top: 24px;
            padding-left: 32px;
            padding-right: 32px;
            font-size: 25px;
            line-height: 32px;
            text-align: justify;
        }
    }
}
</style>

