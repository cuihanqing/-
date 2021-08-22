<template>
  <div>
    <detail-info/>
    <div class="other">
        <card title="门票" href="/">
          <ticket :list="products"/>
        </card>
        <card title="点评" href="/">
          <evaluate :list="options" />
        </card>
    </div>
  </div>
</template>

<script>
import ticket from './components/ticket.vue'
import DetailInfo from './components/detailInfo.vue'
import Card from '../../components/card'
import Evaluate from './components/evaluate.vue'
export default {
  name: 'detail-infor',
  components: {
    DetailInfo,
    Card,
    ticket,
    Evaluate
  },
  data () {
    return {
      products: [
        {
          id: 1,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.tciDnJiXinZw693uOkcgrgHaEK?w=292&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
          labes: ['', '', ''],
          price: 88
        },
        {
          id: 2,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.tciDnJiXinZw693uOkcgrgHaEK?w=292&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城成人票',
          labes: ['', '', ''],
          price: 88
        },
        {
          id: 3,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.tciDnJiXinZw693uOkcgrgHaEK?w=292&h=180&c=7&o=5&pid=1.7',
          title: '黄沙古渡',
          labes: ['', '', ''],
          price: 88
        },
        {
          id: 4,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.tciDnJiXinZw693uOkcgrgHaEK?w=292&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
          labes: ['', '', ''],
          price: 88
        },
        {
          id: 5,
          img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.BO0OYrmHIcDtVd13YR5A4gHaEs?w=276&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
          labes: ['', '', ''],
          price: 88
        },
        {
          id: 6,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cBD_yflLj4r4YOsD8QIKgAHaEo?w=286&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
          labes: ['', '', ''],
          price: 88
        },
        {
          id: 7,
          img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.BO0OYrmHIcDtVd13YR5A4gHaEs?w=276&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
          labes: ['', '', ''],
          price: 299
        }
      ],
      options: [
        {
          title: '全部'
        },
        {
          title: '有图（86）'
        },
        {
          title: '好评（349）'
        },
        {
          title: '差评（97）'
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
