<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#1874cd"
      text-color="#ffffff"
      on-select="handleSelect"
      router
  >
    <el-menu-item index="0">
      <el-image :src="require('@/assets/logo.png')" style="width: 90px; height: 62px" ></el-image>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>Upload Specification</template>
      <el-menu-item index="/upload/main">Upload Main Controller Specification</el-menu-item>
      <el-menu-item index="/upload/sub">Upload Sub Controller Specification</el-menu-item>
      <el-menu-item index="/upload/atomic">Upload Atomic System Code </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>Generate Code</template>
      <el-menu-item index="/generate/main">Generate Main Controller</el-menu-item>
      <el-menu-item index="/generate/sub">Generate Sub Controller</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/assemble" style="border: 0px">Assemble Total System</el-menu-item>
    <el-menu-item index="4" style="border: 0px">Download</el-menu-item>
    <el-menu-item index="/help" >Help</el-menu-item>
    <!--    <el-menu-item index="6" style="border: 0px">Login</el-menu-item>-->
  </el-menu>

</template>

<script >

export default {
  data() {
    return{
      activeIndex : "/"
    }
  },
  methods: {
    handleSelect(index){
      this.activeIndex = index
      this.$router.push(index)
    }
  }
}

</script>

<style scoped>
.el-menu-demo{
  margin:0;
  padding: 0;
  border: 0;
}

</style>
