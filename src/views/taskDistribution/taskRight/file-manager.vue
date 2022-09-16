<template>
  <div class="file-manager">
    <h3 class="h3-title">文件管理</h3>
    <div class="file-manager-main">
      <div class="form-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="任务级别" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择任务级别">
              <el-option v-for="(item, index) in taskList" :key="item.value+index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">上传</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        desc: ''
      },
      rules: {
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
      },
      taskList: [
        {
          value: "任务一",
          label: "任务一"
        },
        {
          value: "任务二",
          label: "任务二"
        },
        {
          value: "任务三",
          label: "任务三"
        },
        {
          value: "任务四",
          label: "任务四"
        },
      ],
    }
  },
  methods: {
    submitForm() {},
    resetForm() {},
  },
}
</script>

<style lang="scss" scoped>
.file-manager {
  padding: 15px 20px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .file-manager-main {
    padding: 20px 0;
    flex: 1;
  }
}
</style>