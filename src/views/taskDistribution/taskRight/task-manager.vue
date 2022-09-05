<template>
  <div class="task-manager">
    <h3 class="h3-title">任务管理</h3>
    <div class="task-manager-main"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.task-manager{
  padding: 15px 20px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .task-manager-main {
    padding: 20px 0;
    flex: 1;
  }
}
</style>