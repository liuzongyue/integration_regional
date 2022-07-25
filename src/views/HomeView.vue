<template>
  <div class="home">
    <div class="son_box">
      <span class="drap_box" @click="GoDrapInfo">drap</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {
    GoDrapInfo() {
      this.$router.push({
        path: '/drapInfo'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  .son_box {
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%);
    animation: jump .5s ease forwards;
    .drap_box {
      display: inline-block;
      height: 50px;
      width: 200px;
      background-color: #aaf;
      text-align: center;
      line-height: 50px;
      border-radius: 16px;
      cursor: pointer;
    }
  }
}

@keyframes jump {
  0% {
    top: 0;
  }

  70% {
    top: 50%;
  }

  85% {
    top: 40%;
  }

  100% {
    top: 50%;
  }
}
</style>