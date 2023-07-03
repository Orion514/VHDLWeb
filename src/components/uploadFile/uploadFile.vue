<template>
  <div class="box">
    <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        accept=".txt"
        :auto-upload="true"
        :http-request="uploadFile"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          Only .txt files need
        </div>
      </template>
    </el-upload>
  </div>

</template>

<script>


import {uploadSpecification} from "@/api/upload.js"
import {UploadFilled} from "@element-plus/icons-vue";

export default {
  components:{
    UploadFilled
  },
  methods:{
    uploadFile(file){
      ElMessage.info("开始上传")
      const formData = new FormData();

      formData.append('file',file.file);

      uploadSpecification(formData).then(res=>{
        const store = this.$store;
        store.commit('app/setComputervhdl',res.data.computervhdl);
        store.commit('app/setTbtestdict',res.data.tbtestdict);
        ElMessage.success('上传成功')
        const s = store.state.app.computervhdl;
        const b = store.state.app.tbtestdict;
        console.log(s)
        console.log(b)
      }).catch(error =>{
        console.log(error)
        ElMessage.error('上传失败')
      })
    }
  }
}

</script>

<style scoped>

.box{
  width: 300px;
  margin: 0 auto;
}

</style>
