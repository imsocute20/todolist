<template>
<div class="memo-container">
  <el-card class="memo">
    <div class="memo-heading">
      <h5 class="title">{{memo.title}}</h5>
      <div class="tools">
        <el-button icon="el-icon-edit" type="text" @click="showEdit"></el-button>
        <el-button icon="el-icon-delete" type="text" @click="doDel"></el-button>
      </div>
      <el-divider></el-divider>
    </div>
    <h6 class="memo-info">
      <span class="timeStamp">{{memo.createTime}}</span>
      <span class="category">分类: {{$store.state.aHelper.getCategoryName(memo.categoryId) }}</span>
    </h6>
    <div class="content">
      <div class="text">{{memo.content}}</div>
    </div>
  </el-card>
</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  //删除方法
  doDel():void {
        this.$confirm(`确认删除${this.memo.title}笔记吗?`)
          .then(_ => {
            this.$store.state.aHelper.remove(this.memo.id);
          })
          .catch(_ => {});
  }

  //打开 编辑框，显示要修改的笔记数据
  showEdit(): void {
    //1.创建副本
    let newMemo = JSON.parse(JSON.stringify(this.memo));
    //2.传递 给 transMemo
    this.$store.commit("showEditMemo", newMemo);
  }
}
</script>
