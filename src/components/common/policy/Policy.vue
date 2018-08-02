<template>
    <div class="mk-policy">
        <MKHeader :isBack="back" :isTitle="title"></MKHeader>
        <div class="content" v-if="type === 1">
            居井者, 仰观宇宙大千; 坐拥天下者, 四筑高墙如井。
        </div>
        <div class="content" v-else-if="type === 2">
            天行健, 君子以自强不息; 地势坤, 君子以厚德载物。
        </div>
        <div class="content" v-else-if="type === 3">
            无善无恶心之体, 有善有恶意之动; 知善知恶是良知, 为善去恶是格物。
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import qs from 'qs';
import MKHeader from '../header/Header.vue';

@Component({
    components: {
        MKHeader,
    },
})
export default class MKPolicy extends Vue {
    private type: number = 0;
    private back: object = {
        isBack: true,
    };
    private title: any = {
        isTitle: true,
        label: '',
        align: 'left',
    };

    private created() {
        const options = qs.parse(window.location.href.split('?')[1]);
        if (!options && !options.title && !options.type) {
            return;
        }
        this.type = Number(options.type);
        this.title.label = decodeURI(options.title);
    }
}
</script>

<style lang="postcss" scoped>
.mk-policy {
    position: relative;
    & .content {
        opacity: 0.7;
        font-size: 28px;
        line-height: 32px;
        padding: 100px 40px 40px 40px;
        text-align: justify;
    }
}
</style>

