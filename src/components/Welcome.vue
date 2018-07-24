<template>
    <div class="mk-welcome">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
    private msg: string = '欢迎来到阳明天地';
}
</script>
