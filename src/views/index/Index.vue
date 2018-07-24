<template>
    <div class="mk-index">
        <Welcome></Welcome>
        <div style="position: fixed; top: 10px; right: 10px; display: inline-block; width: 80px; height: 80px; background-color: rgba(85, 85, 85, 0.4); color: #ffffff; border-radius: 100%; font-size: 1rem; text-align: center; line-height: 80px;">
            {{ time }}s
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/Welcome.vue'; // @ is an alias to /src
@Component({
  components: {
      Welcome,
  },
})
export default class Index extends Vue {
    private msg: string = 'Hello world';
    private time: number = 3;
    private created() {
        this.changeTime();
    }
    private changeTime() {
        const timeFlag = setInterval(() => {
            this.time--;
            if (this.time === 0) {
                clearInterval(timeFlag);
            }
        }, 1000);
    }
}
</script>

<style lang="postcss" scoped>
    .mk-index {
        height: 100%;
        width: 100%;
        background-color: #42b983;
    }
</style>

