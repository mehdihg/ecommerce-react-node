import { toast } from "react-toastify";

export const notify = (msg,type) => {
  if(type ==='success'){
    toast.success(msg, { className: "toast-form" });
  }else{
    toast.error(msg, { className: "toast-form" });
  }

};
