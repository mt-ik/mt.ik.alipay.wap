<template>
    <div class="login-field">
        <md-field>
            <md-field-item
                name="phoneAttribution"
                title="手机号归属地"
                arrow="arrow-right"
                value="中国大陆"
                align="right">
            </md-field-item>
            <md-field-item
                name="item2"
                title="18518165912"
                arrow="arrow-right"
                solid
                align="right"
                @click="onClick">
                <div>内容展示</div>
                <span slot="left">+86</span>
            </md-field-item>
        </md-field>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Field, FieldItem, InputItem, Icon } from 'mand-mobile';

@Component({
     components: {
        [Field.name]: Field,
        [FieldItem.name]: FieldItem,
        [InputItem.name]: InputItem,
        [Icon.name]: Icon,
    },
})
export default class MKPhoneMode extends Vue {
    private name: string = 'MKPhoneMode';
}
</script>

<style lang="postcss" scoped>
.login-field {
    width: var(--mk-width);
    position: absolute;
    top: 250px;
}
</style>

