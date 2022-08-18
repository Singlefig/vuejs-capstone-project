<template>
  <router-link :to="{ name: 'CharacterDetails' }">
    <div class="character-card">
      <img :src="character.image" />
      <p class="character-name">{{ character.name }}</p>
      <p class="character-details">
        {{ character.species }} - {{ character.status }}
      </p>
      <button>Add to Favourites</button>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['character'],
  name: 'CharacterCard',
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
  width: 180px;
  border: none;
  border-radius: 10px;
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
