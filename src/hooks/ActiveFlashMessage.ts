import { toast } from "react-toastify";



export const ActiveFlashMessage = (message:string,status:number)=>{


    if(status >= 200 && status < 300){
        toast.success(message)
    }else if(status >= 300 && status < 600){
        toast.error(message)
    }


}


