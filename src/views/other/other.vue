<template>
    <div class="mk-error">
        <not-found></not-found>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NotFound from '@/components/common/other/NotFound.vue';

@Component({
    components: {
        'not-found': NotFound,
    },
})
export default class Other extends Vue {}
</script>
