<template>
  <div class="dropdown">
    <label :for="value">{{ value }}</label>
    <select :name="value" :id="`${value}`" @mouseleave="funcAge">
    </select>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    value: {
      type: String,
      default: 'Value'
    }
  },
  methods: {
    createOption () {
      if (this.value === 'Day') {
        const dayOption = document.querySelector(`#${this.value}`)
        for (let day = 1; day < 32; day++) {
          const valueOption = document.createElement('option')
          valueOption.value = day
          if (day < 10) {
            day = '0' + day
          }
          valueOption.innerText = day
          dayOption.appendChild(valueOption)
        }
      } else if (this.value === 'Month') {
        const monthOption = document.querySelector(`#${this.value}`)
        for (let month = 1; month < 13; month++) {
          const valueOption = document.createElement('option')
          valueOption.value = month
          if (month < 10) {
            month = '0' + month
          }
          valueOption.innerText = month
          monthOption.appendChild(valueOption)
        }
      } else if (this.value === 'Year') {
        const yearOption = document.querySelector(`#${this.value}`)
        for (let year = 1910; year < 2023; year++) {
          const valueOption = document.createElement('option')
          valueOption.value = year
          valueOption.innerText = year
          yearOption.appendChild(valueOption)
        }
      }
    },
    funcAge () {
      const dayOption = document.querySelector('#Day')
      const yearOption = document.querySelector('#Year')
      const monthOption = document.querySelector('#Month')

      const date = new Date()
      const year = date.getFullYear()
      const day = date.getDate()
      const month = date.getMonth()

      let age = 18

      if (monthOption.options[monthOption.selectedIndex].value > month) {
        age = year - yearOption.options[yearOption.selectedIndex].value - 1
      } else if (monthOption.options[monthOption.selectedIndex].value < month) {
        age = year - yearOption.options[yearOption.selectedIndex].value
      } else {
        if (dayOption.options[dayOption.selectedIndex].value > day) {
          age = year - yearOption.options[yearOption.selectedIndex].value - 1
        } else {
          age = year - yearOption.options[yearOption.selectedIndex].value
        }
      }
      localStorage.setItem('age', age)
    }
  },
  updated () {
    this.createOption()
    this.funcAge()
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
