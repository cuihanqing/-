<template>
  <div class="content">
    <div class="classify">
      <p><span>4.5</span>分/5分</p>
      <h4><b>8976人评分</b></h4>
    </div>
    <div class="options">
      <b v-for="(item,index) in list" :key="index">{{item.title}}</b>
    </div>
    <div class="content">
      <evaItem/>
      <evaItem/>
    </div>
  </div>
</template>

<script>
import evaItem from './item.vue'
export default {
  name: 'evaluate',
  components: {
    evaItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log(this.list)
  }
}
</script>

<style lang="scss">
.content{
  width: 100%;
  // height: 500px;
  .classify{
    width: 100%;
    display: flex;
    justify-content:left;
    padding:10px 20px;
    box-sizing: border-box;
    p{
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #FC611F;
      letter-spacing: 0;
      line-height:15px;
    }
    h4{
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #999999;
      letter-spacing: 0;
      line-height: 15px;
      margin-left: 20px;
    }
  }
  .options{
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: left;
    b{
      display: block;
      width: 80px;
      height: 26px;
      font-size: 13px;
      box-sizing: border-box;
      background: #F5F5F5;
      border-radius: 2px;
      color: #999999;
      letter-spacing: 0;
      text-align: center;
      line-height: 26px;
      margin:0 5px;
      &:nth-child(1){
        background: #53AB3A;
        border-radius: 2px;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        line-height: 15px;
        line-height: 26px;
      }
    }
  }
}
</style>
