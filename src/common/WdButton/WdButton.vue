<template>
  <button class="btn">
    <slot>按钮</slot>
  </button>
</template>
<script>
export default {
  name: 'WdButton', // 注意这个name是必须的
  props:{
    
  }
}
</script>
<style scoped>
.btn {
  box-sizing: border-box;
  padding: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid #ffffff;
  border-radius: 5px;
  transition: all 0.4s;
}
.btn:hover,
.btn:active,
.btn:focus {
  background-color: #ff0000;
  border: 1px solid #ffffff;
  color: #FFF;
  outline: none;
}

</style>