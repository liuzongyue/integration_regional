<template>
  <div class="code-runing">
    <div class="edit-contanier-box">
      <Editor v-model="code"></Editor>
    </div>
  </div>
</template>

<script>
import Editor from "vue2-ace-editor"
export default {
  components: {
    Editor,
  },
  data() {
    return {
      code: null, //编写的代码
    }
  },
  watch: {
    code() {
      console.log(this.code)
    },
  },
}
</script>

<style lang="scss" scoped>
.code-runing {
  height: 100%;
  box-sizing: border-box;
  padding-right: 40px;
  .edit-contanier-box{
    width: 100%;
    height: 50%;
    max-height: 300px;
    border: 1px solid #dcdee2;
    flex: 1;
    flex-shrink: 1;
  }
}
</style>
<style lang="scss">
  .code-runing{
    .ace_print-margin{
      display: none;
    }
  }
</style>