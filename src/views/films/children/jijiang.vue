<template>
  <div class="jijiang">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        :immediate-check="immediate"
        offset="30"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in list" :title="item.name" :key="item.filmId" /> -->
        <div v-for="item in list" :key="item.filmId" class="case">
          <div class="left">
            <img :src="item.poster" alt="" />
          </div>
          {{ item.name }}
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      list: [],
      immediate: true,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      // console.log(1111111111, this.i);
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求

      // 加载状态结束
      // if (this.list.length >= 40) {
      //   this.finished = true;
      // }

      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.i = 0;
          this.refreshing = false;
        }
        this.$axios
          .get(
            `https://m.maizuo.com/gateway?cityId=440100&pageNum=${
              this.i + 1
            }&pageSize=10&type=2&k=2086378`,
            {
              headers: {
                "X-Client-Info":
                  '{"a":"3000","ch":"1002","v":"5.0.4","e":"1607088412970654018961409","bc":"310100"}',
                "X-Host": "mall.film-ticket.film.list",
              },
            }
          )
          .then((res) => {
            if (res.data.data.films.length == 0) {
              this.finished = true;
              console.log("33333333333333333333333333累了");
            }
            console.log(res.data.data.films.length);
            for (let i = 0; i < res.data.data.films.length; i++) {
              this.list.push(res.data.data.films[i]);
            }
            // console.log(this.list);
            this.i++;
            // console.log(222222222222, this.i);
            this.loading = false;
          });

        // 加载状态结束
        // this.loading = false;

        // 数据全部加载完成
        // if (this.list.length >= 45) {
        //   this.finished = true;
        // }
      }, 0);
    },
  },
  created() {
    // this.getlist();
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

<style lang="scss" scoped>
.case {
  // border: 1px solid #000;
  padding: 15px 15px 15px 15px;
  height: 94px;
  position: relative;
  // background: rgb(238, 232, 232);
  // margin: 5px 0;
  // display: flex;
  // // justify-content: space-between;
  // align-items: center;

  .left {
    width: 70px;
    height: 100px;
    float: left;
    overflow: hidden;
    // img {
    //   width: 100%;
    //   height: 100%;
    // }
  }
}
</style>
