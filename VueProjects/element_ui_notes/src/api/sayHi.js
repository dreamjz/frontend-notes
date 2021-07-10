import request from "@/utils/request"

export function sayHi() {
    return request({
        url: '/sayhi',
        methods: 'get'
    })
}