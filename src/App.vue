<template>
  <div id="app">
    <Link>
      <a class="active" href="/main">Main</a>
      <a href="/chat">Chat</a>
      <a href="/spa">Spa</a>
    </Link>
    <router-view></router-view>
  </div>
</template>

<script>
import Link from "@/components/Link";
export default {
  name: "App",
  components: {
    Link,
  },
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="scss">
html,
body {
  font-family: "Roboto", sans-serif;
  min-height: 100%;
  height: 100%;
  margin: 0;
  // #app {
  //   min-height: 100%;
  //   // overflow-x: hidden;
  // }
}
* {
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
