<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(project, i) in projects" :key="i">
      <router-link :to="{ name: project.name, params: { id: 1 }}">
        <div>
            <img :src="project.image" class="swp-image" data-swiper-parallax="-200">
            <div class="swp-title" data-swiper-parallax="-50">{{ project.title }}</div>
        </div>
      </router-link>
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
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
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
        },
        projects: [
        {
            title: 'WORK 01',
            subtitle: 'ダンスカンパニーCo. Ruri Mitoのウェブサイト、フライヤー・ポストカードデザイン。',
            name: 'work-01',
            image: '../../images/corurimito.jpg'
        },
        {
            title: 'WORK 02',
            subtitle: 'エスニック創作料理店のウェブサイトのリニューアル。',
            name: 'work-02',
            image: '../../images/ricepaper.jpg'
        },
        {
            title: 'WORK 03',
            subtitle: '宮内庁式部職楽部の海外公演のレポートや雅楽について紹介しているサイトのレスポンシブ対応。',
            name: 'work-03',
            image: '../../images/gagaku.jpg'
        },
        {
            title: 'WORK 04',
            subtitle: 'ダンスカンパニーC/OmpanyのDVDジャケット、ポスター、パンフレットのデザイン。',
            name: 'work-04',
            image: '../../images/cslash.jpg'
        },
        {
            title: 'WORK 05',
            subtitle: 'Ballet Studio Blancフライヤー・ポストカードデザイン。',
            name: 'work-05',
            image: '../../images/balletstudio00.jpg'
        },
        {
            title: 'WORK 06',
            subtitle: 'ダンスカンパニーOrganWorksのフライヤーデザイン。',
            name: 'work-06',
            image: '../../images/organworks.jpg'
        }
    ]
      }
    }
  }
</script>