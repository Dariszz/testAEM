<template>
  <div id="app">
    <nav>
      <div class="info">
        <h4>Team Sign Up</h4>
      </div>
      <div class="items">
        <div :class="tab1" id="basic"><li>Basic</li></div>
        <div :class="tab2" id="social"><li>Social</li></div>
        <div :class="tab3" id="certificate"><li>Certificate</li></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    tab1: {
      type: String,
      default: 'tab1'
    },
    tab2: {
      type: String,
      default: 'tab2'
    },
    tab3: {
      type: String,
      default: 'tab3'
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
