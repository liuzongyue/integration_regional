<template>
  <div class="file-manager">
    <h3 class="h3-title">文件管理</h3>
    <div class="file-manager-main">
      <div class="form-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="任务" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择任务">
              <el-option v-for="(item, index) in taskList" :key="item.value+index" :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任务文件" prop="file">
            <upload-file @changeFile="selectFile" ref="uploadFileComponent"></upload-file>
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
import uploadFile from "./uploadFile/index.vue"
export default {
  components: {
    uploadFile,
  },
  data() {
    return {
      fileInput: null, //选择的文件
      ruleForm: {
        region: '',
        file: ''
      },
      rules: {
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        file: [
          { required: true, message: '请选择任务文件', trigger: 'change' }
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          return true
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.ruleForm.file = ''
      this.fileInput = null
      this.$refs[formName].resetFields();
    },
    selectFile(file) {
      if (file) {
        this.ruleForm.file = file.name
        this.fileInput = file
        this.$refs["ruleForm"].validateField('file')
      } else {
        this.ruleForm.file = ''
        this.fileInput = null
      }
    },
  },
  mounted() {
  },
  watch: {
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

  .label_input {
    display: inline-block;
    width: 300px;
    height: 150px;
    background-color: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
  }

  #inputFile {
    display: none;
  }
}
</style>