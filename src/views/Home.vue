<template>
  <div class="home">
主页
      <el-button type="info">按钮</el-button>
      <div class="count">
          <input type="button" value="获取" @click="gain">
          {{ $store.state.count }}
          <input type="button" value="改变" @click="doneTodosCount">

     
      </div>
  </div>

</template>

<script>
export default {
  name: 'Home',

  methods: {
      // ...mapActions([
      //     'increment',
      // ]),
      gain(){

          this.$store.dispatch('increment');
          // this.$store.commit('increment');
          console.log(this.$store.state.count);
      },
      count(){
          return this.$store.state.count
      },
      doneTodosCount () {
          this.$store.getters.getTodoById(2);
          console.log(this.$store.getters.getTodoById(2))
      },
  }

  
}
</script>
