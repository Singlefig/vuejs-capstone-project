<template>
  <header>
    <div class="top-content">
      <div class="routes">
        <router-link to="/">Characters</router-link>
        <router-link to="/favourites">Favourites</router-link>
      </div>
      <div class="favourite-count">
        <img
          src="../assets/icons/heart.svg"
          width="24"
          height="24"
          alt="icon for favourite"
        />
        <span>1</span>
      </div>
    </div>
    <div
      v-if="
        !(
          $route.path.includes('favourites') ||
          $route.path.includes('character')
        )
      "
      class="header-controls"
    >
      <Filter />
    </div>
  </header>
</template>

<script>
import Filter from '@/components/Filter.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: {
    Filter,
  },
}
</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  width: calc(100% - 40px);
  padding: 20px;
}

.routes {
  display: flex;
  column-gap: 12px;
  margin-left: 20px;
}

.routes a {
  color: white;
  text-decoration: none;
}

.routes a:first-of-type {
  margin-right: 12px;
}

.routes .router-link-active {
  color: #b5b0b0;
}

.routes a:hover {
  color: #b5b0b0;
}

.favourite-count {
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
}

.favourite-count span {
  padding-top: 2px;
}

.header-controls {
  background-color: #e7e1e1;
  width: 100%;
  padding: 20px 0;
}
</style>
