<template>
  <p :id="textId">{{ text }}</p>
</template>

<script>
export default {
  name: 'generalText',
  props: {
    text: {
      type: String,
      default: 'Texto Padrão'
    },
    textId: {
      type: String,
      default: 'text'
    }
  },

  methods: {
    getTextId () {
      this.text = sessionStorage.getItem(this.textId)
      const textLogical = document.querySelector(`#${this.textId}`)
      if (textLogical) {
        textLogical.innerHTML = this.text
      }
    },

    viewTextId () {
      if (this.textId === 'name') {
        this.text = sessionStorage.getItem('Full name *')
      } else if (this.textId === 'email') {
        this.text = sessionStorage.getItem('Email *')
      } else if (this.textId === 'github') {
        this.text = sessionStorage.getItem('Github *')
      } else if (this.textId === 'teamName') {
        this.text = sessionStorage.getItem('Team Name *')
      } else if (this.textId === 'institution') {
        this.text = sessionStorage.getItem('Institution *')
      } else if (this.textId === 'graduation') {
        this.text = sessionStorage.getItem('Graduation *')
      } else if (this.textId === 'age') {
        this.text = sessionStorage.getItem('age')
      }
    }
  },

  updated () {
    this.viewTextId()
    let container

    const tab1 = document.querySelector(
      '[cqpath="/content/vue/vue/jcr:content/root/responsivegrid/responsivegrid/responsivegrid"] div'
    )

    const tab2 = document.querySelector(
      '[cqpath="/content/vue/SecondTab/jcr:content/root/responsivegrid/responsivegrid/responsivegrid"] div'
    )

    const tab3 = document.querySelector(
      '[cqpath="/content/vue/ThirdTab/jcr:content/root/responsivegrid/responsivegrid/responsivegrid"] div'
    )

    const tab4 = document.querySelector(
      '[cqpath="/content/vue/SuccessTab/jcr:content/root/responsivegrid/responsivegrid/responsivegrid"] div'
    )

    if (tab1) {
      container = tab1
    } else if (tab2) {
      container = tab2
    } else if (tab3) {
      container = tab3
    } else {
      container = tab4
    }

    container.style.cssText =
      'background-color: white; border-radius: 20px; margin-top: 2%'
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
