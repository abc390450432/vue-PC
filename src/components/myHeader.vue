<template>
  <div class="header">
    this is myHeader
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
  .header{
    // width:100%;
    height:50px;
    background:skyblue;
  }
</style>
