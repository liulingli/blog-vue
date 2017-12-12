<template>
  <div class="blog-main">
    <article class="blog-list">
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
        item: {}
      }
    },
    mounted () {
      this.getBlogDetail()
    },
    methods: {
      getBlogDetail: function () {
        fetch('/api/blog/' + this.$route.params.id, {
          method: 'get'
        }).then(response => {
          this.item = response.result
        })
      }
    }
  }
</script>

<style>
  .blog-main{
    padding-top:40px;
  }
</style>
