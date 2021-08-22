<template>
  <div>
      <header>
          <fifter-bar v-model="filterValue" />
      </header>
      <div class="list">
          <list-item
          v-for="item in products"
          :key="item.id"
          :data='item'
          ></list-item>
      </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import FifterBar from './fifterBar.vue'
export default {
  name: 'product-list',
  components: {
    ListItem,
    FifterBar
  },
  data () {
    return {
      filterValue: {
        city: '',
        order: '',
        time: ''
      },
      products: [
        {
          id: 1,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.tciDnJiXinZw693uOkcgrgHaEK?w=292&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
          labes: ['', '', ''],
          price: 88,
        },
        {
          id: 2,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.tciDnJiXinZw693uOkcgrgHaEK?w=292&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
          labes: ['', '', ''],
          price: 88
        },
        {
          id: 3,
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.tciDnJiXinZw693uOkcgrgHaEK?w=292&h=180&c=7&o=5&pid=1.7',
          title: '镇北堡西部影城',
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
      ]
    }
  }
}
</script>

<style>
.list{
    width: 100%;
}
</style>
