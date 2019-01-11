<template>
  <div id="publish">
    <!--文章发布功能 -->
    <quill-editor v-model="content"></quill-editor>
    <div id="articleControl">
      <template>
        <el-select v-model="PubValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="PubInput" placeholder="请输入要发布的文章标题"></el-input>
        <el-button type="primary" icon="el-icon-upload" @click="publish()">发布</el-button>
      </template>
      <!--删除文章功能-->
      <br>
      <template>
        <el-select v-model="DelValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="DelInput" placeholder="请输入要删除的文章标题"></el-input>
        <el-button type="primary" icon="el-icon-delete" @click="deleteArticle()">删除</el-button>
      </template>
      <!--检索文章功能-->
      <br>
      <template>
        <el-select v-model="FindValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="FindInput" placeholder="请输入要检索的文章标题"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="search()">检索</el-button>
      </template>
      <!--更新文章功能-->
      <br>
      <template>
        <el-select v-model="UpValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="UpInput" placeholder="请输入要更新的文章标题"></el-input>
        <el-button type="primary" icon="el-icon-upload" @click="updateArticle()">更新</el-button>
      </template>
    </div>
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
      options: [
        {
          value: "daily",
          label: "日常"
        },
        {
          value: "technology",
          label: "技术"
        },
        {
          value: "tour",
          label: "游记"
        },
        {
          value: "notice",
          label: "公告"
        }
      ],
      /**
         *content：要发布的内容
          PubValue:发布的栏目
          PubInput:发布的标题
          其余同理 Del代表删除，Find代表检索，Up代表更新
         */
      content: "",
      PubValue: "",
      PubInput: "",
      DelValue: "",
      DelInput: "",
      FindValue: "",
      FindInput: "",
      UpValue: "",
      UpInput: ""
    };
  },
  components: {
    quillEditor
  },
  methods: {
    /**
     * 发布文章
     */
    publish() {
      /**
       * column:代表对应数据库的集合名
       */
      let json = {
        collection: this.PubValue,
        title: this.PubInput,
        content: this.content
      };
      axios
        .post("/blog/insert", json)
        // .post("http://localhost:5000/blog/insert", json)
        .then(response => {
          if (response.data == "OK") {
            this.$notify({
              title: "成功",
              message: "文章发布成功",
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
            message: "发布失败，请查看日志"
          });
        });
    },
    /**
     * 删除文章
     */
    deleteArticle() {
      let json = {
        collection: this.DelValue,
        title: this.DelInput
      };
      axios
        .post("/blog/delete", json)
        // .post("http://localhost:5000/blog/delete", json)
        .then(response => {
          if (response.data == "OK") {
            this.$notify({
              title: "成功",
              message: "文章删除成功",
              type: "success"
            });
          } else {
            this.$notify.error({
              title: "错误",
              message: response.data
            });
          }
        })
        .catch(error => {
          console.log(error);
          /**
           * 即使要文章不存在，结果也是和删除了一样，故不当做错误
           */
          // this.$notify.error({
          //     title: "错误",
          //     message: '删除失败，文章不存在，请查看日志'
          //   });
        });
    },
    /**
     *查找文章
     */
    search() {
      let json = {
        collection: this.FindValue,
        title: this.FindInput
      };
      axios
        .post("/blog/search", json)
        // .post("http://localhost:5000/blog/search", json)
        .then(response => {
          if (response.data.status == "OK") {
            this.content = response.data.content;
            this.$notify({
              title: "成功",
              message: "已找到相关文章",
              type: "success"
            });
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
            message: "检索失败，文章不存在，具体请查看日志"
          });
        });
    },
    /**
     * 更新文章
     */
    updateArticle() {
      let json = {
        collection: this.UpValue,
        title: this.UpInput,
        content: this.content
      };
      axios
        .post("/blog/update", json)
        // .post("http://localhost:5000/blog/update", json)
        .then(response => {
          if (response.data == "OK") {
            this.$notify({
              title: "成功",
              message: "已更新相关文章",
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
            message: "检索失败，文章不存在，具体请查看日志"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#publish {
  .quill-editor {
    .ql-toolbar{
      position: fixed;
      width:100vw;
      background-color: white;
      z-index: 1;
    }
    .ql-container {
      min-height: 20em;
      top: 5vh;
    }
  }

  .el-input {
    width: auto;
  }
}

#articleControl {
  text-align: center;
  margin-top: 5vh;
}
</style>