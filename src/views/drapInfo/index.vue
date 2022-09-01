<template>
  <div class="drap_info">
    <div class="drap_left" :style="{width: lWidth}">
      <rect-angular></rect-angular>
      <span class="sliding_box" @mousedown.stop="handleMousedown"></span>
    </div>
    <div class="drap_right">
      <into-area></into-area>
    </div>
  </div>
</template>

<script>
import rectAngular from "./components/rectangular.vue"
import intoArea from "./rightArea/intoArea.vue"
export default {
  components: {
    rectAngular,
    intoArea,
  },
  computed: {
    lWidth() {
      return (this.left_width + "px")
    },
  },
  data() {
    return {
      left_width: "", //左侧区域宽度
      right_width: "", //右侧区域宽度
      difference_num: "", //鼠标和拉动小图标中心的横向差距
      isdown: false, //判断鼠标是否按下滑动小图标
    }
  },
  methods: {
    handleMousedown(e) {
      this.isdown = true
      this.difference_num = e.pageX - e.target.offsetLeft
      const that = this
      that.left_width = e.pageX - that.difference_num + 1
      document.addEventListener("mousemove" , (e) => {
        if(this.isdown) {
          that.left_width = e.pageX - that.difference_num
        }
      })
      document.addEventListener("mouseup" , () => {
        that.isdown = false
      })
      e.stopPropagation();
    }
  },
}
</script>

<style lang="scss" scoped>
.drap_info {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  .drap_left {
    width: 200px;
    height: 100%;
    border-right: 1px solid #2c3e50;
    padding: 20px 10px;
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
    min-width: 165px !important;

    .sliding_box {
      display: inline-block;
      background: rgb(203, 197, 197);
      width: 12px;
      height: 25px;
      border-radius: 5px;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }

  .drap_right {
    background-color: #fff;
    box-sizing: border-box;
  }
}
</style>