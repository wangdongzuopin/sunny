<template>
  <div>
    <Head></Head>
    <div class="main">
      <Speak></Speak>
    </div>
    <div>
      <Foot></Foot>
    </div>
   
  </div>
</template>

<script>
import Head from "../components/Head";
import Foot from "../components/Foot";
import Speak from "../components/Speak";

export default {
  components: {
    Head,Foot,Speak
  },
  data() {
    return {
      Options:{}
    };
  },
  methods:{
  },
  mounted() {
  },
};
</script>

<style>
</style>