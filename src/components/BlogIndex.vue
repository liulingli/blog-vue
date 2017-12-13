
<template>
  <div class="blog-index">
    <div class="blog-content">
      <article class="blog-list" v-for="(item,index) in blogList">
        <header class="blog-header">
          <h4 class="blog-title" @click="blogDetail(item)">
            <a class="blog-title-link" href="javascript:void(0)">{{ item.title }}</a>
          </h4>
          <div class="blog-meta">
            <span class="blog-time"><span class="blog-meta-item-text">发表于</span> {{ item.publishAt }}</span>
            <span class="blog-read"> &nbsp; | &nbsp;{{ item.readCount }}人浏览</span>
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
    <Pagination
      :current="current"
      :total="total"
      :size="size"
      @change="pageChange"
    ></Pagination>
  </div>
</template>

<script>
  import Pagination from '@/components/common/Pagination'
  export default {
    data () {
      return {
        blogList: [],
        current: 1,
        size: 2,
        total: 0
      }
    },
    mounted () {
      this.getBlogList()
    },
    computed: {
    },
    components: {
      Pagination
    },
    methods: {
      pageChange (page) {
        this.current = page
        this.getBlogList()
      },
      blogDetail (item) {
        this.$router.push({ path: '/blog/' + item.tid })
      },
      getBlogList () {
        fetch('/api/blog', {
          method: 'get',
          body: {
            pageSize: this.size,
            curPage: this.current
          }
        }).then(response => {
          this.blogList = response.result.list
          this.total = Math.ceil(response.result.total / this.size)
        })
      }
    }
  }
</script>

<style>
  .blog-index{
    padding-top:40px;
  }
</style>

