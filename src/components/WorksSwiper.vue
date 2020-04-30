<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <router-link :to="{ name: 'work-01', params: { id: 1 }}">
        <div>
        <div class="swp-title" data-swiper-parallax="-100">WORK 01</div>
        <div class="swp-subtitle" data-swiper-parallax="-200">ダンスカンパニーCo. Ruri Mitoのウェブサイト、フライヤー・ポストカードデザイン。</div>
        </div>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link :to="{ name: 'work-02', params: { id: 1 }}">
        <div class="swp-title" data-swiper-parallax="-50">WORK 02</div>
        <div class="swp-subtitle" data-swiper-parallax="-200">エスニック創作料理店のウェブサイトのリニューアル。</div>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link :to="{ name: 'work-03', params: { id: 1 }}">
        <div class="swp-title" data-swiper-parallax="-50">WORK 03</div>
        <div class="swp-subtitle" data-swiper-parallax="-200">宮内庁式部職楽部の海外公演のレポートや雅楽について紹介しているサイトのレスポンシブ対応。</div>
      </router-link>
    </swiper-slide>
    <swiper-slide><div class="swp-title" data-swiper-parallax="-50">coming soon</div>
      <div class="swp-subtitle" data-swiper-parallax="-200">coming soon</div>
      </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'multiple-view-swiper',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: true,
          parallax:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
</script>