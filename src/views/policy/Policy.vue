<template>
    <MKPolicy></MKPolicy>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MKPolicy from '@/components/common/policy/Policy.vue';

@Component({
    components: {
        MKPolicy,
    },
})
export default class Policy extends Vue {

}
</script>
