<template>
  <div class="home">
      <myHeader></myHeader>
      <myContent></myContent>
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from '@/components/myHeader.vue'
import myContent from '@/components/myContent.vue'

export default {
  name: 'home',
  components: {
    myHeader,
    myContent
  }
}
</script>
<style scoped lang="less">
  .home{
    height:100%;
  }
</style>
