<template>
    <div class="mk-index">
        <transition>
            <!-- <Welcome v-if="!flag"></Welcome> -->
            <!-- <Alipay v-else></Alipay> -->
            <router-view></router-view>
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
    private flag: boolean = false;

    private changeFlag(flag: boolean): boolean {
        return !flag;
    }

    // private created() {
        // setTimeout(() => {
        //     this.flag = this.changeFlag(this.flag);
        // }, 3200);
        // this.$router.push({ path: 'login'});
    // }
}
</script>

<style lang="postcss" scoped>
    .mk-index {
        height: var(--mk-height);
        width: var(--mk-width);
        background-color: var(--mk-bg-color);
        overflow: hidden;
        position: relative;
    }
</style>

