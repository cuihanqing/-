<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
      v-for="(item,index) in images" :key="index">
        <img :src="item" alt="">
      </swiper-slide>
    </swiper>
    <div class="text">
       <div class="swiper-pagination" slot="pagination"></div>
        <h2>{{title}}</h2>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    title: {
      type: String,
      defaule: ''
    }
  },
  data () {
    return {
      images: [
        'https://b1-q.mafengwo.net/s15/M00/AA/35/CoUBGWEZ0bWAcj-lADJcryzPvMA600.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg',
        'https://t1-q.mafengwo.net/s17/M00/D3/71/CoUBXmEaUt6AL-00ACgnCYDRewg794.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg',
        'https://b1-q.mafengwo.net/s16/M00/7C/21/CoUBUmEXt7CAVA4iACTZmvB2GiA431.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg',
        'https://b1-q.mafengwo.net/s17/M00/EC/10/CoUBXmEbwA-AUxDbACPFTEp0Y4g779.png?imageView2%2F2%2Fw%2F1920%2Fq%2F90%2Fformat%2Fjpeg'
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction' /* 使轮播图的分页器变成数字  */
          // clickable: true // 允许分页点击跳转
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
  }
}
</script>

<style lang="scss">
  .recommendPage{
    position: relative;
  }
  .recommendPage .swiper-container{
    position: relative;
    width: 100%;
    height: 200px;
  }
  .recommendPage .swiper-container .swiper-slide{
    width: 100%;
    line-height: 200px;
    img{
      display: block;
      width: 100%;
      height: 200px;
    }
  }
  .text{
    width:100%;
    position: absolute;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    bottom: 0px;
    z-index: 20;
    opacity: 0.6;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #000000 100%);
    h2{
      margin-left: 20px;
    }
    .swiper-pagination{
      width:30%;
      position: absolute;
      left:300px;
    }
  }
</style>
