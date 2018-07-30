<template>
    <div class="mk-title" :style="{ fontSize: titleInfo.size || '16px;', fontWeight: titleInfo.weight || 'normal' }">{{ titleInfo.label }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class MKTitle extends Vue {
    @Prop({ type: Object, default: () => ({})})
    private titleInfo: any;
}
</script>

<style lang="postcss" scoped>
</style>

