<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'generalText',
  props: {
    text: {
      type: String,
      default: 'Texto Padrão'
    }
  }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
