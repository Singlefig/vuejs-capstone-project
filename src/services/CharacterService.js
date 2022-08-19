import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCharacters(page, filter, search) {
    let queryParamsStr = ''
    if (page) {
      queryParamsStr += `page=${page}`
    }

    if (filter) {
      queryParamsStr += filter === 'All' ? '' : '&species=' + filter
    }

    if (search) {
      queryParamsStr += `&name=${search}`
    }

    return apiClient.get(`/character?${queryParamsStr}`)
  },
  getCharacter(id) {
    return apiClient.get('/character/' + id)
  },
}
