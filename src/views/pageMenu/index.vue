<template>
  <div class="pageMenu">
    <section class="menu-container">
      <left-nav></left-nav>
      <main class="main-container">
        <header-nav></header-nav>
        <section class="section-box">
          <router-view></router-view>
        </section>
      </main>
    </section>
  </div>
</template>

<script>
  import leftNav from "./leftNavigation"
  import headerNav from "./headerNav"
export default {
  components: {
    leftNav,
    headerNav,
  },
}
</script>

<style lang="scss" scoped>
.pageMenu {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;

  .menu-container {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #cbbbbb;

    .main-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: column;
      .section-box {
        border: 1px solid #cbbbbb;
        width: 100%;
        flex: 1;
        box-sizing: border-box;
      }
    }
  }
}
</style>