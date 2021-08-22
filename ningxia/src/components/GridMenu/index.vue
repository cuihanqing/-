<template>
  <div class="grid-menu">
    <router-link  class="item" v-for="(item,index) in navs" :key="index" :to="`${item.path}`" tag="div">
      <img :src="item.src" alt="">
      <span>{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'grid-menu',
  props: {
    row: {
      type: Number,
      default: 2
    },
    col: {
      type: Number,
      default: 5
    },
    navs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.grid-menu{
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 20%;
    margin-top: 10px;
    img{
      width: 60%;
      display: block;
      margin: auto;
      border-radius: 50%;
    }
    span{
      display: block;
      margin-top:5px;
    }
  }
}
</style>
