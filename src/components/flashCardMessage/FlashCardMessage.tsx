import Styles from "./FlashCardMessage.module.css"
import { useEffect, useState } from "react"
const FlashCardMessage = ({status,message}:{status:number,message:string})=>{
    const [sucessMessage,setSucessMessage] = useState<boolean>(true)
    const [display,setDisplay] = useState<boolean>(true)
useEffect(()=>{
if(status < 300 && status >= 200){
    setSucessMessage(true)
}else if( status > 400 && status <= 500){
    setSucessMessage(false)
}
},[])

return(

    display && 
    <div className={sucessMessage ? Styles.SucessButton : Styles.ButtonError}>
            <span onClick={()=>setDisplay(false)}>x</span>
            {message}
    </div>



)





}

export default FlashCardMessage