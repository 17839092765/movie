<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">films</router-link> | -->
      <!-- <router-link to="/playlist">playlist</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <Footer></Footer>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Footer from "./components/footer";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    Footer,
  },
};
</script>
<style  lang="scss">
img {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px;
}
* {
  margin: 0;
  padding: 0;
}
#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// 转场动画
// .v-enter,
// .v-leave-to {
//   transform: translateX(100%);
//   opacity: 0;
// }
// .v-enter-active,
// .v-leave-active {
//   transition: all 0.3s ease;
// }
</style>
// 获取电影香型
// https://m.maizuo.com/gateway?filmId=5223&k=2557586
// 获取城市
// https://m.maizuo.com/gateway?cityId=410100&ticketFlag=1&k=9760833