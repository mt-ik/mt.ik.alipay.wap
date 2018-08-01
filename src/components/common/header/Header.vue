<template>
    <header class="mk-header" :class="isTitle.align">
        <MKBack v-if="isBack.isBack" :backInfo="isBack"></MKBack>
        <MKTitle v-if="isTitle.isTitle" :titleInfo="isTitle"></MKTitle>
        <MKRight v-if="isRight.isRight" :rightInfo="isRight"></MKRight>
    </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MKBack from '../tips/Back.vue';
import MKTitle from '../tips/Title.vue';
import MKRight from '../tips/Right.vue';

@Component({
    components: {
        MKBack,
        MKTitle,
        MKRight,
    },
})
export default class MKHeader extends Vue {
    @Prop({ type: Object, default: () => ({})})
    private isBack: any;
    @Prop({ type: Object, default: () => ({})})
    private isTitle: any;
    @Prop({ type: Object, default: () => ({})})
    private isRight: any;
}
</script>

<style lang="postcss" scoped>
.mk-header {
    padding: 0 76px;
    height: 96px;
    line-height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.left {
    justify-content: flex-start;
}
.center {
    justify-content: center;
}
.right {
    justify-content: flex-end;
}
</style>

