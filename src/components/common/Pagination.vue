<template>
  <nav class="pagination"  v-show="show" >
    <a class="extend prev" rel="prev" href="javascript:void(0)" @click="prevPage">
      <i class="iconfont">&#xe624;</i>
    </a>
    <a class="page-number" v-show="curPage > 2" href="javascript:void(0)" @click="changePage(1)">1</a>
    <span class="space" v-show="beforeSpace">…</span>
    <a class="page-number" v-for="page in middlePage" :class="{current: page === curPage}"  href="javascript:void(0)" @click="changePage(page)">{{ page }}</a>
    <span class="space" v-show="afterSpace">…</span>
    <a class="page-number" href="javascript:void(0)" :class="{current: totalPage === curPage}" @click="changePage(totalPage)">{{ totalPage }}</a>
    <a class="extend next" rel="next" href="javascript:void(0)" @click="nextPage">
      <i class="iconfont">&#xe623;</i>
    </a>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        curPage: this.current,
        pageSize: this.size,
        totalPage: this.total
      }
    },
    props: {
      current: {
        type: Number,
        default: 1
      },
      size: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 0
      }
    },
    computed: {
      show: function () {
        console.log(this.totalPage)
        return this.totalPage > 1
      },
      beforeSpace: function () {
        return this.curPage >= 4 && this.totalPage >= 5
      },
      afterSpace: function () {
        return this.curPage <= this.totalPage - 3
      },
      middlePage: function () {
        let arr = []
        for (let i = this.curPage - 1; i < this.curPage + 2; i++) {
          if (i < this.totalPage && i > 0) {
            arr.push(i)
          }
        }
        return arr
      }
    },
    methods: {
      changePage (page) {
        if (this.curPage !== page) {
          this.curPage = page
          this.go(this.curPage)
        }
      },
      prevPage () {
        if (this.curPage > 1) {
          this.curPage = this.curPage - 1
          this.go(this.curPage)
        }
      },
      nextPage () {
        if (this.curPage < this.totalPage) {
          this.curPage = this.curPage + 1
          this.go(this.curPage)
        }
      },
      go (page) {
        this.$emit('change', page)
      }
    },
    watch: {
      current: function (val) {
        this.curPage = val
      },
      total: function (val) {
        this.totalPage = val
      }
    }
  }
</script>

<style>
  .pagination {
    margin: 120px 0 40px;
    text-align: center;
    border-top: 1px solid #eee;
  }
  .page-number-basic,
  .pagination .prev,
  .pagination .next,
  .pagination .page-number,
  .pagination .space {
    display: inline-block;
    position: relative;
    top: -1px;
    margin: 0 10px;
    padding: 0 10px;
    line-height: 30px;
  }
   .page-number-basic,
   .pagination .prev,
   .pagination .next,
   .pagination .page-number,
   .pagination .space {
     margin: 0 5px;
   }
  .pagination .prev,
  .pagination .next,
  .pagination .page-number {
    border-bottom: 0;
    border-top: 1px solid #eee;
    transition-property: border-color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
  .pagination .prev:hover,
  .pagination .next:hover,
  .pagination .page-number:hover {
    border-top: 1px solid #222;
  }
  .pagination .space {
    padding: 0;
    margin: 0;
  }
  .pagination .prev {
    margin-left: 0;
  }
  .pagination .next {
    margin-right: 0;
  }
  .pagination .page-number.current {
    color: #fff;
    background: #ccc;
    border-top-color: #ccc;
  }
  .pagination .prev,
  .pagination .next,
  .pagination .page-number {
    margin-bottom: 10px;
    border-bottom: none;
  }
  .pagination .prev:hover,
  .pagination .next:hover,
  .pagination .page-number:hover {
    border-bottom-color: #222;
  }
</style>
