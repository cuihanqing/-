<template>
  <div class="fifterBar">
      <fifter-btn title="全部城市"
      v-model="val.city"
       :index="0"
       :list="cityList">
      </fifter-btn>
        <fifter-btn title="综合排序"
         v-model="val.order"
         :index="1"
         :list="orderList">
      </fifter-btn>
       <fifter-btn title="预订时间" v-model="val.time" :index="2" ref="other">
           <div class="timeBox">
               <h3>预定时限</h3>
               <div>
                   <label><input type="radio" v-model="val.time" name="a" value="1" />可定今日</label>
                   <label><input type="radio" v-model="val.time" name="a"  value="2"  />可定明日</label>
               </div>
                <div>
                    <button @click="select">确定</button>
                </div>
           </div>
      </fifter-btn>
  </div>
</template>

<script>
import FifterBtn from './FifterBtn.vue'
export default {
  name: 'fifter-bar',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      activeIndex: -1,
      val: {
        city: '',
        order: '',
        time: ''
      },
      cityList: [
        { text: '全部城市', value: '' },
        { text: '北京', value: '0' },
        { text: '上海', value: '1' },
        { text: '深圳', value: '2' },
        { text: '郑州', value: '3' }
      ],
      orderList: [
        { text: '综合排序', value: '' },
        { text: '时间排序', value: '0' },
        { text: '价格排序', value: '1' },
        { text: '距离排序', value: '2' },
        { text: '好评排序', value: '3' }
      ]
    }
  },
  watch: { /* 监听一个对象的写法 */
    val: {
      deep: true, /* 会监听对象里面的每一项 */
      immediate: true, /* 默认执行一次  */
      handler: function (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  components: {
    FifterBtn
  },
  methods: {
    select () {
      this.$refs.other.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.fifterBar{
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .timeBox{
        width: 100%;
        background-color: #fff;
        min-height: 50px;
        max-height: 500px;
        padding: 20px 0;
    }
}
</style>
