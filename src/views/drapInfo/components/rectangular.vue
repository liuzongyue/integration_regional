<template>
  <div class="drag_container">
    <div id="rectangular1" draggable="true"></div>
    <div id="rectangular2" draggable="true"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        dragNum: 0, //拖动的元素序号
      }
    },
    methods: {
      setDragBoxFun(ele) { //设置状态管理中的被拖动元素
        this.$store.commit('setDragBox',ele)
      },
      ...mapMutations(['setDragBox']),
      emptyDragBoxFun() { //设置状态管理中的初始化被拖动元素
        this.setDragBox()
      },
    },
    computed: {
      ...mapState(['dragBox'])
    },
    mounted() {
      let drag_container = document.getElementsByClassName("drag_container")[0]
      let node_list = drag_container.childNodes
      node_list.forEach( (item,index) => {
        item.addEventListener("dragstart", e => {
          e.dataTransfer.setData("dragBox",e.target.id)
          this.setDragBoxFun(e.target)
        })
        item.addEventListener("dragend",(e) => {
          this.emptyDragBoxFun()
        })
      })
    },
  }
</script> 
  
<style lang="scss" scoped>
.drag_container{
  display: flex;
  flex-wrap: wrap;
  &>*{
    box-sizing: border-box;
    margin: 10px;
  }
}
#rectangular1,#rectangular2{
  width: 50px;
  height: 30px;
  border: 1px solid #aaa;
  cursor: pointer;
}
#rectangular2{
  border-radius: 50%;
}
</style>