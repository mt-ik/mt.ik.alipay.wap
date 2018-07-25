<template>
    <div class="mk-time-tip">
        <span @click="go">{{ time }}</span>
        <span>s</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TimeTip extends Vue {
    private time: number = 3;
    private changeTime() {
        const timeFlag = setInterval(() => {
            this.time--;
            if (this.time === 0) {
                clearInterval(timeFlag);
            }
        }, 1000);
    }
    private go() {
        alert('1111');
    }
    private created() {
        this.changeTime();
    }
}
</script>

<style lang="postcss" scoped>
    .mk-time-tip {
        position: fixed;
        top: 20px;
        right: 20px;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        display: inline-block;
        background-color: rgba(85, 85, 85, 0.2);
        color: #ffffff;
        font-size: 28px; 
        text-align: center; 
        line-height: 100px;
    }
</style>
