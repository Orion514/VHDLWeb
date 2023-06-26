<template>
  <wavedrom
      waveId="1"
      :parentText="waveform"
      errorMessage="Sorry, no sample waveform available"
  ></wavedrom>
  <div id="svgcontent_1"></div>
</template>

<script>
import wavedrom from "@/components/wavedrom/index.vue";

export default {
  name: "assemble",
  components: {wavedrom},
  data() {
    return {
      waveform: "{ signal : [\n" +
          "  { name: \"clk\",  wave: \"p......\" },\n" +
          "  { name: \"bus\",  wave: \"x.34.5x\",   data: \"head body tail\" },\n" +
          "  { name: \"wire\", wave: \"0.1..0.\" },\n" +
          "]}",
    };
  }

}
</script>

<style scoped>
.dd{
  width: 400px;
  height: 400px;
  margin-top: 100px;
  margin-left: 40px;
}
</style>
