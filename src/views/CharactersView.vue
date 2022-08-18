<template>
  <div class="container">
    <div class="characters">
      <CharacterCard
        v-for="character in characters"
        :character="character"
        :key="character.id"
      />
    </div>
    <div class="pagination">
      <span>Page {{ page }} of {{ totalPages }}</span>
      <router-link
        :to="{ name: 'characters', query: { page: page - 1 } }"
        rel="prev"
        :class="page != 1 ? 'prev' : 'prev disabled'"
        >&#60; &#60; Prev</router-link
      >

      <router-link
        :to="
          next !== null
            ? { name: 'characters', query: { page: page + 1 } }
            : { name: 'characters', query: { page: page } }
        "
        rel="next"
        :class="next !== null ? 'next' : 'next disabled'"
        >Next &#62; &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { watchEffect } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'
import CharacterService from '@/services/CharacterService'

export default {
  name: 'CharactersView',
  props: ['page'],
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: null,
      next: null,
      totalPages: null,
    }
  },
  created() {
    watchEffect(() => {
      this.characters = null
      CharacterService.getCharacters(this.page).then((response) => {
        this.characters = response.data.results
        this.next = response.data.info.next
        this.totalPages = response.data.info.pages
      })
    })
  },
}
</script>

<style scoped>
.container {
  padding-bottom: 20px;
}

.characters {
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
  width: 1660px;
  justify-content: center;
  align-items: center;
}

.characters a {
  text-decoration: none;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.pagination span {
  margin-right: 20px;
}

.prev,
.next {
  color: black;
  text-decoration: none;
}

.prev {
  margin-right: 20px;
}

.disabled {
  color: #b5b0b0;
  cursor: not-allowed;
}
</style>
