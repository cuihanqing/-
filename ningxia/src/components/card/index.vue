<template>
  <div class="card">
      <template>
        <router-link v-if="href" tag="div" class="header" :to="href">
          <div class="left">
            <b class="line"></b>
            <h2>{{title}}</h2>
          </div>
            <span>&gt;</span>
        </router-link>
        <div class="header" v-else>
            <h2>{{title}}</h2>
        </div>
      </template>
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
    width: 100%;
    background-color: #fff;
    margin-top:10px;
    .header{
        width: 100%;
        height: 50px;
        padding: 0 16px;
        box-sizing: border-box;
        display: flex;
        justify-content:space-between;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        .left{
          display: flex;
          justify-content: space-between;
        }
        h2{
            font-size: 16px;
            color: #333;
            text-align: left;
            margin-left:20px;
        }
        .line{
          display: block;
          width: 4px;
          height: 17px;
          background: #53AB3A;
          margin-top: 10px;
        }
        span{
          font-size: 20px;
        }
    }
}
</style>
