<template>
  <div class="container">
    <h1 class="hint">1. Introduction</h1>
      <p>This website is a simulation verification system for complex embedded software models based on VHDL language. According to the software requirements document, the simulation code based on VHDL language is generated, so that you can easily perform simulation verification on software requirements.</p>

    <h2>The following are some terms related to this software:</h2>
    <p><b>VHDL language</b>: VHDL language is a high-level language for circuit design, mainly used to describe the structure, behavior, function and interface of digital systems.</p>
    <p><b>Vivado Platform</b>: Vivado Design Suite. The design platform of VHDL language.</p>
    <p><b>Atomic system</b>: an indivisible component that performs a specific function.</p>
    <p><b>Subsystem controller</b>: assemble the atomic system to form a higher layer of subsystem functional components.</p>
    <p><b>Main system controller</b>: assemble the functional components of each subsystem to form the whole system.</p>

    <h1 class="hint">2. Function</h1>

    <h2>2.1 Web Main Page </h2>
    <img :src="require('@/assets/mainPage.png')" >


  </div>
</template>

<script>
export default {
  name: "Help"
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
  /*text-indent:1em;*/
}

p{
  margin:20px 0 20px 0;
  font-size : 20px;
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
