<template>
  <div class="character-card">
    <router-link
      :to="{ name: 'CharacterDetails', params: { id: character.id } }"
    >
      <img :src="character.image" />
    </router-link>
    <p class="character-name">{{ character.name }}</p>
    <p class="character-details">
      {{ character.species }} - {{ character.status }}
    </p>
    <button v-if="!isFavourite" @click.self="addCharacter">
      Add to Favourites
    </button>
    <button v-else @click.self="removeCharacter">Remove from Favourites</button>
  </div>
</template>

<script>
export default {
  props: ['character'],
  name: 'CharacterCard',
  data() {
    return {
      isFavourite: false,
    }
  },
  created() {
    this.getIsFavourite()
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
.character-card {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-bottom: 10px;
  text-align: left;
  -webkit-box-shadow: 1px 1px 25px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 25px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 25px -2px rgba(0, 0, 0, 0.5);
}

.character-card img {
  width: 400px;
}

.character-card p {
  color: black;
  margin: 0;
  padding-left: 20px;
}

.character-card .character-name {
  margin-top: 20px;
  font-size: 20px;
}

.character-card .character-details {
  margin-top: 20px;
  font-size: 18px;
}

.character-card button {
  margin-top: 20px;
  width: fit-content;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-left: 20px;
  background-color: black;
  color: white;
  font-size: 18px;
  cursor: pointer;
  opacity: 1;
}

.character-card button:hover {
  opacity: 0.7;
}
</style>
