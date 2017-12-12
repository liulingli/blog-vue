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
  @font-face {
    font-family: 'iconfont';  /* project id 505797 */
    src: url('//at.alicdn.com/t/font_505797_eviqyb9u17wg66r.eot');
    src: url('//at.alicdn.com/t/font_505797_eviqyb9u17wg66r.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_505797_eviqyb9u17wg66r.woff') format('woff'),
    url('//at.alicdn.com/t/font_505797_eviqyb9u17wg66r.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_505797_eviqyb9u17wg66r.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family: 'iconfont';
    font-size:12px;
    color:#3c3c3c;
    font-style:normal;
  }
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
  ::selection {
    background: #262a30;
    color: #fff;
  }
  a {
    color: #555;
    text-decoration: none;
    border-bottom: 1px solid #999;
    word-wrap: break-word;
    cursor: pointer;
  }
  a:hover {
    color: #222;
    border-bottom-color: #222;
  }
  p {
    margin: 0 0 25px 0;
  }
  .text-center {
    text-align: center;
  }
  .btn {
    display: inline-block;
    padding: 0 20px;
    font-size: 14px;
    color: #fff;
    background: #222;
    border: 2px solid #222;
    text-decoration: none;
    border-radius: 0;
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
  .blog-title {
    font-size: 26px;
    text-align: center;
    word-break:break-all;
    line-height:1.5;
  }
  .blog-title-link {
    display: inline-block;
    position: relative;
    color: #555;
    border-bottom: none;
    line-height: 1.2;
    vertical-align: top;
  }
  .blog-title-link:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
  .blog-title-link::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
  .blog-meta{
    margin: 3px 0 60px 0;
    color: #999;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 12px;
    text-align: center;
  }
  .blog-body {
    text-align: justify;
  }
  .blog-more-link {
    margin-top: 50px;
  }
  .blog-more-link .btn {
    color: #fff;
    font-size: 14px;
    background: #222;
    border-radius: 0;
    line-height: 2;
  }
  .btn:hover, .blog-more-link .btn:hover {
    border-color: #222;
    color: #222;
    background: #fff;
  }
  .blog-footer .blog-eof {
    display: block;
    margin: 80px auto 60px;
    width: 8%;
    height: 1px;
    background: #ccc;
    text-align: center;
  }
</style>
