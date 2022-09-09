<template>
  <el-dialog title="职位管理" :visible.sync="dialogValue" width="30%" :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogValue: Boolean,
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleClose() {
      this.$emit("closeDialog")
    },
  },
}
</script>

<style lang="scss" scoped>

</style>