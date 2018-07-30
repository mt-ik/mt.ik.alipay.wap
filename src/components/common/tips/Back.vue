<template>
    <span class="mk-go-back" @click="goBack">
        <md-icon name="arrow-left" size="lg" class="mk-icon-lg"></md-icon>
        <MKDialog v-if="backInfo.dialog" :dialogInfo="backInfo.dialog" :openFlag="open" @changeOpen="changeOpen"></MKDialog>
    </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Icon } from 'mand-mobile';
import MKDialog from './Dialog.vue';

@Component({
    components: {
        [Icon.name]: Icon,
        MKDialog,
    },
})
export default class MKBack extends Vue {
    private open: boolean = false;
    @Prop({ type: Object, default: () => ({})})
    private backInfo: any;

    private goBack(): void {
        if (this.backInfo && this.backInfo.isBack && this.backInfo.dialog) {
            this.open = true;
            // return;
        } else {
            window.history.go(-1);
        }
    }
    private changeOpen(flag: boolean): void {
        this.open = flag;
    }
}
</script>

<style lang="postcss" scoped>
.mk-go-back {
    display: inline-flex;
    position: absolute;
    left: 0;
}
</style>
