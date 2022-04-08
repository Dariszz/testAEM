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
  },
  updated () {
    const container = document.querySelector('[cqpath="/content/vue/ThirdTab/jcr:content/root/responsivegrid/responsivegrid/responsivegrid"] div')
    container.style.cssText = 'background-color: white; border-radius: 20px; margin-top: 2%'
  }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
