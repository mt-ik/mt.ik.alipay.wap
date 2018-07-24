<template>
    <div class="mk-advertising">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})

export default class Advertising extends Vue {
    public name: string = 'MK-Advertising';
    private msg: string = '广告';
}
</script>
