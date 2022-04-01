<template>
  <div class="main">
    <label for="generalInput">{{ text }}</label>
    <input :type="type" name="generalInput" :placeholder="placeholder">
  </div>
</template>

<script>

export default {
  name: 'generalInput',
  props: {
    text: {
      type: String,
      default: 'Texto Padrão'
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'placeholder'
    }
  }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
