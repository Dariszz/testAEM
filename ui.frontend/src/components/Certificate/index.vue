<template>
  <section id="app" class="container">
    <label>Certificate</label>
    <div class="input">
      <input
        type="text"
        v-model="name"
        placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      />
    </div>
    <div class="part2">
      <div class="select">
        <select>
          <option class="options" v-for="item in todos" :key="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="button">
        <form @submit="handleSubmit">
          <button><strong>+ </strong>More<strong> ></strong></button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Certificate',
  data () {
    return {
      todos: [
        {
          id: 1,
          name: 'Certificates'
        }
      ],
      name: ''
    }
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault()
      if (this.name.trim().length) {
        const obj = {
          id: this.todos.length + 1,
          name: this.name
        }
        this.todos.push(obj)
        this.name = ''
      }
    }
  }
}
</script>

<style scoped>
@import "./index.scss";
</style>
