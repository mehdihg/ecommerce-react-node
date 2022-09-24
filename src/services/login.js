import http from "./httpServices"


const loginuser=(data)=>{
  return http.post('/user/login',data)
}
export default loginuser