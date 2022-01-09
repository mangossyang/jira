import { useAuth } from "context/auth-context";
import qs from "qs";
import { logout } from '../auth-provider'
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
    data?: object,
    token?: string
}
const http = async (url: string, { data, token, ...customConfig }: Config = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === 'GET') {
        url = `${url}?${qs.stringify(data || {})}`
    } else {
        config.body = JSON.stringify(data || {})
    }
    return fetch(`${apiUrl}/${url}`, config).then(async res => {

        if (res.status === 401) {
            await logout()
            window.location.reload()
            return Promise.reject('请重新登录')
        }
        const data = await res.json()
        console.log(data);

        if (res.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}

const useHttp = () => {
    const { user } = useAuth()
    return (...[url, config]: Parameters<typeof http>) => http(url, { ...config, token: user?.token })
}
export default useHttp
