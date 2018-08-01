<template>
    <div>
        <MKHeader :isBack="back" :isTitle="title"></MKHeader>
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
    private back: object = {
        isBack: true,
    };
    private title: any = {
        isTitle: true,
        label: '政策',
        align: 'left',
    };

    private created() {
        const options = qs.parse(window.location.href.split('?')[1]);
        this.title.label = options.title;
    }
}
</script>
