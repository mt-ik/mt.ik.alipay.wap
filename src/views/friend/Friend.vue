<template>
    <div class="mk-friend">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Friend extends Vue {
    private msg: string = 'friend';
}
</script>
