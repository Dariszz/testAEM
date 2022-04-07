<template>
  <div id="app">
    <header>
      <div class="text">
        <p>Forms</p>
        <h1>{{ text }}</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text: {
      type: String,
      default: 'First Tab'
    }
  }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
