<template>
  <header>
    <div class="routes">
      <router-link to="/">Characters</router-link>
      <router-link to="/favourites">Favourites</router-link>
    </div>
    <div>
      <img
        src="../assets/icons/heart.svg"
        width="32"
        height="32"
        alt="icon for favourite"
      />
      <span>1</span>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  width: 100%;
}

.routes {
  display: flex;
  column-gap: 12px;
}
</style>
