<template>
    <span class="mk-go-right" @click="goRight">
        <!-- <md-icon name="arrow-right" size="lg" class="mk-icon-lg"></md-icon> -->
        {{ rightInfo.label }}
    </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Icon } from 'mand-mobile';

@Component({
    components: {
        [Icon.name]: Icon,
    },
})
export default class MKRight extends Vue {
    @Prop({ type: Object, default: () => ({})})
    private rightInfo: any;

    private goRight(): void {
        window.history.go(-1);
    }
}
</script>

<style lang="postcss" scoped>
.mk-go-right {
    display: inline-flex;
    position: absolute;
    right: 20px;
}
</style>
