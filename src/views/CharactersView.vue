<template>
  <div class="container">
    <div
      v-if="
        !(
          $route.path.includes('favourites') ||
          $route.path.includes('character')
        )
      "
      class="header-controls"
    >
      <div class="filter-search">
        <Filter @clicked="onClickChild" />
        <Search @search="onSearchClick" />
      </div>
    </div>
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
          page !== totalPages
            ? { name: 'characters', query: { page: page + 1 } }
            : { name: 'characters', query: { page: page } }
        "
        rel="next"
        :class="page !== totalPages ? 'next' : 'next disabled'"
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
import Filter from '@/components/Filter.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'CharactersView',
  props: ['page'],
  components: {
    CharacterCard,
    Filter,
    Search,
  },
  data() {
    return {
      characters: null,
      next: null,
      totalPages: null,
      activeFilter: '',
      searchText: '',
    }
  },
  created() {
    watchEffect(() => {
      this.characters = null
      CharacterService.getCharacters(
        this.page,
        this.activeFilter,
        this.searchText
      ).then((response) => {
        this.characters = response.data.results
        this.next = response.data.info.next
        this.totalPages = response.data.info.pages
      })
    })
  },
  methods: {
    onClickChild(val) {
      this.activeFilter = val
    },
    onSearchClick(text) {
      this.searchText = text
    },
  },
}
</script>

<style scoped>
.container {
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 1660px;
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

.header-controls {
  background-color: #e7e1e1;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.filter-search {
  width: 1660px;
  display: flex;
  align-items: center;
}
</style>
