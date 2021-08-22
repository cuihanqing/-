<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style  lang="scss" scoped>
*{
  margin:0;
  padding: 0;
  list-style: none;
}
body{
  width: 100%;
  overflow: hidden;
}
html{
  width: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
