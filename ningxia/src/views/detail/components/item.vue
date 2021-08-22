<template>
  <div class="item">
      <div class="info">
        <img src="https://img2.baidu.com/it/u=3743808697,1317355772&fm=26&fmt=auto&gp=0.jpg" alt="">
        <div class="title">
            <h3>嘎嘣脆</h3>
            <div class="bottom">
                <div class="start">
                    <start></start>
                </div>
                <p class="time">2018-10-01</p>
            </div>
        </div>
      </div>
       <div class="info-text">
            <p>西部影城已逐步成为中国古代北方小城镇的缩影，集中了大量中华传统物质文化与非物质文化，再现祖先的生活方式、生产方式...</p>
            <a href="javascript:;">全文</a>
        </div>
        <div class="imgs">
           <img src="https://img2.baidu.com/it/u=3743808697,1317355772&fm=26&fmt=auto&gp=0.jpg" alt="">
            <img src="https://img2.baidu.com/it/u=3743808697,1317355772&fm=26&fmt=auto&gp=0.jpg" alt="">
             <img src="https://img2.baidu.com/it/u=3743808697,1317355772&fm=26&fmt=auto&gp=0.jpg" alt="">
        </div>
  </div>
</template>

<script>
import start from '../../../components/libs/score.vue'
export default {
  name: 'item',
  components: {
    start
  }
}
</script>

<style lang="scss">
.item{
    width: 100%;
    .info{
        width: 100%;
        display: flex;
        justify-content:left;
        padding:20px;
        box-sizing: border-box;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .title {
            flex: 1;
            margin-left: 10px;
            h3{
                text-align: left;
            }
            .bottom{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .start {
                    width:100px;
                    margin-top:-10px;
                }
                .time{
                    width:100px;
                    margin-top: 18px;
                }
            }
        }
    }
    .info-text{
        width: 80%;
        margin: auto;
        text-align: left;
        line-height: 1.5;
        a{
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #53AB3A;
            text-decoration: underline;
            line-height: 18px
        }
    }
    .imgs{
        width: 80%;
        margin:auto;
        display: flex;
        justify-content: space-between;
        img{
            width: 30%;
        }
    }
}
</style>
