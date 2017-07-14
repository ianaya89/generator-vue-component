<template lang="pug">
  .docs
    hello-world(emoji="🤔")
    h3 Usage
    pre
      code(v-text="sourcecode")
</template>

<script>
  import HelloWorld from '../src/HelloWorld.vue'

  export default {
    name: 'App',
    components: { HelloWorld },

    data () {
      return { sourcecode: 'hello-world(emoji="🤔")' }
    }
  }
</script>

<style lang="scss">
  .docs {
    width: 50%;
    margin: auto;
    padding: 10px;
  }

  code {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background: #3d3d3d;
    color: #f3f3fe;
  }
</style>
