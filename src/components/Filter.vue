<template>
  <div class="filters">
    <div
      :class="activeFilter === 'All' ? 'filter active' : 'filter'"
      @click="() => setFilter('All')"
    >
      <p>All</p>
    </div>
    <div
      :class="activeFilter === 'Human' ? 'filter active' : 'filter'"
      @click="() => setFilter('Human')"
    >
      <p>Human</p>
    </div>
    <div
      :class="activeFilter === 'Animal' ? 'filter active' : 'filter'"
      @click="() => setFilter('Animal')"
    >
      <p>Animal</p>
    </div>
    <div
      :class="activeFilter === 'Alien' ? 'filter active' : 'filter'"
      @click="() => setFilter('Alien')"
    >
      <p>Alien</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Filter',
  data() {
    return {
      activeFilter: 'All',
    }
  },
  methods: {
    setFilter(text) {
      this.activeFilter = text
      this.$emit('clicked', this.activeFilter)
    },
  },
}
</script>

<style scoped>
.filters {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  font-weight: 600;
  width: 300px;
}

.filter {
  border-right: 1px solid black;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
}

.filter p {
  margin: 10px 0 10px;
  padding: 0 10px;
}

.filter:hover {
  background-color: black;
  color: white;
}

.filter:first-of-type {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.filter:last-of-type {
  border-right: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.active {
  background-color: black;
  color: white;
}
</style>
