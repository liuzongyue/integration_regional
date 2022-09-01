<template>
  <div>
    <ul v-for="(item,index) in menuList" :key="item.label+index">
      <div @click="item.show = !item.show">{{item.label}}</div>
      <ul-menuList :menuList="item.children" v-if="item.children && item.show"></ul-menuList>
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
  }
</script>

<style lang="scss" scoped>

</style>