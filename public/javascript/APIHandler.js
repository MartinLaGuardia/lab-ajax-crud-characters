
class APIHandler {

  constructor(baseUrl) {
    this.axiosApp = axios.create({
      baseURL: baseUrl,

    })
  }

  getFullList() {
    return this.axiosApp.get('/characters')
  }

  getOneRegister = (registerId) => {
    return this.axiosApp.get(`/characters/${registerId}`)
  }

  createOneRegister() {
    return this.axiosApp.post('/characters')
  }

  updateOneRegister = (updateId) => {
    return this.axiosApp.put(`/characters/${updateId}`)

  }

  deleteOneRegister = (deleteId) => {
    return this.axiosApp.post(`/characters/${deleteId}`)


  }
}
