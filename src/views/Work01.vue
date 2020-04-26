<template>
  <div class="hello">
    <div>{{ $route.params.id }}</div>
    {{ id }}
    this is Work_01
  </div>
</template>

<script>
export default {
  name: 'Work01',
  props: ["id"],
  data() {
    return {
      msg: 'this is Work_01'
    }
  },
  computed: {
    Message: () => {
      return alert(this.msg)
    }
  }
}
</script>
