<template>
  <div class="container">
    <h1 class="hint">Step 1.2: <br>Please Upload the Predefined Device Models Of Your System.</h1>
    <h2 >If your system does not have device models, ignore this step.</h2>
<!--    <p>The Sub Controller Specification Demo is as follows</p>-->
<!--    <vhdl-editor></vhdl-editor>-->
    <uploadPDM class="upload-file"></uploadPDM>
    <div class="button-container">
      <back-btn class="left-button" to="/upload/main">Back</back-btn>
      <next-step-btn class="right-button" to="/generate/main">Next Step</next-step-btn>
    </div>
  </div>
</template>

<script>
import uploadPDM from "./uploadFile/index.vue";
export default {
  name: "SubController",
  components: {uploadPDM},
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

.upload-file{
  margin-top:40px;
}

.button-container{
  margin-top:40px;
  display: flex;
  justify-content: center;
}

.left-button{
  margin-right: 10px;
}

.right-button{
  margin-left: 10px;
}
</style>
