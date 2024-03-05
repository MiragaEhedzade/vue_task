// store/index.js
import { createStore } from 'vuex';
import authModule  from './modules/auth'
import filterModule  from './modules/filter'

export default createStore({
    modules: {
        auth: authModule ,
        filter: filterModule
    }
});
