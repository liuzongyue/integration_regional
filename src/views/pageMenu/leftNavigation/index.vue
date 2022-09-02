<template>
  <div class="menu-left">
    <ul-menuList :menuList="menuList"></ul-menuList>
  </div>
</template>

<script>
  import ulMenuList from "./ul-menuList.vue"
  export default {
    components: {
      ulMenuList,
    },
    data() {
      return {
        menuList: [
          {
            label: "功能组件",
            pathUrl: "/page-menu",
            show: false,
            children: [
              {
                label: "组件一",
                pathUrl: "",
              },
              {
                label: "组件二",
                pathUrl: "",
              },
              {
                label: "组件三",
                pathUrl: "",
              },
              {
                label: "组件四",
                pathUrl: "",
                show: false,
                children: [
                  {
                    label: "组件五",
                    pathUrl: "",
                  },
                ]
              },
            ]
          },
          {
            label: "功能组件",
            pathUrl: "/page-menu",
            show: false,
            children: [
              {
                label: "组件一",
                pathUrl: "",
              },
              {
                label: "组件二",
                pathUrl: "",
              },
              {
                label: "组件三",
                pathUrl: "",
              },
              {
                label: "组件四",
                pathUrl: "",
                show: false,
                children: [
                  {
                    label: "组件五",
                    pathUrl: "",
                  },
                ]
              },
            ]
          }
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
.menu-left {
  flex-basis: 200px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #cbbbbb;
  overflow: scroll;
  padding: 0;
}
.menu-left::-webkit-scrollbar{
  width: 0;
}
</style>