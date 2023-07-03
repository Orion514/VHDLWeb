<template>
  <div class="container">
    <h1 class="hint">Step 2.2: <br>Submit testBench of Atom System</h1>
<!--    <h2>Generate the corresponding VHDL simulation code according to the uploaded sub controller system specification</h2>-->
<!--    <h2>If your system does not have sub systems, ignore this step.</h2>-->

<!--    <div class="download" >-->
<!--      <el-button type="primary">Generate Code</el-button>-->
<!--      <el-button type="warning" >Download Code</el-button>-->
<!--    </div>-->

<!--    <p>The VHDL simlation code as follows</p>-->
<!--    <vhdl-editor></vhdl-editor>-->

    <!--  对原子系统进行切换  -->
    <div class="selector">
      <h4 style="display: inline-block;margin-right: 10px">Atom System</h4>
      <el-select v-model="atom" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="item in tbtestdict"
          :key="item.filename"
          :label="item.filename"
          :value="item.filename">
        </el-option>
      </el-select>
    </div>

    <div class="addFormBox">
      <!-- 循环data中定义的数组 -->
      <div v-for="(item,index) in formLabelAlign" :key="index">
        <div class="formOuterBox">
          <div class="formCotantBox">
            <h3>TestCase {{index+1}}</h3>
            <!-- 表单内容 -->
            <el-form label-width="80px">
              <h5>Input</h5>
              <el-form-item v-for="(inputItem,inputIndex) in item.input" :key="inputIndex" :label="inputItem.name">
                <el-input v-model="inputItem.value"></el-input>
              </el-form-item>

              <h5>Output</h5>
              <el-form-item v-for="(outputItem,outputIndex) in item.output" :key="outputIndex" :label="outputItem.name">
                <el-input v-model="outputItem.value"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <!-- 操作按钮 -->
          <div>
            <el-button @click="addForm" type="success">Add TestCase</el-button>
            <el-button v-if="formLabelAlign.length > 1" @click="removeIdx(item, index)" type="danger">Delete This TestCase</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="button-container">
      <el-button @click="submit" type="warning" size="large">Submit testcases of this atom</el-button>
    </div>

    <div class="button-container">
      <back-btn class="left-button" to="/generate/main">Back</back-btn>
      <next-step-btn class="right-button" to="/assemble">Next Step</next-step-btn>
    </div>
  </div>
</template>

<script>


import {atomtest} from "@/api/upload";

export default {
  data() {
    return {
      atom: null,

      tbtestdict: this.$store.state.app.tbtestdict,

      // 表单绑定数据
      formLabelAlign: [
        {
          input: [{
            name: "start",
            type: "STD_LOGIC",
            value: 0,
          },{
            name: "in_ADR_ADR_Triaxial attitude angle",
            type: "STD_LOGIC_VECTOR ( 31 downto 0 )",
            value: 31111,
          }],
          output: [{
            name: "out_ADR_ADR_Triaxial attitude angle",
            type: "STD_LOGIC_VECTOR ( 31 downto 0 )",
            value: 4444
          },{
            name: "end",
            type: "STD_LOGIC",
            value: 1,
          }]
        },
      ],
    };
  },
  watch:{
    atom(val){
      ElMessage.success('Change Atom System '+  val + ' Successfully!')
      this.formLabelAlign = this.$store.state.app.tbtestdict.filter(item => item.filename === val)
    }
  },


  methods: {
    //   添加操作
    addForm() {
      // 定义一个标识，通过标识判断是否能添加信息
      let statusType = true;
      this.formLabelAlign.forEach((item) => {
        if (
            // 判断input和output是否有空的
            item.input.some((item) => item.value === "") ||
            item.output.some((item) => item.value === "")
        ) {
          ElMessage.warning("请完善信息后再添加")
          statusType = false;
        }
      });
      if (statusType) {
        // 深拷贝
        let item0 = JSON.parse(JSON.stringify(this.formLabelAlign[0]));
        item0.input.forEach((item) => {
          item.value = "";
        });
        item0.output.forEach((item) => {
          item.value = "";
        });
        this.formLabelAlign.push(JSON.parse(JSON.stringify(item0)));

        // this.formLabelAlign.push(item0);
      }
    },
    // 删除操作
    removeIdx(item, index) {
      this.formLabelAlign.splice(index, 1);
      ElMessage.success("删除成功")
    },

    // 提交操作
    submit(){
      let statusType = true;
      this.formLabelAlign.forEach((item) => {
        if (
            // 判断input和output是否有空的
            item.input.some((item) => item.value === "") ||
            item.output.some((item) => item.value === "")
        ) {
          ElMessage.warning("请完善信息后再提交")
          statusType = false;
        }
      });
      if (statusType) {
        let data = {
          filename: this.atom,

          // 遍历formLabelAlign的input和output中的type若不是STD_LOGIC则value转化为数字
          testdata: this.formLabelAlign.map(item => {
            return {
              input: item.input.map(inputItem => {
                return {
                  name: inputItem.name,
                  type: inputItem.type,
                  value: inputItem.type === "STD_LOGIC" ? inputItem.value : parseInt(inputItem.value)  // 若不是STD_LOGIC则value转化为数字
                }
              }),
              output: item.output.map(outputItem => {
                return {
                  name: outputItem.name,
                  type: outputItem.type,
                  value: outputItem.type === "STD_LOGIC" ? outputItem.value : parseInt(outputItem.value)
                }
              })
            }
          })
        }

        atomtest(data)
        ElMessage.success("提交成功")
      }
    }
  },
};
</script>

<style scoped>

.addFormBox {
  margin: 20px;
}
.formOuterBox {
  margin-bottom: 20px;
  padding: 30px 40px;
  background: lightgrey;
  border-radius: 30px;
}
h3 {
  margin: 0px 0px 20px 0px;
}

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
