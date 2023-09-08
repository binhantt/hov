
import axios from 'axios'
import Authorization from '../utils/middleware/Authorization'

const myAxios = axios.create({
    baseURL: api.url
});

// nếu yêu cầu user gửi request mà bắt buộc gửi kèm token
const userAxios = axios.create({
    baseURL: api.url,
    headers: {
        Authorization: `Bearer ${Authorization.token}`
    }
})

const api = {
    url: 'https://lastmemory.xyz/api',
    isauth: false
}

export default {api, myAxios, userAxios}