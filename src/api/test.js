import store from '../store'
import request from "@/api/request";


export function test(){
    return request({
        url: '/generateatom',
        method: 'post'
    })
}
