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
				<i class="sprite sprite-arrow mr-1">
				</i>
				<span>收起</span>
			</div>
    </div>

		<m-card title="新闻" icon="menu">
			<div class="nav jc-between">
					<div class="nav-item active">
						<div class="nav-link">热门</div>
					</div>
					<div class="nav-item">
						<div class="nav-link">热门</div>
					</div>
					<div class="nav-item">
						<div class="nav-link">热门</div>
					</div>
					<div class="nav-item">
						<div class="nav-link">热门</div>
					</div>
					<div class="nav-item">
						<div class="nav-link">热门</div>
					</div>
				</div>
				<div class="pt-3">
					<swiper>
					<swiper-slide v-for="m in 5" :key=m> 
						<div class="py-2 text-left" v-for="n in 5" :key="n"> 
							<span>新闻</span>
							<span>|</span>
							<span>夏日新版本</span>
						</div>
					</swiper-slide>
				</swiper>
				</div>
		</m-card>

		<m-card title="英雄列表" icon="menu">
		</m-card>

		
		<m-card title="英雄列表" icon="menu">
		</m-card>

		<m-card title="英雄列表" icon="menu">
		</m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true
      }
    };
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