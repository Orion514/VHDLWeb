<template>
  <div class="common-layout">
  <el-container class="container">
    <el-header><Headers/></el-header>
    <el-container>
      <el-main style="height: 100%"><router-view/></el-main>
      <el-aside style="height: 100%" width="400px"><process/></el-aside>
    </el-container>
  </el-container>
  </div>
</template>

<script setup>
import Headers from './headers'
import Process from "@/components/process.vue";
</script>

<style scoped>

.container{
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
}
::v-deep .el-main{
  padding: 0;
}

.common-layout{
  padding: 0;
  margin: 0;
  border: 0;
}

::v-deep .el-header {
  padding: 0;
}

</style>
