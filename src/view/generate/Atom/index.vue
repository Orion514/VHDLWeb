<template>
  <div class="container">
    <h1 class="hint">Step 2.2: <br>Generate Atomic System Code</h1>
    <h2>Click button to generate the atomic system code</h2>

<!--    <div class="download" >-->
<!--      <el-button type="primary">Generate Code</el-button>-->
<!--      <el-button type="warning" >Download Code</el-button>-->
<!--    </div>-->

    <div class="button-container">
      <el-button type="warning" size="large" @click="generate">Generate Code</el-button>
    </div>

    <div class="button-container">
      <back-btn class="left-button" to="/generate/main">Back</back-btn>
      <next-step-btn class="right-button" to="/generate/sub">Next Step</next-step-btn>
    </div>
  </div>
</template>

<script>
import {generateatom} from "@/api/atom";

export default {
  name: "GenMainController",
  methods:{
    generate(){
      generateatom().then(res => {

      })
    }
  }
}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}

.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}

.button-container{
  margin-top:40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.left-button{
  margin-right: 10px;
}

.right-button{
  margin-left: 10px;
}

.download{
  margin: 10px 0 10px 0;
}
</style>
