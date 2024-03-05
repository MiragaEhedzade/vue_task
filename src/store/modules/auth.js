import { getUsers } from '../../api';

const state = {
  isAuthenticated: false,
  users: [],
};

const mutations = {
  SET_AUTHENTICATED(state, value) {
    state.isAuthenticated = value;
  },
  SET_USERS(state, users) {
    state.users = users;
  },
};

const actions = {
  async loadUsers({ commit }) {
    try {
      const response = await getUsers();
      commit('SET_USERS', response.data); 
    } catch (error) {
      console.error('Error loading users:', error);
    }
  },
  login({ commit, state }, { username, password }) {
    const user = state.users.find((u) => u.email === username && u.password === password);
    console.log('login====', state.users)
    if (user) {
      commit('SET_AUTHENTICATED', true);
      return Promise.resolve();
    } else {
      return Promise.reject('Invalid credentials');
    }
  },
  logout({ commit }){
    commit('SET_AUTHENTICATED', false);
    return Promise.resolve();
  }
};

const getters= {
  isAuthenticated: (state) => state.isAuthenticated,
  user: (state) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters
};
