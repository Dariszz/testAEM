<template>
  <div>
    <div :class="$style[size]"></div>
  </div>
</template>

<script>
// Imports

export default {
  name: 'Empty',
  props: {
    size: {
      type: String,
      default: 'xs'
    }
  }
}
</script>

<style module>
.xs {
  padding: 1em 0;
}
.md {
  padding: 4em 0;
}
.lg {
  padding: 8em 0;
}
</style>
