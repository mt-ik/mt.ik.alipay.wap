<template>
  <div id="app">
    <md-field title="投保人" class="block">
      <md-input-item
        title="投保人姓名"
        placeholder="请填写投保人姓名"
      ></md-input-item>
      <md-input-item
        title="身份证号"
        placeholder="请填写投保人身份证号"
      ></md-input-item>
    </md-field>
    <md-field title="被保人" class="block">
      <md-input-item
        title="被保人姓名"
        placeholder="请填写被保人姓名"
      ></md-input-item>
      <md-field-item
        title="与投保人关系"
        arrow="arrow-right"
        :value="relation"
        @click="isPickerShow = true"
        solid
      ></md-field-item>
      <md-picker
        v-model="isPickerShow"
        :data="pickerData"
        title="选择与投保人关系"
      ></md-picker>
      <md-input-item
        title="身份证号"
        placeholder="请填写被保人身份证号"
      ></md-input-item>
      <md-input-item
        title="手机号"
        type="phone"
        placeholder="请填写被保人手机号"
      ></md-input-item>
    </md-field>
    <md-agree class="agree">
      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
    </md-agree>
    <md-action-bar :actions="actionBarData">
      &yen;128.00
    </md-action-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  Agree,
  ActionBar,
  Field,
  FieldItem,
  InputItem,
  Picker,
} from 'mand-mobile';

@Component({
  components: {
    [Agree.name]: Agree,
    [ActionBar.name]: ActionBar,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [InputItem.name]: InputItem,
    [Picker.name]: Picker,
  },
})
export default class About extends Vue {
  private relation: string = '本人';
  private isPickerShow: boolean = false;
  private actionBarData: any[] = [{ text: '我要投保' }];
  private pickerData: any[] = [[{ text: '本人' }, { text: '父母' }, { text: '配偶'}, { text: '子女' }]];
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body{
  background: #f0f0f0;
}
.detail{
  background: #fff;
  font-size: .24rem;
}
.block{
  margin-top: .32rem;
}
.agree{
  padding: .32rem;
  font-size: .24rem;
  color: #666;
}
</style>
