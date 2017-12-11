<template>
  <div id="app">
    <aside class="menu-content">
      <div class="introduce">
        <h3 class="title"> {{ title }} </h3>
        <p class="detail"> {{ detail }} </p>
      </div>
      <ul class="menu">
        <li class="head-li":class="{ active: isActivePath == '/'}" @click="move('/')">博客首页</li>
        <li class="head-li":class="{ active: isActivePath == '/personalWorks'}" @click="move('/personalWorks')">个人作品</li>
        <li class="head-li":class="{ active: isActivePath == '/aboutMe' }" @click="move('/aboutMe')">关于我</li>
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
        detail: '默默无闻的前端一枚',
        isActivePath: '/'
      }
    },
    methods: {
      move: function (val) {
        this.isActivePath = val
        this.$router.push({ path: val })
      }
    }
  }
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  html,body,#app{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#ffffff;
    text-align: center;
    color: #333333;
    display:flex;
    font-size:14px;
  }
  .menu-content{
    flex-basis: 240px;
    box-sizing: border-box;
    padding-top:40px;
    background-color:#f2f4f5;
  }
  .introduce{
    padding: 30px 0;
  }
  .menu-content .title{
    padding-bottom:10px;
  }
  .menu-content .detail{
    padding-bottom:10px;
    color:#999;
  }
  .menu li{
    list-style: none;
    line-height:34px;
    animation: all 0.2s;
    cursor:pointer;
    font-weight:600;
  }
  .menu li.active,.menu li:hover{
    color:#ff2a33
  }
  .main-content{
    flex:1;
    padding: 20px 100px;
    overflow-y:auto;
  }
</style>
