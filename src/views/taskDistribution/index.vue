<template>
  <div class="LZY-task-distribution">
    <div class="LZY-menu-left">
      <menu-left></menu-left>
    </div>
    <div class="LZY-main-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import menuLeft from "./menuLeft.vue"
  export default {
    components: {
      menuLeft,
    },
  }
</script>

<style lang="scss" scoped>
.LZY-task-distribution{
  display: flex;
  min-height: 100vh;
  .LZY-menu-left{
    width: 15%;
    background-color: red;
    overflow: hidden;
  }
  .LZY-main-right{
    width: 85%;
    background-color: rgb(236, 236, 236);
    overflow: hidden;
  }
}
</style>