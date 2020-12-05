<template>
  <div class="films">
    <!-- //轮播 -->

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="box" v-for="item in images" :key="item"
        ><img :src="item" alt=""
      /></van-swipe-item>
    </van-swipe>
    <van-sticky @scroll="scroll">
      <div v-if="falg" class="header">
        <p>11111</p>
      </div>

      <van-row class="nav" type="flex" justify="center">
        <van-col span="9">
          <router-link to="/films/playlist" tag="span">正在热映</router-link>
        </van-col>
        <van-col span="9">
          <router-link to="/films/jijiang" tag="span">即将上映</router-link>
        </van-col>
      </van-row>
    </van-sticky>

    <ul></ul>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      falg: false,
      images: [
        "https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70",
        // "https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70",
        // "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    scroll(isFixed) {
      //   console.log(isFixed);
      if (isFixed.isFixed) {
        this.falg = true;
      } else {
        this.falg = false;
      }
      //
    },
  },
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
.my-swipe .van-swipe-item {
  //   color: #fff;
  //   width: 100px;
  //   font-size: 20px;
  //   line-height: 150px;
  //   text-align: center;
  //   background-color: #39a9ed;
  overflow: hidden;
  img {
    width: 100%;
    // height: 100px;
  }
}

.nav {
  line-height: 50px;
  span {
    padding: 5px 5px;
  }
  .router-link-exact-active {
    color: #42b983;
    border-bottom: 2px solid #42b983;
  }
  //   margin-bottom: 10px;
  background: rgb(255, 255, 255);
}
.header {
  line-height: 50px;
  height: 50px;
  background: rgb(253, 253, 253);
}
// // 转场动画
// .v-enter,
// .v-leave-to {
//   transform: translateX(100%);
//   opacity: 0;
// }
// .v-enter-active,
// .v-leave-active {
//   transition: all 0.3s ease;
// }
//转场动画
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  //   启用硬件加速
  will-change: transform;
  transition: all 300ms;
  position: fixed;
}
// .v-enter {
//   transform: translateY(10%);
//   opacity: 0;
// }
.v-enter,
.v-leave-to {
  transform: translateX(100%);
  opacity: 0;
  //   background: #000;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
// .slide-transition {
//   transition: all 0.4s ease;
// }
// .slide-enter {
//   transform: translate3d(0, 100%, 0);
// }
// .slide-leave {
//   transform: translate3d(0, -100%, 0);
// }
// .router-transition-enter-active {
//   transition: all 0.3s ease;
// }
// .router-transition-leave-active {
//   transition: all 0.5s ease;
// }
// .router-transition-enter,
// .router-transition-leave-active {
//   transform: translateY(20px);
//   opacity: 0;
// }
</style>