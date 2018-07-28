<template>
    <div class="mk-mine">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Mine extends Vue {
    public name: string = 'MK-Mine';
    private msg: string = 'Hello Mine';

    // private created() {
    //     alert('12211221111');
    // }
}
</script>
