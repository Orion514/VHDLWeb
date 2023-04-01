<template>
  <div>
    <el-row>
      <el-col :span="18">
        <div id="main">
          <div class="step-item">
            <H2>Step 1: Upload Specification</H2>
            <H3>&nbsp;1.1: Upload Main Controller</H3>
            <div class="uploadFile">
              <uploadFile/>
            </div>

          </div>

          <div class="step-item">
            <H3>&nbsp;1.2: Upload Sub Controller</H3>
            <div class="uploadFile">
              <uploadFile/>
            </div>
          </div>


          <div class="step-item">
            <H3>&nbsp;1.3: Upload Atomic System</H3>
            <div class="uploadFile">
              <uploadFile/>
            </div>
          </div>


          <div class="step-item">
            <H2>Step 2: Generate Code</H2>
            <H3>&nbsp;2.1: Generate Main Controller Code</H3>
            <el-button size='large' type="primary">Generate Main Controller Code</el-button>
          </div>

          <div class="step-item">
            <H3>&nbsp;2.2: Generate Sub Controller Code</H3>
            <el-button  size='large' type="primary" on-click="generate_Code()">Generate Sub Controller Code</el-button>
          </div>

          <div class="step-item">
            <H3>&nbsp;2.3: Generate Atomic Controller Code</H3>
            <el-button  size='large' type="primary" >Generate Atomaic System Code</el-button>
          </div>


          <div class="step-item">
            <H2>Step 3: Assemble Total System</H2>
            <H3>&nbsp;3.1: Assemble Total System</H3>
            <el-button  size='large' type="primary">Assemble Total System</el-button>
          </div>

        </div>
      </el-col>

      <el-col :span="6">
        <div id="rightbar">
          <process/>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Process from "@/components/process.vue";


</script>

<style scoped>
.uploadFile{
  width: 300px;
  height: 100px;
}

.step-item{
  width: 600px;
  height: 400px;
}
</style>
