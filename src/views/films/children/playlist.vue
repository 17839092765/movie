<template>
  <div class="">
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
            <div class="pic">
              <img :src="item.poster" alt="" />
            </div>
            <div class="case-tit">
              <p class="one">
                <span>{{ item.name }}</span>
                <span>{{ item.filmType.name }}</span>
              </p>
              <p class="two">
                <span>观众评分&nbsp;</span><span>{{ item.grade }}</span>
              </p>
              <p class="van-ellipsis three">
                <span>主演：</span>
                <span v-for="(item, index) in item.actors" :key="index"
                  >{{ item.name }}&nbsp;</span
                >
              </p>
              <p class="four">
                <span>{{ item.nation }}</span
                >&nbsp;|&nbsp;<span>{{ item.runtime }}分钟</span>
              </p>
            </div>
          </div>
          <div class="right">
            <van-button type="primary">购票</van-button>
          </div>
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
      console.log(1111111111, this.i);
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
            `https://m.maizuo.com/gateway?cityId=310100&pageNum=${
              this.i + 1
            }&pageSize=10&type=1&k=3147205`,
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
            // console.log(res.data.data.films);
            for (let i = 0; i < res.data.data.films.length; i++) {
              this.list.push(res.data.data.films[i]);
            }
            console.log(this.list);
            this.i++;
            console.log(222222222222, this.i);
            this.loading = false;
          });

        // 加载状态结束
        // this.loading = false;

        // 数据全部加载完成
        // if (this.list.length >= 45) {
        //   this.finished = true;
        //   // this.refreshing = false;
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
  // position: relative;
  // background: rgb(238, 232, 232);
  // margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 90%;
    height: 100px;
    // float: left;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pic {
      width: 30%;
      height: 100%;
      img {
        width: 90%;
        // height: 100%;
      }
    }
    .case-tit {
      padding: 0 5px;
      text-align: left;
      width: 70%;
      .one {
        span:nth-of-type(1) {
          max-width: calc(100% - 25px);
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 5px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span:nth-of-type(2) {
          padding: 0 2px;
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 16px;
          border-radius: 2px;
        }
      }
      .two {
        margin-top: 4px;
        span:nth-of-type(1) {
          font-size: 13px;
          color: #797d82;
        }
        span:nth-of-type(2) {
          color: #ffb232;
          font-size: 14px;
        }
      }
      .three {
        margin-top: 4px;
        span {
          font-size: 13px;
          color: #797d82;
        }
      }
      .four {
        margin-top: 4px;
        span {
          font-size: 13px;
          color: #797d82;
        }
      }
    }
  }
  .right {
    width: 30%;
    .van-button {
      width: 90%;
      height: 30px;
      font-size: 12px;
    }
  }
}
</style>
