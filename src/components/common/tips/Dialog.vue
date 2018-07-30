<template>
    <md-dialog
      :title="backDialog.title"
      :closable="false"
      v-model="backDialog.open"
      :btns="backDialog.btns"
    >
    {{ backDialog.msg }}
    </md-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Dialog } from 'mand-mobile';

@Component({
    components: {
        [Dialog.name]: Dialog,
    },
})
export default class MKDialog extends Vue {
    @Prop()
    private openFlag: boolean = false;

    @Prop({ type: Object, default: () => ({}) })
    private dialogInfo: any;

    get backDialog() {
        return {
            open: this.openFlag,
            btns: [
                {
                    text: this.dialogInfo.cancel || '',
                    handler: this.onBackCancel,
                },
                {
                    text: this.dialogInfo.confirm || '',
                    handler: this.onBackConfirm,
                },
            ],
            title: this.dialogInfo.title || '',
            msg: this.dialogInfo.msg,
        };
    }

    @Emit('changeOpen')
    private changeOpenEimt(flag: boolean): boolean {
        return flag;
    }

    private onBackCancel(): void {
        this.changeOpenEimt(false);
        window.history.go(-1);
    }
    private onBackConfirm(): void {
        this.changeOpenEimt(false);
    }
}
</script>
