import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '早上',},
      { id: 2, text: '晚上',}
    ]

  },
  mutations: {
    increment(state){
      state.count++;
      // console.log(this.store.state.count);
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  modules: {
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
