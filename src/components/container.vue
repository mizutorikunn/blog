<template>
  <div id="container">
    <el-container>
      <el-aside>
        <ul>
          <li v-for="(item,index) in list" :key="item">
            <span v-text="item" @click="showContent(index)"></span>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <div v-html="content"></div>
        <el-button type="primary" @click="getMessage()" v-if="displayButton">参与评论</el-button>
        <div v-for="(item,index) in message" :key="item" v-if="displayMessage" class="messages">
          <p>评论{{index+1}}</p>
          <p>来自 {{userInfo[index]}} 的用户</p>
          <p v-html="item"></p>
          <p v-text="date[index]"></p>
        </div>
        <rich-text_message v-if="displayMessage"></rich-text_message>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import richText from "./message";
import axios from "axios";

export default {
  data() {
    return {
      content: "",
      message: "",
      date: "",
      title: "",
      displayMessage: false,
      displayButton: false,
      userInfo: ""
    };
  },
  props: ["list", "article"],
  methods: {
    showContent(index) {
      this.displayMessage = false;
      this.title = this.$parent.list[index];
      //在展示文章时把文章标题添加在开头，把文章发布时间添加在右下角
      this.content =
        `<h1 id="${this.title}">${this.title}</h1>` +
        this.$parent.article[index] +
        `<p style="text-align:right">${this.$parent.date[index]}</p>` +
        `<hr>`;
      this.displayButton = true;
    },
    //获取留言
    getMessage() {
      console.log("获取留言");
      axios
        .post("/message/get/", { title: this.title })
        // .post("http://localhost:5000/message/get/", { title: this.title })
        .then(response => {
          if (response.data.status == "OK") {
            console.log(`服务器返回给前端的留言数据：${response.date}`);
            this.$notify({
              title: "成功",
              message: "留言获取成功",
              type: "success"
            });
            this.message = response.data.message;
            this.date = response.data.date;
            this.userInfo = response.data.userInfo;
          }
        })
        .catch(error => {
          console.log(error);
          this.$notify.error({
            title: "错误",
            message: "留言获取失败"
          });
        });
      this.displayMessage = true;
      console.log(`message=${this.message}| date=${this.date}`);
    }
  },
  components: {
    richText_message: richText
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container {
  .messages {
    border: thin solid lightcoral;
    margin: 1em;
    padding: 1em;
    border-radius: 1em;
  }
}
</style>