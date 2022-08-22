import { createStore } from 'vuex'

export default createStore({
  state: {
    favouriteCharacters:
      JSON.parse(localStorage.getItem('favouriteCharacters')) || [],
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
      const favCharsFromLocalStorage = JSON.parse(
        localStorage.getItem('favouriteCharacters')
      )
      if (favCharsFromLocalStorage) {
        localStorage.setItem(
          'favouriteCharacters',
          JSON.stringify([...favCharsFromLocalStorage, value])
        )
      } else {
        localStorage.setItem('favouriteCharacters', JSON.stringify([value]))
      }
      state.favouriteCharacters.push(value)
    },
    REMOVE_CHARACTER_FROM_FAVOURITE(state, value) {
      const favCharsFromLocalStorage = JSON.parse(
        localStorage.getItem('favouriteCharacters')
      )
      if (favCharsFromLocalStorage) {
        let tempFromStorage = favCharsFromLocalStorage
        tempFromStorage = tempFromStorage.filter(
          (character) => character.id !== value.id
        )
        localStorage.setItem(
          'favouriteCharacters',
          JSON.stringify([...tempFromStorage])
        )
      }
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
