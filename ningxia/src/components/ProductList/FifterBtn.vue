<template>
  <div class="fifter-btn">
      <a href="javascript:;" @click="show">{{text || title}}</a>
      <b></b>
        <div class="popup-wrap" v-show="isShow && $parent.activeIndex === index"  @click="isShow === false" @touchmove.prevent="">
            <div class="popup-content" @click.stop="">
                <slot></slot>
                <ul class="select-list">
                    <li
                    v-for="(item,index) in list"
                    :key="index"
                    :class="{active:item.text===value}"
                    @click="select(item)"
                    >{{item.text}}</li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import { positions } from '../../utils/index'
export default {
  name: 'fifter',
  props: {
    title: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    value: {
      default: ''
    }
  },
  data () {
    return {
      text: '',
      isShow: false
    }
  },
  watch: {
    // 'this.$parent.activeIndex'指的是需要监听属性的路径，不是指属性名
    '$parent.activeIndex': function (newValue) {
      console.log('aaa')
      if (newValue !== this.index) {
        this.isShow = false
      }
    }
  },
  methods: {
    show () {
      this.$parent.activeIndex = this.index
      var scrollTop = document.querySelector('html').scrollTop
      var offsetTop = positions(this.$el).top
      if (scrollTop <= offsetTop) {
        window.scrollTo(0, offsetTop)
      }
      this.isShow = !this.isShow
    },
    select (item) {
      this.$emit('input', item.value)
      this.isShow = false
      this.text = item.text
    }
  }
}
</script>

<style lang="scss">
.fifter-btn{
    display: block;
    flex: 1;
    position: relative;
    z-index:100;
    a{
        display: block;
        width: 100%;
        color: #333333;
        text-align:center;
        line-height:40px;
        text-decoration: none;
        padding: 0 10px;
        box-sizing: border-box;
    }
     b{
        width: 0;
        height: 0;
        border:5px solid transparent;
        border-top-color: black;
        border-bottom: none;
        border-left-color: transparent;
        border-right-color: transparent;
        position:absolute;
        bottom:15px;
        right:-15px;
        transform: rotate(315deg);
        }
    .popup-wrap{
        position: fixed;
        top:44px;
        right: 0;
        left: 0;
        bottom: 8px;
        width: 100%;
        background: rgba(0,0,0,0.2);
        .popup-content{
            width: 100%;
            min-height: 50px;
            max-height: 500px;
            .select-list{
                width: 100%;
                background-color: #fff;
                li{
                    background-color: #fff;
                    height: 40px;
                    border-bottom: 1px solid #eee;
                    text-align: left;
                }
                .active{
                    color: #f00;
                }
            }
        }
    }
}
</style>
