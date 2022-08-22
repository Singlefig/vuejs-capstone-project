<template>
  <div class="search">
    <input
      placeholder="Search by name..."
      :value="text"
      @input="(event) => setText(event.target.value)"
    />
    <button @click="$emit('search', text)">Search</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'search',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    setText(val) {
      this.text = val
    },
  },
}
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;
  border-right: none;
  box-sizing: border-box;
  margin-left: 30px;
  position: relative;
}

.search button {
  border: 1px solid black;
  height: 42px;
  width: 80px;
  border-radius: 5px;
  position: absolute;
  right: 0;
  cursor: pointer;
}

.search input {
  height: 38px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid rgb(97, 94, 94);
}
</style>
