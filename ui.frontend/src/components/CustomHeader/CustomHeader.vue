<template>
  <header>
    <h1>OLÁ, SOU UM HEADER</h1>
    <p>SOU O TEXTO DO HEADER</p>
    <p>{{ text }}</p>
  </header>
</template>

<script>
// Imports

export default {
  name: 'CustomHeader',
  props: {
    text: {
      type: String,
      default: 'Text padrão'
    }
  }
}
</script>

<style>
header {
  background-color: #eee;
}
h1 {
  color: red;
}
</style>
