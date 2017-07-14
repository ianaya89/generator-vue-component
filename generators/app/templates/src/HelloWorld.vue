<template lang="pug">
  div
    h1 Hello World
    h3(v-show="true") <%= libraryName %>
    img(src="img/vue.png", alt="vue")
</template>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: tomato;
  }
</style>
