<template>
  <div>
    <Head></Head>
    <div class="map">
      <div class="map-map">
        <div
          class="map-point"
          v-for="point in points"
          :key="point"
          :style="getpoint(point)"
        ></div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from "../components/Head";
import Foot from "../components/Foot";
export default {
  components: { Head, Foot },
  data() {
    return {
      points: [],
    };
  },
  methods: {
      getpoint(point){
          var fs;
          point % 2 === 0?(fs = {left:point+'px',top:point + 'px'}):(fs = {right:point+'px',bottom:point + 'px'})
          return fs
      }
  },
  mounted() {
    for (let index = 0; index < 100; index++) {
      this.points.push(index);
    }
    console.log(this.points);
  },
};
</script>

<style>
</style>