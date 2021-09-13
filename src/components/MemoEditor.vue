<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown"
         class="editor-layer">
      <div class="editor-top">
        <el-input class="editor-title"
               type="text"
               placeholder="标题"
               v-model="memo.title"></el-input>
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown">
            <span class="category">{{this.$store.state.aHelper.getCategoryName(memo.categoryId)}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="memo.categoryId=0">
              <a>工作</a>
            </li>
            <li @click="memo.categoryId=1">
              <a>生活</a>
            </li>
            <li @click="memo.categoryId=2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <div class="tools">
          <el-button icon="el-icon-check" type="text" @click="saveNew"></el-button>
          <el-button icon="el-icon-delete" type="text" @click="closeWin"></el-button>
        </div>
      </div>
      <textarea class="text-content form-control"
                placeholder="内容"
                v-model="memo.content"></textarea>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component
export default class MemoEditor extends Vue {
  // 用来保存 编辑框数据
  memo: ItemData = new ItemData(-1, 0);
  value: string = this.$store.state.aHelper.getCategoryName(this.memo.categoryId);
  constructor() {
    super();
    console.log(this.memo);
  }

  // 当组件 每次 创建显示时 都会被执行
  created(): void {
    // 接收 store 中 传过来的 数据对象
    this.memo = this.$store.state.transMemo;
  }

  closeWin() {
    this.$confirm(`确认删除${this.memo.title}笔记吗?`)
    this.$store.state.isShow = false;
  }

  //保存 新文章
  saveNew() {
    //1.验证 memo 数据是否 合格 arr.trim()去除数组前后空格
    if (
      this.memo &&
      this.memo.categoryId > -1 &&
      this.memo.title.trim().length > 0 &&
      this.memo.content.trim().length > 0
    ) {
      // 操作业务判断
      if (this.memo.id <= -1) {
        //2.将 验证合格 的 memo 对象 添加到 memoList数组，并保存到本地localStorage中
        this.$store.state.aHelper.add(this.memo);
      } else {
        this.$store.state.aHelper.edit(this.memo);
      }
      this.$store.state.isShow = false;
    } else {
      this.$confirm(`输入错误哦,请输入标题和内容`)
    }
  }
}
</script>