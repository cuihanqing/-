<template>
  <div class="wrap">
    <banner/>
    <grid-menu :row="2" :col="5" :navs="navs"/>
    <product-list></product-list>
  </div>
</template>

<script>
import banner from './components/banner.vue'
import GridMenu from '../../components/GridMenu/index.vue'
import ProductList from '../../components/ProductList/index.vue'
export default {
  name: 'home',
  components: {
    banner,
    GridMenu,
    ProductList
  },
  data () {
    return {
      navs: [
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '自然风光',
          path: '/product'
        },
        {
          src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.7t1mdR_VTmXZo0ytUmNfXgHaHa?w=220&h=220&c=7&o=5&pid=1.7',
          text: '全部景点',
          path: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  overflow: hidden;
}
</style>
