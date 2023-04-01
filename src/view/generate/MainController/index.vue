<template>
  <div class="container">
    <h1 class="hint">Step 2.1: <br>Generate Main Controller Code</h1>
    <h2>Generate the corresponding VHDL simulation code according to the uploaded main controller system specification</h2>

    <div class="download" >
      <el-button type="primary">Generate Code</el-button>
      <el-button type="warning" >Download Code</el-button>
    </div>

    <p>The VHDL simlation code as follows</p>
    <vhdl-editor></vhdl-editor>

    <div class="button-container">
      <back-btn class="left-button" to="/upload/atomic">Back</back-btn>
      <next-step-btn class="right-button" to="/generate/sub">Next Step</next-step-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenMainController"
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
