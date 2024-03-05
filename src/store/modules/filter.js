const state = { 
    users: {user_id: '', user_mail: '', user_password: ''},
    products: {products_name: '', products_calories: '', products_fat: '', products_carbs: '', products_protein: '', products_iron: ''}
}

const getters =  {
    getUserID : (state) => {
        return state.users.user_id
    },
    getUserMail : (state) => {
        return state.users.user_mail
    },
    getUserPassword : (state) => {
        return state.users.user_password
    },
}

const mutations = {
    setUserID (state, payload){
        state.users.user_id= payload
    },
    setUserMail (state, payload){
        state.users.user_mail= payload
    },
    setUserPassword (state, payload){
        state.users.user_password= payload
    },
}


export default {
    state, 
    getters,
    mutations
  };
  