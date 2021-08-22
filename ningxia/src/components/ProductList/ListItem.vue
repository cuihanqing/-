<template>
  <router-link  class="product-item" :to="`/detail/${data.id}/${data.title}`">
    <div class="photo">
      <img :src="data.img" alt="" />
    </div>
    <div class="info">
      <h3>{{data.title}}</h3>
      <div class="labes">
        <a href="#">可定明日</a>
        <a href="#">自然风光</a>
      </div>
      <div class="evaluate">
        <div class="left">
          <span>4.5分</span>
          <b>8976人评价</b>
        </div>
        <div class="right">
          <p>
            ￥<span>{{ data.price }}</span
            >起
          </p>
        </div>
      </div>
      <div class="bottom">
        <p>距市中心4.4公里</p>
        <span>已售1238</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.product-item {
  margin-top:20px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #f6f6f6;
  z-index: 1;
  .photo {
    width:110px;
    height:110px;
    position: relative;
    img {
      display: block;
      width: 110px;
      height: 105px;
    }
    .label {
      width: 30px;
      height:30px;
      position: absolute;
      top: -37px;
      left: 37px;
      img {
        display: block;
        width:30px;
        transform: rotate(-90deg);
      }
      span {
        display: inline-block;
        font-size:12px;
        color: #fff;
        text-align: center;
        line-height:30px;
        position: absolute;
        top:40px;
        left: 0;
        z-index: 5;
      }
    }
  }
  .info {
    width: 63%;
    position: relative;
    h3 {
      font-family: PingFangSC-Regular;
      font-size:16px;
      font-weight: 800;
      text-align: left;
      color: #333333;
    }
    .one {
      width:45px;
      height:15px;
      display: block;
      background: #fc6120;
      border-radius: 100px;
      font-family: PingFangSC-Medium;
      font-size:12px;
      color: #ffffff;
      text-align: center;
      position: absolute;
      top: 0;
      right: 50%;
      transform: translateX(50%);
    }
    .labes {
      width: 100%;
      display: flex;
      margin-top:5px;
      justify-content: flex-start;
      a {
        font-family: PingFangSC-Regular;
        font-size:12px;
        color: #fc6120;
        width: 50px;
        height:12px;
        display: block;
        border-radius: 5%;
        margin: 0 5px;
        border: 1px solid #fc6120;
      }
    }
    .evaluate {
      width: 100%;
      margin-top:15px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 50%;
        display: flex;
        justify-content: space-between;
        span {
          font-family: PingFangSC-Regular;
          font-size:12px;
          color: #fc6120;
        }
        b {
          font-family: PingFangSC-Regular;
          color: #999999;
          font-size:12px;
        }
      }
      .right {
        margin-top: -15px;
        font-family: PingFangSC-Medium;
        font-size:12px;
        color: #fc6120;
        text-align: left;
        box-sizing: border-box;
        span {
          font-family: PingFangSC-Semibold;
          font-size: 23px;
          color: #fc6120;
          text-align: left;
        }
      }
    }
    .bottom {
      width: 100%;
      margin-top:20px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom:5px;
      p {
        font-family: PingFangSC-Regular;
        font-size:12px;
        color: #999999;
        text-align: right;
      }
      span {
        font-family: PingFangSC-Regular;
        font-size:12px;
        color: #999999;
      }
    }
  }
}
</style>
