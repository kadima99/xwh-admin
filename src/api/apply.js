import axios from 'axios'
import { BASE_URL } from '.';


async function add(params){
    return axios({
        url:`${BASE_URL}/apply`,
        method:'post',
        data:params,
    })
}
async function update(params){
    return axios({
        url:`${BASE_URL}/apply`,
        method:'put',
        data:params,
    })
}

async function getAll(){
    return axios({
        url:`${BASE_URL}/apply`,
        method:'get',
    })
}

async function countByDept(params){
    return axios({
        url:`${BASE_URL}/apply/countByDept`,
        method:'get',
        data:params,
    })
}

async function countByStatus(params){
    return axios({
        url:`${BASE_URL}/apply/countByStatus`,
        method:'get',
        data:params,
    })
}


export default {
    add,
    update,
    getAll,
    countByDept,
    countByStatus
}