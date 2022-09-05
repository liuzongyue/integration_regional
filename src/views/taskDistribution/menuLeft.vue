<template>
  <el-menu default-active="/task-distribution/page1" :router="true" class="el-menu-vertical-demo task-left-menu"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height: 100%;">
    <el-menu-item index="/task-distribution/page1">
      <i class="el-icon-menu"></i>
      <span slot="title">我的任务</span>
    </el-menu-item>
    <el-menu-item index="/task-distribution/page2">
      <i class="el-icon-setting"></i>
      <span slot="title">职位管理</span>
    </el-menu-item>
    <el-menu-item index="/task-distribution/page3">
      <i class="el-icon-setting"></i>
      <span slot="title">任务管理</span>
    </el-menu-item>
    <el-menu-item index="/task-distribution/page4">
      <i class="el-icon-folder"></i>
      <span slot="title">文件管理</span>
    </el-menu-item>
    <span class="icon-logo">智能办公</span>
  </el-menu>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.task-left-menu {
  position: relative;
  .icon-logo{
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 700;
    color: antiquewhite;
  }
}
ul.el-menu-vertical-demo.el-menu {
  padding: 50px 0;
}
</style>