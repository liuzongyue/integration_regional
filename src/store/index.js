import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragBox: null, //被拖动的元素
  },
  getters: {
  },
  mutations: {
    setDragBox(state , step) { //设置被拖动的元素
      state.dragBox = step
    },
    emptyDragBox(state) { //初始化被拖动的元素
      state.dragBox = null
    }
  },
  actions: {
  },
  modules: {
  }
})
