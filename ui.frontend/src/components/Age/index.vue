<template>
  <div>
    <label>Age</label>
    <p :id="ageId" class="htmlAge">
      {{ htmlAge }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Age',
  props: {
    htmlAge: {
      type: String,
      default: '00'
    },
    ageId: {
      type: String,
      default: 'Age'
    }
  },
  methods: {
    ageHtml () {
      const age = sessionStorage.getItem('age')
      const ageLogical = document.querySelector('#age-logical')
      if (ageLogical) {
        ageLogical.innerHTML = age
      }
    },
    viewAge () {
      if (this.ageId === 'age') {
        this.htmlAge = sessionStorage.getItem('age')
      }
    }
  },
  updated () {
    this.viewAge()
    setInterval(this.ageHtml, 1000)
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
