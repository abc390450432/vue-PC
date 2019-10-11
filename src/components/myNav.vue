<template>
  <div class="myNav">
      <router-link to="/Home/article01" tag="div" class="nav_01">aaaa</router-link>
      <router-link to="/Home/article02" tag="div" class="nav_02">bbbb</router-link>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'myNav',
  props: {
    msg: String
  },
  mounted(){
    console.log(this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .myNav{
    width:130px;
    height:100%;
    background:#999;
    display: inline-block;
    // box-sizing: border-box;
    font-size:14px;
    vertical-align: top;
    // margin-left:5%;
    .nav_01,.nav_02{
      // border:1px solid red;
      height:40px;
      line-height:40px;
      text-align: center;
      cursor: pointer;
      font-size:18px;
    }
  }
  .router-link-active{
    color:#BEBEBE;      // 选中后添加 css 属性
  }
</style>
