<template>
  <div v-if="character" class="container">
    <div class="details">
      <p class="character-name">{{ character.name }}</p>
      <p>{{ character.species }} - {{ character.status }}</p>
      <p>Last known location: {{ character.location.name }}</p>
      <p>First seen in: {{ character.episode[0] }}</p>
      <button v-if="!isFavourite" @click="addCharacter">
        Add to Favourites
      </button>
      <button v-else @click="removeCharacter">Remove from Favourites</button>
    </div>
    <div class="image">
      <img :src="character.image" />
    </div>
  </div>
</template>

<script>
import CharacterService from '@/services/CharacterService'
export default {
  name: 'CharacterDetails',
  props: ['id'],
  data() {
    return {
      character: null,
      isFavourite: false,
    }
  },
  created() {
    CharacterService.getCharacter(this.id).then((response) => {
      this.character = response.data
      this.getIsFavourite()
    })
  },
  methods: {
    addCharacter() {
      this.$store.dispatch('addCharacter', this.character)
      this.getIsFavourite()
    },
    removeCharacter() {
      this.$store.dispatch('removeCharacter', this.character)
      this.getIsFavourite()
    },
    getIsFavourite() {
      this.isFavourite =
        this.$store.state.favouriteCharacters.length > 0
          ? this.$store.state.favouriteCharacters.find(
              (el) => el.id === this.character.id
            )
          : false
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  -webkit-box-shadow: 1px 1px 25px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 25px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 25px -2px rgba(0, 0, 0, 0.5);
  width: calc(100% - 250px);
  border-radius: 10px;
  height: 300px;
}

.details {
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: left;
  justify-content: space-around;
}

.details p {
  margin: 0;
  margin-bottom: 12px;
  font-size: 20px;
}

.character-name {
  font-size: 32px;
  font-weight: 600;
}

.details button {
  width: fit-content;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 18px;
  cursor: pointer;
  opacity: 1;
}

.details button:hover {
  opacity: 0.7;
}
</style>
