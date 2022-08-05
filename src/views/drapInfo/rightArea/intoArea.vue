<template>
  <div class="into_area" id="takeHere">

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
#takeHere {
  box-sizing: border-box;
  // border: 1px solid rgb(6, 245, 177);
  height: 100%;
}

.dragover {
  border: 1px solid rgb(6, 245, 177);
}
.into_area{
  position: relative;
}
</style>