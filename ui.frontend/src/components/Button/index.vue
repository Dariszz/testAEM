<template>
  <div id="buttonDiv">
    <i :class="iconLeft"></i>
    <button @click="buttonNext" :id="buttonId" type="submit">{{ text }}</button>
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
    },
    buttonId: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    buttonNext () {
      if (this.buttonId === 'firstNext') {
        if (
          sessionStorage.getItem('Full name *') &&
          sessionStorage.getItem('Email *') &&
          document.querySelector('#checkboxId').checked
        ) {
          this.$router.push({ name: 'SecondTab' })
          location.reload()
        } else {
          document.querySelector('#firstError').style.display = 'flex'
          document.querySelector('#secondError').style.display = 'flex'
          document.querySelector('#error').style.display = 'flex'
        }
      }

      if (this.buttonId === 'secondNext') {
        if (sessionStorage.getItem('Github *')) {
          this.$router.push({ name: 'ThirdTab' })
          location.reload()
        } else {
          document.querySelector('#thirdError').style.display = 'flex'
        }
      }

      if (this.buttonId === 'finish') {
        if (
          sessionStorage.getItem('Team Name *') &&
          sessionStorage.getItem('Institution *') &&
          sessionStorage.getItem('Graduation *')
        ) {
          this.$router.push({ name: 'SuccessTab' })
          location.reload()
        } else {
          document.querySelector('#teamError').style.display = 'flex'
          document.querySelector('#institutionError').style.display = 'flex'
          document.querySelector('#graduationError').style.display = 'flex'
        }
      }

      if (this.buttonId === 'return') {
        this.$router.push({ name: 'Vue' })
        location.reload()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
