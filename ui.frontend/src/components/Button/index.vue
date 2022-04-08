<template>
  <div id="buttonDiv">
     <i :class="iconLeft"></i>
     <button type="submit"> {{ text }} </button>
     <i :class="iconRight"></i>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'TextButton'
    },
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    }
  },
  updated () {
    const container = document.querySelector('[cqpath="/content/vue/vue/jcr:content/root/responsivegrid/responsivegrid/responsivegrid"] div')
    container.style.cssText = 'background-color: white; border-radius: 20px; margin-top: 2%'
  }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
