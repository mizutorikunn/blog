<template>
  <div id="tour">
    <v-container :list="list" :article="article" v-loading="loading"></v-container>
  </div>
</template>

<script>
import container from "../components/container";
import axios from "axios";

export default {
  name: "tour",
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
      axios.post("/blog/getData/tour").then(Response => {
      // axios.post("http://localhost:5000/blog/getData/tour").then(Response => {
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

<style lang="scss">
</style>