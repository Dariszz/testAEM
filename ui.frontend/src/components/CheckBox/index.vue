<template>

  <label class="container">{{ text }}
    <input type="Checkbox" name="checkbox" class="checkbox">
    <span class="checkmark"></span>
  </label>

</template>

<script>

export default {
  name: 'InputCheckbox',
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
