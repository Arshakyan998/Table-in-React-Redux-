import axios from "axios"

export const getApi=(key)=>{
       return axios.get(key).then(({data})=>data)



}