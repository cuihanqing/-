<template>
   <div class="detail-info">
      <banner :title="$route.params.title"/>
      <div class="more">
        <router-link tag="div" class="info" to="/">
        <h3>景点简介</h3>
        <small>开放时间 景点特色</small>
        </router-link>
          <router-link to="/" tag="div" class="info">
        <h3>景点简介</h3>
        <small><b>4.5</b><span>8769人评分</span></small>
        </router-link>
      </div>
      <div class="address">
          <p>宁夏银川市西夏区镇北堡西部影城</p>
      </div>
  </div>
</template>

<script>
import banner from './banner.vue'
export default {
  name: 'detail-info',
  components: {
    banner
  }
}
</script>

<style lang="scss" scoped>
.more{
    width: 100%;
    display: flex;
    justify-content: space-around;
    .info{
        h3{
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #333333;
            text-align: left;
            line-height:15px;
        }
        small{
            display: block;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #999999;
            text-align: left;
            line-height: 13px;
            margin-top: 10px;
        }
    }
}
.address{
    width: 100%;
    text-align: left;
    margin-left: 40px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #333333;
    text-align: left;
    line-height: 20px;
}
</style>
