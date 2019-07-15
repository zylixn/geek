import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);
// 应用的状态
export default new Vuex.Store({
    // 用户信息
    userInfo: { 
        username: ''
    },
    mutations,
    actions,
    getters
});