<template>
  <el-upload
      ref="uploadRef"
      class="upload-demo center"
      drag
      multiple
      :auto-upload="false"
      accept=".vhdl"
      action="api/complete_C"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        vhdl files only
      </div>
    </template>

  </el-upload>

  <el-button class="ml-3 center" type="success" @click="submitUpload">
    upload to server
  </el-button>
</template>


<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
const uploadRef = ref()

const submitUpload = () => {
  ElMessage.info("开始上传")
  uploadRef.value.submit()
  ElMessage.success("上传成功")
}


</script>

<style scoped>
.center{
  margin: 0 auto;
}
</style>
