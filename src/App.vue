<template>
  <div id="app">
    <aside class="menu-content">
      <div class="introduce">
        <h2 class="title"> {{ title }} </h2>
        <p class="detail"> {{ detail }} </p>
      </div>
      <ul class="menu">
        <li class="head-li" @click="move('/')">博客首页</li>
        <li class="head-li" @click="move('/personalWorks')">个人作品</li>
        <li class="head-li" @click="move('/aboutMe')">关于我</li>
      </ul>
    </aside>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '小六子不伶俐',
        detail: '默默无闻的前端一枚'
      }
    },
    methods: {
      move: function (val) {
        this.$router.push({ path: val })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display:flex;
  }
  .menu-content{
    flex-basis: 200px;
  }
  .main-content{
    flex:1;
  }
</style>
