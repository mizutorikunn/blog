<template>
  <div id="daily">
    <v-container :list="list" :article="article" v-loading="loading"></v-container>
  </div>
</template>

<script>
import container from "../components/container";
import axios from "axios";

export default {
  name: "daily",
  data() {
    return {
      list: "",
      article: "",
      date: "",
      loading: true
    };
  },
  components: {
    "v-container": container
  },
  methods: {
    getData() {
      axios.post("/blog/getData/daily").then(Response => {
      // axios.post("http://localhost:5000/blog/getData/daily").then(Response => {
        this.list = Response.data.list;
        this.article = Response.data.content;
        this.date = Response.data.date;
        this.loading = false;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
}
</style>
