import axios from 'axios'
import { map } from 'lodash'

export const getUser = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>{
        return map(res.data, (item)=>{
            return item.email
        })
    }).catch(error =>{
        return error
    })
}
export default { getUser }