<template>
  <div class="drap_info">
    <div class="drap_left">
      <rect-angular></rect-angular>
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
  }
</script>

<style lang="scss" scoped>
.drap_info{
  display: flex;
  height: 100%;
  .drap_left{
    width: 200px;
    height: 100%;
    border-right: 1px solid #2c3e50;
    padding: 20px 10px;
    box-sizing: border-box;
  }
  .drap_right{
    background-color: #fff;
    flex-grow: 1;
  }
}
</style>