<template>
  <div class="myActicle">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .myActicle{
    width:1070px;
    height:100%;
    background:#E6E6F2;
    display: inline-block;
    box-sizing: border-box;
  }
</style>
