<template>
  <div id="app">
    <div id="aa">
      <router-link to="/">home </router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/hell">登录</router-link>
      <router-link to="/meizu">魅族</router-link>
    </div>
    <div class="aa1">
      <router-view/>
    </div>
  </div>
</template>

<style>
  body{
    margin:0;
    padding:0;
    height: 100vh;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    display:flex;
    flex-direction: column;
  }
  #aa {
    width: 300px;

  }
  #aa a {
    font-weight: bold;
    color: #2c3e50;
  }

  #aa a.router-link-exact-active {
    color: #42b983;
  }
  .aa1{
    flex: 1;
    background-color: aliceblue;
    display:flex;


  }

</style>
<script>

  import Hello from "./components/HelloWorld";

  export default {
    components: {
      Hello
    }
  }
</script>