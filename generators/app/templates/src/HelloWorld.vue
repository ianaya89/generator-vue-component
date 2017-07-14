<template lang="pug">
  div
    h2 Hello World!
      span {{ emoji }}
    img(src="./assets/vue.png", alt="vue")
</template>

<script>
  export default {
    name: 'HelloWorld',

    props: ['emoji']
  }
</script>

<style lang="scss" scoped>
</style>
