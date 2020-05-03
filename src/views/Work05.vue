<template>
  <div class="work-content">
    <div class="work-text">
      <h2>Ballet Studio Blanc</h2>
      <p>
        バレエスタジオのオープンに際し、フライヤーを担当させていただきました。<br>
        子供向けのクラスがメインなのでかわいらしいイメージでまとめました。
      </p>
    </div>
    <div class="main-content" v-for="(project, i) in projects" :key="i">
      <h3>{{ project.name }}</h3>
      <p>{{ project.period }}</p>
      <img :src="project.image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work05',
  props: ["id"],
  data: () => ({
      projects: [
        {
          name: '「Ballet Studio Blanc」フライヤー',
          period: '2019年11月',
          image: '../../images/balletstudio.jpg',
        } 
      ]
    })
}
</script>