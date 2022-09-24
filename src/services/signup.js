import http from "./httpServices"


const signup=(data)=>{
  return  http.post('/user/register',data)
}
export default signup