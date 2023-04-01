<template>
  <div class="box">
    <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        accept=".txt,.tcl"
        :auto-upload="false"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          Only .txt .tcl files need
        </div>
      </template>
    </el-upload>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped>

.box{
  width: 300px;
  margin: 0 auto;
}

</style>
