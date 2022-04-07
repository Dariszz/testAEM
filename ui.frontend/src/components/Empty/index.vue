<template>
  <div className={${style[size.size]}}></div>
</template>

<script>
// Imports
import style from './index.module.scss'
export default {
  name: 'Empty',
  props: {
    size: {
      type: String,
      default: 'medium'
    }
  },
  style () {
    return style[this.size]
  }
}
</script>

<style>

</style>
