<template>
    <div class='score'>
        <div class='list'>
        <a
            href='javascript:;'
            v-for='(item, index) in arr'
            @mouseover='change(index)'
            :key='index'
            :class='{active: index - 1 <= activeIndex - 1 }'
        >
            {{ item }}
        </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'score',
  data () {
    return {
      arr: ['♥', '♥', '♥', '♥', '♥'],
      activeIndex: 0,
      clickIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang='scss'>
.score {
  width: 120px;
  // height: 200px;
  // background-color: #000;
  overflow: hidden;
  margin: auto;
  .list {
    width: 100px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 20px;
    box-sizing: border-box;
    a {
      display: block;
      width: 20%;
      color: gray;
      font-size: 30px;
      margin: 0 3px;
    }
    .active {
      color: gold;
    }
  }
}
</style>
