<template>
  <!-- 菜单栏 -->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">
          <img height="40"
               src="../assets/122.png" />
        </a>
      </div>
      <div class="collapse navbar-collapse navbar-right">
      <el-menu mode="horizontal">
        <el-menu-item index="1"><el-link @click="showAdd" icon="el-icon-edit" :underline="false">添加</el-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><el-link type="info" @click="doFilterByCateId(-1)" :underline="false">全部<span class="number">{{doFilter(-1)}}</span></el-link></template>
          <el-menu-item icon="el-icon-check" type="text"><el-link type="info" :underline="false" @click="doFilterByCateId(0)">工作<span class="number">{{doFilter(0)}}</span></el-link></el-menu-item>
          <el-menu-item><el-link type="info" :underline="false" @click="doFilterByCateId(1)">生活<span class="number">{{doFilter(1)}}</span></el-link></el-menu-item>
          <el-menu-item><el-link type="info" :underline="false" @click="doFilterByCateId(2)">学习<span class="number">{{doFilter(2)}}</span></el-link></el-menu-item>
        </el-submenu>
      </el-menu>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class MenuBar extends Vue {
  // 显示 编辑框
  showAdd() {
    this.$store.state.transMemo = new ItemData(-1, 0);
    this.$store.state.isShow = true;
  }
  doFilter(cid: number): number {
    if (cid == -1) {
      return this.$store.state.aHelper.memoList.length;
    } else {
      return this.$store.state.aHelper.memoList.filter((ele: any) => {
        return ele.categoryId == cid;
      }).length;
    }
  }
  doFilterByCateId(cid: number) {
    this.$store.state.filterCateId = cid;
  }
}
</script>
<style>
.number{
  border: 2px solid;
  border-radius: 30px;
  margin: 10px;
}
</style>