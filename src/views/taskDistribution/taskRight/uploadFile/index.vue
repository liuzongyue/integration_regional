<template>
  <div class="upload-file">
    <label for="inputFile" class="label_input" id="labelContanier">
      <input type="file" id="inputFile" @change="selectFile" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadHandleNum: 0,
    }
  },
  methods: {
    selectFile(e) {
      const files = e.target.files[0]
      this.$emit("changeFile", files)
      if(files){
        this.uploadHandleNum = 1
      }
    }
  },
  mounted() {
    const that = this
    let labelContanier = document.getElementById("labelContanier")
    labelContanier.addEventListener("dragover", (e) => {
      e.preventDefault()
      if ([...labelContanier.classList].indexOf("dragover") < 0) {
        labelContanier.classList.add("dragover")
      }
    })
    labelContanier.addEventListener("dragleave", (e) => {
      if ([...labelContanier.classList].indexOf("dragover") > 0) {
        labelContanier.classList.remove("dragover")
      }
    })
    labelContanier.addEventListener("drop", (e) => {
      e.preventDefault()
      if ([...labelContanier.classList].indexOf("dragover") > 0) {
        labelContanier.classList.remove("dragover")
        // 当文件拖拽到dropBox区域时,可以在该事件取到files
        const files = e.dataTransfer.files[0];
        if(files) {
          this.$emit("changeFile", files)
          this.uploadHandleNum = 1
        }
      }
    })
    labelContanier.addEventListener("click", () => {
      that.uploadHandleNum = 0
    })
  },
  watch: {
    uploadHandleNum() {
      if(this.uploadHandleNum == 0) {
        this.$emit("changeFile", undefined)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.upload-file {
  .label_input {
    display: inline-block;
    width: 300px;
    height: 150px;
    background-color: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    position: relative;

    #inputFile {
      display: none;
    }
  }
  .label_input::before{
    content: "";
    background-image: url("./../../../../assets/images/upload-file.png");
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-size: cover;
  }
  .label_input:hover::after{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "上传文件(支持拖拽上传！)";
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    color: #409EFF;
  }
  .dragover{
    border: 1px solid #409EFF;
  }
}
</style>