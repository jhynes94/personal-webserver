import Api from '@/services/Api.js'

export default {


    FakePostRequest (credentials) {
        return Api().post('/TempData', credentials)
    },

    getTempData (params) {
        return Api().get('TempData', {
          params: params
        })
      },

    getMeals (accountNumber){
        return Api().get('/meals?account=' + accountNumber, {})
    },
}