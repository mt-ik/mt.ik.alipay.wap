<template>
    <div>
        <MKHeader :isBack="back" :isTitle="title"></MKHeader>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
    private title: object = {
        isTitle: true,
        label: '政策',
        align: 'left',
    };
}
</script>
