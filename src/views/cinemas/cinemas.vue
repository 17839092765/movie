<template>
  <div class="cinema">
    <van-sticky>
      <van-nav-bar title="影院">
        <template #left>
          <span><router-link to="/city">上海</router-link></span>
        </template>
        <template #right>
          <router-link to="search"
            ><van-icon name="search" size="18"
          /></router-link>
        </template>
      </van-nav-bar>
      <!-- 下拉菜单 -->
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </van-sticky>

    <div v-for="item in cinemaList" :key="item.cinemaId" class="box">
      <div class="left">
        <div class="van-ellipsis">{{ item.name }}</div>
        <div class="van-ellipsis">{{ item.address }}</div>
      </div>
      <div class="right">
        <p>
          ￥<span>{{ item.lowPrice | toFixed }}</span
          >起
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    toRMB: function (money) {
      return `￥${money}`;
    },
    toFixed: function (money) {
      var intPartFormat = money
        .toString()
        .replace(/(\d)(?=(?:\d{2})+$)/g, "$1."); //将整数部分逢er一断
      return intPartFormat;
    },
  },
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      switch1: false,
      switch2: false,
      option1: [{ text: "全城", value: 0 }],
      option2: [
        { text: "APP订票", value: 0 },
        { text: "前台兑换", value: 1 },
      ],
      option3: [
        { text: "最近去过", value: 0 },
        { text: "离我最近", value: 1 },
      ],
      cinemaList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    getcity() {
      this.$axios
        .get(
          `https://m.maizuo.com/gateway?cityId=410100&ticketFlag=1&k=7198839`,
          {
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"1607088412970654018961409","bc":"310100"}',
              "X-Host": "mall.film-ticket.cinema.list",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.cinemaList = res.data.data.cinemas;
        });
    },
  },
  created() {
    this.getcity();
  },
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
.box {
  text-align: left;
  text-indent: 10px;
  width: 100%;
  height: 80px;
  border: 1px solid #cecece;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left {
    width: 70%;
    > div:nth-of-type(1) {
      color: #191a1b;
      font-size: 15px;
      margin-top: 5px;
    }
    > div:nth-of-type(2) {
      color: #797d82;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .right {
    width: 30%;
  }
}
</style>