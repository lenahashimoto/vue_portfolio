<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <div class="title" data-swiper-parallax="-100">I'm Slide 1</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-50">I'm Slide 2</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle2</div>
      </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-50">I'm Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle3</div>
    </swiper-slide>
    <swiper-slide><div class="title" data-swiper-parallax="-50">I'm Slide 4</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle4</div>
      </swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
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