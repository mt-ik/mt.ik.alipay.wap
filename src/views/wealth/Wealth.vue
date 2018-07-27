<template>
    <div class="mk-wealth">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Wealth extends Vue {
    private msg: string = 'Wealth';
}
</script>