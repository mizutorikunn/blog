  <template>
  <div id="home">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <a :href="url[item-1]" target="blank">
          <img :src='"../assets/"+item+".png"'>
        </a>
      </el-carousel-item>
    </el-carousel>
    <el-main v-html="notice"></el-main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      notice: "公告加载中",
      url: [
        "https://simple-download-tool.herokuapp.com/home",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g"
      ]
    };
  },
  methods: {
    getNotice() {
      axios.post("/blog/getData/notice").then(Response => {
        // axios.post("http://localhost:5000/blog/getData/notice").then(Response => {
        let article = Response.data.content;
        let date = Response.data.date;
        this.notice = article + `<p>${date}</p>`;
      });
    }
  },
  mounted() {
    this.getNotice();
  }
};
</script>

<style lang="scss" scoped>
#home {
  body {
    margin: 0;
  }

  ul {
    list-style: none !important;
  }

  img {
    width: 100%;
    height: 100%;
  }
  text-align: center;
  .el-carousel {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>

