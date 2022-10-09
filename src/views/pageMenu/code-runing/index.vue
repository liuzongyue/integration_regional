<template>
  <div class="code-runing">
    <div class="edit-contanier-box">
      <Editor v-model="code" :options="editorOptions"
      @init="editorInit"
      @input='codeChange'
      lang="javascript"
      theme="chrome"
      ></Editor>
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
      editorOptions: {
        // 设置代码编辑器的样式
        enableBasicAutocompletion: true, //启用基本自动完成
        enableSnippets: true, // 启用代码段
        enableLiveAutocompletion: true, //启用实时自动完成
        tabSize: 2, //标签大小
        fontSize: 18, //设置字号
        showPrintMargin: false, //去除编辑器里的竖线
      }
    }
  },
  methods: {
    codeChange(val) {
      // console.log(val);
    },
    editorInit() {
      require('brace/theme/chrome');
      require('brace/ext/language_tools'); //language extension prerequsite...
      require('brace/mode/yaml');
      require('brace/mode/json');
      require('brace/mode/less');
      require('brace/snippets/json');
      require('brace/mode/lua');
      require('brace/snippets/lua');
      require('brace/mode/javascript');
      require('brace/snippets/javascript');
    },
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

  .edit-contanier-box {
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
.code-runing {
  .ace_print-margin {
    // display: none;
  }
}
</style>