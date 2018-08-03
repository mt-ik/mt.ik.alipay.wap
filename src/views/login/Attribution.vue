<template>
    <div>
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Attribution extends Vue {
    private msg: string = '我是归属地';
}
</script>