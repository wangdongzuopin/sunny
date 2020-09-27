<template>
    <div class="nav">
      <!-- Logo -->
      <div></div>
      <!-- list -->
      <div class="nav_list">
        <ul>
          <li v-for="(arr, index) in data" :key="index">{{ arr.text }}</li>
        </ul>
      </div>
      <div class="nav_list piece_love">-- 来自热爱海贼的小前端</div>
    </div>
</template>

<script>
export default {
    props:{
        data:Array
    }
}
</script>

<style>

</style>