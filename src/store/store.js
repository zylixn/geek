import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);
// 应用的状态
export default new Vuex.Store({
    state:{
        // 用户信息
        userInfo: { 
            username: ''
        },
        shoppingCart: [{
            goods_id: 1529931938150,
            count: 1,
            img: 'static/img/goodsDetail/pack/1.jpg',
            price: 28,
            title: '白菜'
        }]
    },
    mutations,
    actions,
    getters
});