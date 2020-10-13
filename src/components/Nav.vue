<template>
    <div class="nav">
      <!-- Logo -->
      <div class="nav-logo"></div>
      <!-- list -->
      <div class="nav_list">
        <ul>
          <li v-for="(arr, index) in data" :key="index"><router-link :to="arr.path">{{ arr.text }}</router-link></li>
        </ul>
      </div>
      <div class="nav_list piece_love">-- 来自热爱海贼的小前端</div>
    </div>
</template>

<script>
export default {
    props:{
        data:Array
    },
    mounted(){
      console.log(this.data);
      console.log(this.$route);
    }
}
</script>

<style>

</style>