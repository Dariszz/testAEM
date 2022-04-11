<template>
  <div>
    <div class="main">
      <div class="divLabel">
        <label for="generalInput">{{ text }}</label>
        <p v-if="required === 'true'" class="hidden" :id="messageError">
          {{ textError }}
        </p>
      </div>
      <input
        @input="setRequired"
        :id="idInput"
        :type="type"
        name="generalInput"
        :placeholder="placeholder"
        :required="required"
      />
    </div>
    <div></div>
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
    },
    required: {
      type: String,
      default: 'false'
    },
    messageError: {
      type: String,
      default: 'error'
    },
    textError: {
      type: String,
      default: 'Campo Obrigatório'
    },
    idInput: {
      type: String
    }
  },
  updated () {
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

    if (tab1) {
      container = tab1
    } else if (tab2) {
      container = tab2
    } else if (tab3) {
      container = tab3
    }

    container.style.cssText =
      'background-color: white; border-radius: 20px; margin-top: 2%'
  },
  methods: {
    setRequired () {
      if (this.required === 'true') {
        const requiredInput = document.querySelector(`#${this.idInput}`).value
        sessionStorage.setItem(this.text, requiredInput)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
