<template>
  <div class="upload-file">
    <label for="inputFile" class="label_input" id="labelContanier">
      <input type="file" id="inputFile" @change="selectFile">
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    selectFile(e) {
      const files = e.target.files[0]
      this.$emit("changeFile", files)
    }
  },
  mounted() {
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
        }
      }
    })
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

    #inputFile {
      display: none;
    }
  }
}
</style>