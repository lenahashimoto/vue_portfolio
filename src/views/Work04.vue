<template>
  <div class="work-content">
    <div class="work-text">
      <h2>C/Ompany</h2>
      <p>
        ダンスカンパニーC/OmpanyのDVDジャケット、ポスター、パンフレットのデザイン。
      </p>
    </div>
    <div class="main-content" v-for="(project, i) in projects" :key="i">
      <h3>{{ project.name }}</h3>
      <p>{{ project.period }}</p>
      <img :src="project.image">
      <img :src="project.image2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work04',
  props: ["id"],
  data: () => ({
      projects: [
        {
          name: '「凸し凹る」DVDジャケットデザイン',
          period: '2019年11月',
          image: '../../images/cslash01.jpg',
        },
        {
          name: '「イキ・シ・タイ」ポスターデザイン',
          period: '2018年12月',
          image: '../../images/cslash02.jpg',
        },
        {
          name: '「談ス」DVDジャケットデザイン',
          period: '2018年4月',
          image: '../../images/cslash03.jpg',
        },
                {
          name: '「忘れろ／ボレロ」パンフレットデザイン',
          period: '2018年12月',
          image: '../../images/cslash04.jpg',
          image2: '../../images/cslash05.jpg'
        }  
      ]
    })
}
</script>