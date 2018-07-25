<template>
    <div class="mk-welcome">
        {{ msg }}
        <time-tip></time-tip>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeTip from '@/components/welcome/TimeTip.vue';
@Component({
    components: {
        'time-tip': TimeTip,
    },
})
export default class Welcome extends Vue {
    private msg: string = '欢迎来到阳明天地';
}
</script>
