<template>
  <div id="app">
    <el-container>
      <!--导航栏-->
      <el-header style="height:auto">
        <el-row :gutter="20" style="margin:0 0">
          <el-menu class="el-menu-demo" mode="horizontal"  background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b" :router='isRouter' >
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-menu-item index="/home">首页</el-menu-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-menu-item index="/try">测评</el-menu-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-menu-item index="/technology">技术</el-menu-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-menu-item index="/tour">游记</el-menu-item>
              </div>
            </el-col>
          </el-menu>
        </el-row>
      </el-header>
      <!--内容-->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--页脚-->
      <el-footer>
        <span>start at 2018/11/1 build by <router-link to="/login">cyj</router-link></span>
       </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      isRouter: true
    };
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;

  /*element Ui*/
  /*布局容器*/
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    // text-align: center;
    // line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /*我修改的*/
  .el-header {
    padding: 0 0;
  }
}

a{
  text-decoration:none;
  color: #333;
  cursor: text;
}
a:hover{
  cursor: text
}
a:active {
  text-decoration: none;
}
ul {
  list-style: none;
}
.el-aside{
  border-right: darkgray thin solid;
}
</style>