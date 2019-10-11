<template>
  <div class="article">
     article01
  </div>
</template>

<script>

export default {
  name: 'article01',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .article{
    font-size: 18px;
    vertical-align: top;
  }
</style>
