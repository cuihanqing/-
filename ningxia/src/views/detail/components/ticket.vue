<template>
  <div>
    <dl v-for="(item,index) in list" :key="index" v-show="showMore || index>3">
        <dt>
            <h2>{{item.title}}</h2>
            <p class="message">{{item.title}}</p>
                <div class="labes">
                <a href="#">可定明日</a>
                <a href="#">自然风光</a>
            </div>
            <p>
                <span>已售</span>
                <a href="#">预订须知</a>
            </p>
        </dt>
        <dd>
            <div class="price">￥<b>{{item.price}}</b>元</div>
            <button>预订</button>
        </dd>
    </dl>
    <p class="more" @click="showMore = !showMore">查看全部票型</p>
  </div>
</template>

<script>
export default {
  name: 'ticket',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log(this.list)
  },
  data () {
    return {
      showMore: false
    }
  }
}
</script>

<style lang="scss">
dl{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin:10px 0;
    border-bottom:1px solid #eeee;
    padding:10px 0;
    dt{
        width: 50%;
        h2{
            font-size: 16px;
            font-weight: 800;
        }
        .message{
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #FC6120;
                line-height: 12px;
        }
        .labes{
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-top:5px;
            a{
                font-size: 12px;
                display: block;
                padding:2px 5px;
                color: #333;
                border: 1px solid #FC6120;
                border-radius: 5px;
            }
        }
        p{
            margin-top: 10px;
            font-size: 14px;
           a{
             margin-left: 10px;
             font-size: 14px;
             color: #f00;
           }
        }
    }
    dd{
        width: 50%;
        text-align: right;
        margin-right: 30px;
        box-sizing: border-box;
        .price{
            text-align: right;
            font-family: PingFangSC-Medium;
            font-size: 13px;
            color: #FC6120;
            margin-bottom: 10px;
            line-height: 10px;
            b{
                font-family: PingFangSC-Semibold;
                font-size: 23px;
                color: #FC6120;
                text-align: left;
                line-height: 16px;
            }
        }
        button{
            width: 60px;
            height: 25px;
            background-image: linear-gradient(-90deg, #6FC856 0%, #54AD3B 100%);
            border-radius: 100px;
            border: none;
            color: #fff;
            display:inline-block;
        }
    }
}
.more{
    display: block;
    width: 100%;
    margin:10px 0;
    text-align: center;
    font-size: 14px;
    color: #333;
}
</style>
