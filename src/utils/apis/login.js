import request from './../request'

const apiUrl = "http://localhost:8081"

export function login(data) {
  return request({
    url: apiUrl+ "/work/user/loginCheck",
    method: "post",
    data
  })
}
export function test(data) {
  return request({
    url: apiUrl + "/work/user/query/all",
    method: "post",
    data
  })
}