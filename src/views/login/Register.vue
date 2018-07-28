<template>
    <div class="mk-register">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
    private msg: string = 'register';
}
</script>
