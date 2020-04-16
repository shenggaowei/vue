<template>
  <div class="tagBall">
    <a v-for="(item, index) in pinsData" :key="index" :href="item.url" class="tag">
      {{item.text}}
    </a>
  </div>
</template>

<script>
import Pin from './pin';
import datas from './mock';
export default {
  name: 'Pins',
  data(){
    return {
      pinsData: []
    }
  },
  created(){
    this.pinsData = datas
  },
  mounted(){
    const instance = new Pin();
    instance.init();
  }
}
</script>

<style>
.tagBall{width:800px;height:800px;margin:50px auto;position:relative;}
.tag{display:block;position:absolute;left:0px;top:0px;color:#000;text-decoration:none;font-size:15px;font-family:"微软雅黑";font-weight:bold;}
.tag:hover{border:1px solid #666;}
</style>
