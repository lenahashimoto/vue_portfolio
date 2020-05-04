<template>
  <div class="work-content">
    <div class="work-text">
      <h2>OrganWorks</h2>
      <p>
        ダンスカンパニーOrganWorksのフライヤーデザイン。
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
  name: 'Work01',
  props: ["id"],
  data: () => ({
      projects: [
        {
          name: '「Triple Bill」公演フライヤー',
          period: '2017年1月',
          image: '../../images/organworks01.jpg'
        },
        {
          name: '「Tatiana Chorot x OrganWorks」公演フライヤー',
          period: '2016年12月',
          image: '../../images/organworks02.jpg'
        },
        {
          name: '「Reason to Believe」公演フライヤー',
          period: '2016年5月',
          image: '../../images/organworks03.jpg',
        },
        {
          name: '「Grease2」公演フライヤー',
          period: '2013年6月',
          image: '../../images/organworks04.jpg'
        },
        {
          name: '「空の街」公演フライヤー',
          period: '2013年2月',
          image: '../../images/organworks05.jpg'
        }
      ]
    })
}
</script>