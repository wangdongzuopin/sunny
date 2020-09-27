<template>
  <div class="banner">
        
    <ul>
      <li
        v-for="(ban, i) in banner"
        :key="i"
        :class="{ 'selected': nums.num === i}"
        v-show="nums.num === i"
      >
        <img :src="ban.src" alt="" />
      </li>
    </ul>
    <div class="ban_btn">
      <span
        v-for="(ban, index) in banner"
        @click="banClick(index)"
        :key="index"
        :class="{ banner_show: nums.num === index }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: Array,
  },
  data() {
    return {
      // banner
      nums: {
        num: 0,
        timer: null,
      },
    };
  },
  methods: {
    banClick(index) {
      this.nums.num = index;
      clearInterval(this.nums.timer);
    },
    play() {
      this.nums.timer = setInterval(() => {
        this.auto();
      }, 2000);
    },
    auto() {
      this.nums.num == this.banner.length - 1? this.nums.num = 0: this.nums.num++;
    },
  },
  mounted() {
    this.play();
  },
  destroyed() {
    clearInterval(this.nums.num);
  },
};
</script>
<style scoped>
  
/* banner */
.banner{
    width: 100%;
    /* height: 700px;
    overflow: hidden; */
    position: relative;

}
.banner img{
    height: 700px;
}
.banner img , .banner ul li{
    width: 100%;
    margin: 0;
}
.banner ul li{
    transition: all;
}
.ban_btn{
    position: absolute;
    bottom: 0%;
    margin: 0 auto;
    margin-bottom: 30px;
    width: 50%;
    text-align: center;
    left: 0;
    right: 0;
    height: 20px;
    display: flex;
    justify-content: center;
}
.ban_btn span{
    margin: 0 5px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    /* background-color: #FFF; */
    border: 1px solid #FFF;
}
.banner_show{
    background-color: #FFF;
}
/* bannerend */

</style>