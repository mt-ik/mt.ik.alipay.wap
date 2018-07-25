<template>
    <div class="mk-index">
        <Welcome></Welcome>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/welcome/Welcome.vue'; // @ is an alias to /src
@Component({
  components: {
      Welcome,
  },
})
export default class Index extends Vue {
    private msg: string = 'Hello world';
}
</script>

<style lang="postcss" scoped>
    .mk-index {
        height: 100%;
        width: 100%;
        background-color: #42b983;
    }
</style>

