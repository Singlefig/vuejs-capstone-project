<template>
  <div v-if="characters.length > 0" class="container">
    <CharacterCard
      v-for="character in characters"
      :character="character"
      :key="character.id"
    />
  </div>
  <div v-else>
    <p>No Cards</p>
  </div>
</template>

<script>
import { watchEffect } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'
export default {
  name: 'FavouriteCharacters',
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
    }
  },
  created() {
    watchEffect(() => {
      this.characters = this.$store.state.favouriteCharacters
    })
  },
}
</script>

<style scoped>
.container {
  padding-bottom: 20px;
  width: 1660px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
}
</style>
