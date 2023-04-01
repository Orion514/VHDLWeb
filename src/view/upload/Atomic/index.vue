<template>
  <div class="container">
    <h1 class="hint">Step 1.3: <br>Please Upload the Atomic System VHDL Code.</h1>
    <upload-file class="upload-file"></upload-file>
    <div class="button-container">
      <back-btn class="left-button" to="/upload/sub">Back</back-btn>
      <next-step-btn class="right-button" to="/generate/main">Next Step</next-step-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Atomic"
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
