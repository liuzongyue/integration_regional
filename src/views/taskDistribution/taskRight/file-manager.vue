<template>
  <div class="file-manager">
    <h3 class="h3-title">文件管理</h3>
    <div class="file-manager-main"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.file-manager{
  padding: 15px 20px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .file-manager-main{
    padding: 20px 0;
    flex: 1;
  }
}
</style>