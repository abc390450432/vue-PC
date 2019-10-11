<template>
  <div class="content">
        <myNav></myNav>      
        <myArticle></myArticle>
  </div>
</template>

<script>
import myNav from '@/components/myNav.vue'
import myArticle from '@/components/myArticle.vue'

export default {
  name: 'myContent',
  props: {
    msg: String
  },
  components:{
    myNav,
    myArticle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    height:calc(100% - 50px);
    background:#FFF;
    box-sizing: border-box;
    font-size:0; 
    text-align: center;
  }
  .aa{
    font-size:14px;
  }
</style>
