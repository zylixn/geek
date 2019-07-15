// 用户登录
export const login = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      if (data.username === 'lixn' && data.password === '123456') {
        localStorage.setItem('loginInfo', JSON.stringify(data));
        commit('SET_USER_LOGIN_INFO', data);
        resolve(true);
        return true;
      }
      const userArr = localStorage.getItem('users');
      console.log(userArr);
      if (userArr) {
        const users = JSON.parse(userArr);
        for (const item of users) {
          if (item.username === data.username) {
            localStorage.setItem('loginInfo', JSON.stringify(item));
            commit('SET_USER_LOGIN_INFO', item);
            resolve(true);
            break;
          }
        }
      } else {
        resolve(false);
      }
    });
  };