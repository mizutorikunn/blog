<template>
  <div id="message">
    <quill-editor v-model="content"></quill-editor>
    <button @click="submit()">提交</button>
  </div>
</template>

<script>
/**导入富文本插件 */
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

import axios from "axios";

export default {
  data() {
    return {
      content: "",
      title: ""
    };
  },
  methods: {
    submit() {
      let json = {
        title: this.title,
        message: this.content,
        userInfo: returnCitySN["cip"] + "," + returnCitySN["cname"]
      };
      console.log(`将要从前端发送给服务器的留言数据:${json}`);
      axios
        .post("/message/insert", json)
        // .post("http://localhost:5000/message/insert", json)
        .then(response => {
          if (response.data == "OK") {
            this.$notify({
              title: "成功",
              message: "留言发布成功",
              type: "success"
            });
            this.content = "";
          } else {
            this.$notify.error({
              title: "错误",
              message: response.data
            });
          }
        })
        .catch(error => {
          console.log(error);
          this.$notify.error({
            title: "错误",
            message: "留言发布失败"
          });
        });
    }
  },
  components: {
    quillEditor
  },
  mounted() {
    this.title = document.getElementsByTagName("h1")[0].id;
  }
};
</script>

<style lang="scss">
</style>