<template>
    <div class="mk-reputation">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Reputation extends Vue {
    private msg: string = 'Reputation';
}
</script>
