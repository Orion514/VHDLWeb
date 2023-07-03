<template>
  <div class="container">
    <h1 class="hint">Step 2.1: <br>Generate Main Controller Code</h1>
    <h2>Generate the corresponding VHDL simulation code according to the uploaded main controller system specification</h2>

    <div class="download" >
      <el-button type="primary">Generate Code</el-button>
      <el-button type="warning" >Download Code</el-button>
    </div>

    <p>The VHDL simlation code as follows</p>

    <!-- <vhdl-editor >1111</vhdl-editor> -->
    <el-select v-model="code" placeholder="请选择">
      <el-option
          v-for="item in files"
          :key="item.filename"
          :label="item.filename"
          :value="item.txt">
      </el-option>
    </el-select>
    <Codemirror
        ref="cm"
        :options="cmOptions"
        :value = "code"
        @input="inputChange"
    >
    </Codemirror>
    <el-button style="" @click="completeComputer">更新</el-button>
    <div class="button-container">
      <back-btn class="left-button" to="/upload/atomic">Back</back-btn>
      <next-step-btn class="right-button" to="/generate/sub">Next Step</next-step-btn>
    </div>
  </div>
</template>

<script>
import {uploadSpecification, complete_computer} from "@/api/upload.js"
import { ref, onMounted, onUnmounted } from "vue"
import "codemirror/mode/vhdl/vhdl.js"
import Codemirror from "codemirror-editor-vue3"
import store from '@/store'
export default {
  name: "GenMainController",
  components: {Codemirror},
  data() {
    return {
      code:'',
      nowFile:{
        filename: undefined,
        txt: undefined
      },
      files:[],
      cmOptions: {
        mode: 'text/x-vhdl',
        line: true,
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 4,
      }
    }
  },
  created(){
    this.files = this.$store.state.app.computervhdl;
    console.log(this.files)
  },
  methods: {
    inputChange(content) {
      this.code = content;
      this.$nextTick(() => {
        console.log("code:" + this.code);
        console.log("content:" + content)
      });
    },
    completeComputer(){
      this.nowFile.txt = this.code;
      var _that = this;
      this.files.forEach(function(element,index,array){
        if(element.txt == _that.code){
          _that.nowFile.filename = element.filename;
        }
      })
      console.log("补全：")
      console.log(this.nowFile)
      complete_computer(this.nowFile).then(response => {
        var mes = response.data.message;
        ElMessage.success(mes)
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
