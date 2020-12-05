<template>
  <div class="footer">
    <ul>
      <router-link to="/films" tag="li">电影</router-link>
      <router-link to="/cinemas" tag="li">影院</router-link>
      <router-link to="/information" tag="li">资讯</router-link>
      <router-link to="/home" tag="li">我的</router-link>
    </ul>
  </div>
</template>

<script>
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
  components: {},
};
</script>

<style lang='scss' scoped>
.footer {
  z-index: 20;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgb(68, 120, 193);
  ul {
    li {
      // box-sizing: border-box;
      // margin: 5px;
      width: 25%;
      line-height: 50px;
      //   border: 1px solid #000;
      color: rgb(52, 50, 50);
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.router-link-active,
.router-link-exact-active {
  color: #ff5f16 !important;
  background: rgb(228, 200, 200);
  border-radius: 10% 50% 10% 50%;
}
</style>