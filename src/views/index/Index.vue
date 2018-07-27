<template>
    <div class="mk-index">
        <transition>
            <Welcome v-if="!flag"></Welcome>
            <Alipay v-else></Alipay>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/welcome/Welcome.vue'; // @ is an alias to /src
import Alipay from '../alipay/Alipay.vue';

@Component({
  components: {
      Welcome,
      Alipay,
  },
})
export default class Index extends Vue {
    private msg: string = 'Hello world';
    private flag: boolean = true;

    private changeFlag(flag: boolean): boolean {
        return !flag;
    }

    // private created() {
    //     setTimeout(() => {
    //         this.flag = this.changeFlag(this.flag);
    //     }, 3200);
    // }
}
</script>

<style lang="postcss" scoped>
    .mk-index {
        height: 100%;
        width: 100%;
        background-color: #42b983;
    }
</style>

