<template>
  <div>
    <ul v-for="(item, index) in menuList" style="height: 30px; overflow: hidden;" :key="item.label + index">
      <div @click="openPage($event, item)" @selectstart="dblFun" class="menu-top">{{ item.label }}</div>
      <ul-menuList :menuList="item.children" style="height: 0; overflow: hidden;" class="an-menu"></ul-menuList>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ulMenuList",
  components: {
  },
  props: {
    menuList: Array
  },
  methods: {
    openPage(e, item) {
      var timer = null
      const that = this
      return function () {
        if(timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout( () => {
          that.openPageFun(e, item)
        }, 200)
      }
    },
    openPage(e, item) {
      item.show = !item.show
      e.target.parentNode.style.height = "auto"
      let node = e.target.parentNode.children[1]
      node.style.height = node.clientHeight + 'px'
      if (item.show) {
        if (node) {
          node.style.transition = "all .5s";
          node.style.height = item.children && (item.children.length * 30 + "px")
          setTimeout(() => {
            node.style.height = "auto"
          }, 500)
        }
      }else{
        if (node) {
          setTimeout( () => {
            node.style.transition = "all .2s";
            node.style.height = 0
          })
        }
      }
    },
    dblFun(e) {
      e.preventDefault();
    },
  },
}
</script>

<style lang="scss" scoped>
.an-menu {
  font-size: 12px;
}

.menu-top {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>