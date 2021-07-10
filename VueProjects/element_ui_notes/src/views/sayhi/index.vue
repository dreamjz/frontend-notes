<template>
  <div>Message : {{ message }}</div>
</template>

<script>
import { sayHi } from "@/api/sayHi"; // 导入API

export default {
  data() {
    return {
      message: "SayHi",
    };
  },
  created() {
    this.getMessage();
  },
  methods: {
    getMessage() {
      sayHi()
        .then((result) => {
          console.log("'/sayhi' response from server: ", result);
          this.message = result.data.message;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>