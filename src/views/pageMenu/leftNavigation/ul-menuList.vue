<template>
  <div>
    <ul v-for="(item, index) in menuList" style="height: 30px; overflow: hidden;" :key="item.label + index">
      <div @click="openPage($event, item)" class="menu-top">{{ item.label }}</div>
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
    }
  },
}
</script>

<style lang="scss" scoped>
.an-menu {
  color: red;
  background: blue;
}

.menu-top {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
}
</style>