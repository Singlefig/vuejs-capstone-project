import { createStore } from 'vuex'

export default createStore({
  state: {
    favouriteCharacters: [],
  },
  getters: {
    getFavouriteCharactersLength: (state) => {
      return state.favouriteCharacters.length
    },
    getFavouriteCharacters: (state) => {
      return state.favouriteCharacters
    },
  },
  mutations: {
    ADD_CHARACTER_TO_FAVOURITE(state, value) {
      state.favouriteCharacters.push(value)
    },
    REMOVE_CHARACTER_FROM_FAVOURITE(state, value) {
      let temp = state.favouriteCharacters
      temp = temp.filter((character) => character.id !== value.id)
      state.favouriteCharacters = [...temp]
    },
  },
  actions: {
    addCharacter({ commit }, value) {
      commit('ADD_CHARACTER_TO_FAVOURITE', value)
    },
    removeCharacter({ commit }, value) {
      commit('REMOVE_CHARACTER_FROM_FAVOURITE', value)
    },
  },
  modules: {},
})
