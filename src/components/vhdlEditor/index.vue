<template>
  <div>
    <Codemirror
      ref="cm"
      :options="cmOptions"
      :value = "code" 
      @input="inputChange"
    >
    </Codemirror>
  </div>
</template>

<script>
  import { ref, onMounted, onUnmounted } from "vue"
  import "codemirror/mode/vhdl/vhdl.js"
  import "codemirror/mode/javascript/javascript.js"
  import 'codemirror/theme/material.css';
  import Codemirror from "codemirror-editor-vue3"

export default {
  name: "vhdlEditor",
  components: {Codemirror},
  data() {
      return{
        code: 'LIBRARY ieee;',
        cmOptions: {
          // 语言及语法模式
          mode: 'text/x-vhdl',
          // 主题
          
          // 显示函数
          line: true,
          lineNumbers: true,
          // 软换行
          lineWrapping: true,
          // tab宽度
          tabSize: 4,
        }
      }
    },
    methods: {
      inputChange(content) {
        this.code = content;
        this.$nextTick(() => {
          console.log("code:" + this.code);
          console.log("content:" + content)
        });
      },
    }
}
</script>

<style scoped>

</style>
