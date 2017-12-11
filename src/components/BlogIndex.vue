<template>
  <div class="blog-index">
    <article class="blog-list" v-for="(item,index) in blogList">
      <header class="blog-header">
        <h4 class="blog-title" @click="blogDetail(item)">
          <a class="blog-title-link" href="javascript:void(0)">{{ item.title }}</a>
        </h4>
        <div class="blog-meta">
          <span class="blog-time"><span class="blog-meta-item-text">发表于</span> {{ item.time }}</span>
          <span class="blog-author"><span class="blog-meta-item-text"> &nbsp; | &nbsp;作者 </span>{{ item.author }}</span>
          <span class="blog-category"><span class="blog-meta-item-text"> &nbsp; | &nbsp;分类于</span> <a href="javascript:void(0)">{{ item.category }}</a></span>
          <span class="blog-read"> &nbsp; | &nbsp;{{ item.read }}人浏览</span>
        </div>
      </header>
      <div class="blog-body">
        <p>{{ item.content }}</p>
        <div class="blog-more-link text-center">
          <a class="btn" @click="blogDetail(item)" rel="contents">
            阅读全文 »
          </a>
        </div>
      </div>
      <footer class="blog-footer">
        <div class="blog-eof"></div>
      </footer>
    </article>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        blogList: [{
          title: 'Apache RocketMQ 深圳沙龙报名开启！',
          content: 'Apache RocketMQ深圳沙龙报名正式开启。12月16日，Apache RocketMQ将在深圳举办线下沙龙！届时，社区里的PMC Member、Committer、深度用户，来自各路的资深专家汇聚一堂，就分布式消息引擎的最佳实践、性能优化、流计算集成、开源大数据生态和 OpenMessaging 规范等，为大家带来一场技术上的饕餮盛宴，促进消息领域与社区的进一步发展。',
          time: '2017-12-11',
          author: '小六子不伶俐',
          category: '前端',
          read: 50
        }, {
          title: '阿里云双11云产品访谈 之 互联网中间件',
          content: '阿里巴巴中间件（Aliware）被称为快速复制阿里巴巴互联网架构的秘密武器。目前，阿里巴巴中间件上线了哪些产品？这些产品有什么功能和特性？2017年的双11，又会做出哪些优惠活动呢？',
          time: '2017-12-12',
          author: '小六子不伶俐',
          category: '前端',
          read: 12
        }]
      }
    }
  }
</script>

<style>
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
  .blog-index{
    padding-top:40px;
  }
  .blog-title {
    font-size: 26px;
    text-align: center;
    word-break: break-word;
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

