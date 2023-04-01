<template>
  <el-button @click="handleClick" type="info" round>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "backBtn",
  props:{
    to:{
      type:String,
      required: true
    }
  },
  methods:{
    handleClick(){
      console.log(this.to)
      this.$router.push(this.to)
    }
  }
}
</script>

<style scoped>

</style>
