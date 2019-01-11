<template>
  <div id="login">
    <input v-model="account">
    <input v-model="password" type="password">
    <button @click="submit()">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "请输入账号",
      password: "请输入密码"
    };
  },
  methods: {
    submit() {
      if (this.account == "yongjie" && this.password == "Cyj123456") {
        location.href = "/admCyjlogin";
      } else {
        alert("账号或密码错误");
      }
    }
  }
};
</script>

<style lang="scss">

</style>