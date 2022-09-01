<template>
  <div class="right_container">
    <header>
      <div class="header_box">
        <button v-for="item in 50">   容器   </button>
      </div>
    </header>
    <div class="into_area" id="takeHere">

    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['dragBox'])
  },
  mounted() {
    let takeHere = document.getElementById("takeHere")
    takeHere.addEventListener("dragover", (e) => {
      e.preventDefault()
      if ([...takeHere.classList].indexOf("dragover") < 0) {
        takeHere.classList.add("dragover")
        console.log("进入放置区域")
      }
    })
    takeHere.addEventListener("dragleave", (e) => {
      takeHere.classList.remove("dragover")
    })
    takeHere.addEventListener("drop", (e) => {
      takeHere.classList.remove("dragover")
      takeHere.appendChild(this.dragBox)
    })
  },
}
</script>

<style lang="scss" scoped>
.right_container{
  width: 100%;
  height: 100%;
  .header_box{
    min-width: 200px !important;
  }
}
#takeHere {
  box-sizing: border-box;
  height: 100%;
}

.dragover {
  border: 1px solid rgb(6, 245, 177);
  box-sizing:border-box;
}

.into_area {
  position: relative;
  box-sizing: border-box;
}
</style>