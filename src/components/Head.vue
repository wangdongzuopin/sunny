<template>
  <nav>
    <Nav :data="data"></Nav>
    <Banner :banner="banner"></Banner>
  </nav>
</template>

<script>
import Banner from '../components/Banner'
import Nav from '../components/Nav'


export default {
  components:{Banner,Nav},
  data() {
    return {
      data: [
        { path: "/", text: "首页" },
        { path: "/", text: "随笔" },
        { path: "/maper", text: "地图" },
      ],
      banner: [
        { src: require("../assets/image/banner1.jpg") },
        { src: require("../assets/image/banner2.jpg") },
      ],
    };
  },
};
</script>

<style>
</style>