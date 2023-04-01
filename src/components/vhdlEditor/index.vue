<template>
  <div>
    <codemirror :v-model="vhdlCode" :options="editorOptions" >
    </codemirror>
  </div>
</template>

<script>
import {Codemirror} from "vue-codemirror";

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/mode/vhdl/vhdl'
// import 'codemirror/theme/eclipse.css'
// import 'vue-codemirror/dist/vue-codemirror.css'

export default {
  name: "vhdlEditor",
  components: {Codemirror},
  data(){
    return{
      vhdlCode:"",
      editorOptions: {
        mode: 'vhdl',
        lineNumber: true,
        theme: 'eclipse',
      }
    }
  }
}
</script>

<style scoped>

</style>
