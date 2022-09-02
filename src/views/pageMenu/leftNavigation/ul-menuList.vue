<template>
  <div>
    <ul v-for="(item, index) in menuList" :key="item.label + index">
      <div @click="openPage($event, item)" class="menu-top">{{ item.label }}</div>
      <ul-menuList :menuList="item.children" v-show="item.children && item.show" class="an-menu"></ul-menuList>
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
      if (item.show) {
        this.$nextTick(() => {
          let node = e.target.parentNode.children[1]
          if (node) {
            node.style.height = item.children && (item.children.length * 90 + "px")
            node.style.transition = "all 2s";
          }
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.an-menu {
  color: red;
  background: blue;
  overflow: hidden;
}

.menu-top {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
}
</style>