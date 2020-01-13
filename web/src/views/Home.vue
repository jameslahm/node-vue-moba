<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/49934964177020.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/49934964177020.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/49934964177020.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <div class="nav-icons bg-white mt-3 text-center text-dark-1 pt-3">
      <div class="d-flex flex-wrap">
        <div v-for="n in 10" class="nav-item mb-3" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <m-list-card icon="menu" title="新闻" :categories="newsCat">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`"  class="text-left py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="">[{{news.categoryName}}]</span>
					<span class="px-2">|</span>
          <span class="flex-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
				<div class="d-flex flex-wrap">
					<div class="p-2 fs-xs" style="width:20%" v-for="(hero,i) in category.heroList" :key="i">
						<img :src="hero.avatar" class="w-100" alt="">
						<div>{{hero.name}}</div>
					</div>
				</div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true
      },
			newsCat: [],
			heroCats:[]
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCat = res.data;
		},
		async fetchHeroCats(){
			const res=await this.$http.get('heroes/list')
			this.heroCats=res.data
		}
  },
  created() {
		this.fetchNewsCats();
		this.fetchHeroCats();
  }
};
</script>


<style lang="scss">
@import "../assets/scss/_variables";
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>