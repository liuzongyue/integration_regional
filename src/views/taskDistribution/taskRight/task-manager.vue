<template>
  <div class="task-manager">
    <h3 class="h3-title">任务管理</h3>
    <div class="task-manager-main">
      <el-button class="make-task-btn" @click="createTask">{{showMakeTask ? "收起任务":"创建任务"}}</el-button>
      <div class="task-container">
        <div class="task-list" ref="taskList">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="任务名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="任务级别" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择任务级别">
                <el-option label="高" value="高"></el-option>
                <el-option label="中" value="中"></el-option>
                <el-option label="低" value="低"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="任务时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="开始日期" v-model="ruleForm.date1" style="width: 100%;">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-date-picker type="date" placeholder="结束日期" v-model="ruleForm.date2" style="width: 100%;">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="任务描述" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="task-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMakeTask: false, //是否新建任务
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) { //立即创建
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('创建成功');
        } else {
          console.log('创建失败');
          return false;
        }
      });
    },
    resetForm(formName) { //重置
      this.$refs[formName].resetFields();
    },
    createTask() {
      this.showMakeTask = !this.showMakeTask
      if(this.showMakeTask) {
        this.$refs.taskList.style.height = this.$refs.taskList.children[0].clientHeight+ 'px'
        this.$refs.taskList.style.opacity  = "100%"
      }else{
        this.$refs.taskList.style.height = 0+'px'
        this.$refs.taskList.style.opacity  = "0%"
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.task-manager {
  padding: 15px 20px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .task-manager-main {
    padding: 20px 0;
    flex: 1;

    .make-task-btn {
      margin: 20px;
      color: rgb(69, 190, 231);
    }

    .task-container {
      width: 60%;
      .task-list{
        height: 0;
        box-sizing: border-box;
        overflow: hidden;
        transition: all .3s;
      }
    }
  }
}
</style>
<style lang="scss">
  .task-manager{
    .line.el-col.el-col-2{
      text-align: center;
    }
    textarea.el-textarea__inner{
      min-height: 120px !important;
    }
  }
</style>