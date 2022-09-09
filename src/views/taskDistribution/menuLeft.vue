<template>
  <el-menu :default-active="activeUrl" :router="true" class="el-menu-vertical-demo task-left-menu"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 100%; text-align: center;">
    <template v-for="(item, index) in menuList">
      <el-submenu v-if="item.children" :index="item.path">
        <template slot="title">{{item.Pname}}</template>
        <template v-for="(aitem, aindex) in item.children">
          <el-menu-item :index="aitem.path">{{aitem.Pname}}</el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="item.path">{{item.Pname}}</el-menu-item>
    </template>
    <span class="icon-logo">智能办公</span>
  </el-menu>
</template>

<script>
export default {
  computed: {
  },
  beforecreated() {
    
  },
  props: {},
  data() {
    return {
      activeUrl: "",
      menuList: [], //导航数组
    }
  },
  mounted() {
    this.activeUrl = this.$router.path
    this.menuList = this.$router.options.routes[3].children
  },
  watch: {
    $route: {
      handler: function(val) {
        this.activeUrl = val.path
      },
      deep: true
    }
  },
}
</script>

<style lang="scss" scoped>
.task-left-menu {
  position: relative;
  width: 100%;
  .icon-logo{
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 700;
    color: antiquewhite;
    white-space: nowrap !important;
  }
}
ul.el-menu-vertical-demo.el-menu {
  padding: 50px 0;
}
</style>
<style lang="scss">
.el-table__fixed-right::before, .el-table__fixed::before{
  display: none;
}
</style>