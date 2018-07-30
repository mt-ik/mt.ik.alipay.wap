<template>
    <div class="mk-not-found">
        <md-result-page
            class="customized"
            img-url="//manhattan.didistatic.com/static/manhattan/do1_JX7bcfXqLpStKRv31xlp"
            text="不太确定自己错在了哪里..."
            subtext="要不然刷新试试？">
        </md-result-page>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ResultPage } from 'mand-mobile';

@Component({
    components: {
        [ResultPage.name]: ResultPage,
    },
})
export default class NotFound extends Vue {}
</script>

<style lang="postcss" scoped>
.mk-not-found {
    width: 100%;
    position: fixed;
    top: 20%;
}
</style>

