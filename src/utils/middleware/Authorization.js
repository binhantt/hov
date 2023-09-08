
import Cookie from '../Cookie';

const token = Cookie.get('userToken');

const isLogin = () => {

}

const Logout = () => {

}

const Authorization = {
    token: token,
}

export default { Authorization };