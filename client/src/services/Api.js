import { axios } from "@bundled-es-modules/axios"

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081'
    })
}