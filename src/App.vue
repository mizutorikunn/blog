<template>
  <div id="app">
    <el-container>
      <!--导航栏-->
      <el-header style="height:auto">
        <el-row :gutter="20" style="margin:0 0">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#1D1E30"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="isRouter"
          >
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-menu-item index="/home">首页</el-menu-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-menu-item index="/daily">日常</el-menu-item>
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
        <span>start at 2018/11/1 build by
          <router-link to="/login">cyj</router-link>
        </span>
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

<style lang="scss" >
//清除默认样式
html {
  color: #000;
  background: #fff;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0 !important;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
ol,
ul {
  list-style: none;
}
caption,
th {
  text-align: left;
}
q:before,
q:after {
  content: "";
}
abbr,
acronym {
  border: 0;
}
//

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
    background-color: #1d1e30;
    color: #ffffff;
    text-align: center;
    padding: 0; //inportant
    a {
      text-decoration: none !important;
      color: #ffffff !important;
      cursor: default !important;
      &:hover {
        cursor: text !important;
      }
      &:active {
        text-decoration: none !important;
      }
    }
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    padding: 0; //important
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

  > section {
    height: 100vh;
    > header {
      line-height: 6vh;
    }
    > footer {
      line-height: 7vh;
    }
    > main {
      height: 87vh;
      > div {
        > div {
          > section {
            > aside {
              width: 20vw !important;
              padding: 20px !important;
              border-right: darkgray thin solid !important;
              > ul {
                > li {
                  margin-bottom: 0.5em;
                  cursor: pointer;
                  span {
                    color: #9a9dae;
                  }
                }
              }
              + main {
                width: 80vw !important;
                padding: 20px !important;
                img {
                  max-width: 100% !important;
                }
              }
            }
          }
        }
      }
    }
  }
}

a {
  text-decoration: none !important;
  &:active {
    text-decoration: none !important;
  }
}

ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
}

body {
  margin: 0 !important;
}
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0 
}

h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
</style>