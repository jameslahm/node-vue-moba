<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide >
        <img class="w-100" src="../assets/images/49934964177020.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/49934964177020.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/49934964177020.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>