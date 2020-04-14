<template>
  <div class="pins-container">
    <a class="tag" target="_blank" href="http://www.17sucai.com/">item1</a>
    <a class="tag" target="_blank" href="http://www.17sucai.com/">item2</a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.tagBall{width:800px;height:800px;margin:50px auto;position:relative;}
.tag{display:block;position:absolute;left:0px;top:0px;color:#000;text-decoration:none;font-size:15px;font-family:"微软雅黑";font-weight:bold;}
.tag:hover{border:1px solid #666;}
</style>
