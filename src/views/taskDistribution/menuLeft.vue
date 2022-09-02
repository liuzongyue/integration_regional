<template>
  <el-menu default-active="1" router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>