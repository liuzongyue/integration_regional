<template>
  <div class="file-manager">
    <h3 class="h3-title">文件管理</h3>
    <div class="file-manager-main">
      <div class="form-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="任务" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择任务">
              <el-option v-for="(item, index) in taskList" :key="item.value+index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任务文件" prop="file">
            <div>
              <label for="inputFile" class="label_input" id="labelContanier">
                <input type="file" id="inputFile" @change="selectFile">
              </label>
            </div>
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
    submitForm() {},
    resetForm() {},
    selectFile(e) {
      if(e.target.files.length > 0) {
        this.ruleForm.file = e.target.files[0].name
        this.fileInput = e.target.files[0]
      }else{
        this.ruleForm.file = ''
        this.fileInput = null
      }
    },
  },
  mounted() {
    let labelContanier = document.getElementById("labelContanier")
    labelContanier.addEventListener("dragover", (e) => {
      e.preventDefault()
      if([...labelContanier.classList].indexOf("dragover") < 0) {
        labelContanier.classList.add("dragover")
      }
    })
    labelContanier.addEventListener("dragleave", (e) => {
      if([...labelContanier.classList].indexOf("dragover") > 0) {
        labelContanier.classList.remove("dragover")
      }
    })
    labelContanier.addEventListener("drop", (e) => {
      if([...labelContanier.classList].indexOf("dragover") > 0) {
        labelContanier.classList.remove("dragover")
        // 当文件拖拽到dropBox区域时,可以在该事件取到files
	      const files = e.dataTransfer.files[0];
        files && (this.fileInput = files)
      }
    })
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
  .label_input{
    display: inline-block;
    width: 300px;
    height: 150px;
    background-color: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
  }
  #inputFile{
    display: none;
  }
}
</style>