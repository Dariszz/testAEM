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
  }
}
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>
