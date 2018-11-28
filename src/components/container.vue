<template>
  <div id="container">
    <el-container>
      <el-aside>
        <ul>
          <li v-for="(item,index) in list" :key="item">
            <!-- <el-button @click="showContent(index)">{{item}}</el-button> -->
            <el-button type="text" @click='showContent(index)'>{{item}}</el-button>
          </li>
        </ul>
      </el-aside>
      <el-main v-html="content">
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  props: ["list", "article"],
  methods: {
    showContent(index) {
      //在展示文章时把文章标题添加在开头，把文章发布时间添加在右下角
      this.content = `<h1>${this.$parent.list[index]}</h1>`+this.$parent.article[index]+`<p style="text-align:right">${this.$parent.date[index]}</p>`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>