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
  props:{
    code : String
  },
  data() {
      return{
        code: 'library IEEE;\n' +
            'use IEEE.STD_LOGIC_1164.ALL;\n' +
            'use IEEE.std_logic_unsigned.ALL;\n' +
            'entity clk_self is\n' +
            '    generic(numb:integer:=50000);\n' +
            '    port(\n' +
            '    clkin: in std_logic;\n' +
            '    clk_self:out std_logic\n' +
            '    );\n' +
            'end clk_self;\n' +
            'architecture Behavioral of clk_self is\n' +
            'signal count:integer := 0;\n' +
            'signal clk:std_logic:=\'0\';\n' +
            'signal doing: integer:=0;\n' +
            'begin\n' +
            '    process(clkin)\n' +
            '    begin\n' +
            '        if clkin\'event and clkin=\'1\' then\n' +
            '            if(count=numb-1) then\n' +
            '                count<=0;\n' +
            '                clk<=not clk;\n' +
            '            else\n' +
            '                count<=count+1;\n' +
            '            end if;\n' +
            '         end if;\n' +
            '    end process;\n' +
            '    clk_self<=clk;\n' +
            'end Behavioral;\n',
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
