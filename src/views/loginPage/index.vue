<template>
  <div class="LZY-login-page">
    <div class="login_contanier">
      <div class="login-image-left"></div>
      <div class="login-info-right">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verCode" v-show="!isRegistered">
            <el-input v-model="ruleForm.verCode"></el-input>
          </el-form-item>
          <el-form-item v-show="!isRegistered">
            <el-button type="primary" @click="getCode('ruleForm')">获取验证码</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
          <el-form-item v-show="isRegistered" class="login-btn">
            <el-button type="primary" @click="goLogin()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { login, test } from "./../../utils/apis/login"
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
        verCode: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        verCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
      },
      isRegistered: true, //是否注册
    }
  },
  methods: {
    getCode(formName) { //获取验证码
      console.log(this.$refs[formName].model)
    },
    submitForm(formName) { //注册
      const that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.isRegistered = true
        } else {
          console.log(this.$refs[formName].model)
          return false;
        }
      });
    },
    resetForm(formName) { //重置
      console.log(this.$refs[formName].model)
    },
    async goLogin() { //登录
      // console.log(this.ruleForm)
      this.$router.push({
        path: "/task-distribution"
      })
      const obj = {
        username: "zhangsan",
        password: "123",
      }
      // const res = await login(obj)
    },
  },
}
</script>

<style lang="scss" scoped>
.LZY-login-page {
  width: 100vw;
  height: 100vh;
  position: relative;

  .login_contanier {
    width: 800px;
    height: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(206, 225, 241);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    background-image: url("./../../assets/images/login_bg.jpeg");
    background-size: cover;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, .2);

    .login-image-left {
      width: 50%;
      height: 100%;
    }

    .login-info-right {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      .login-btn{
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>