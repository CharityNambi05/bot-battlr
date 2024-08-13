import { useState } from "react"

function BotCard({Data,setArmy,army,canBeRemoved}) {
    const [isclicked,setIsClicked]=useState(false)
        function AddToArmy(newdata){
            setArmy((prevdata)=>[...prevdata,newdata])
            setIsClicked(true)
        }  
  return (
    <div>
        <img src={Data.avatar_url}/>
        <h2>{Data.name}</h2> 
       { canBeRemoved?<button>remove</button>:isclicked?"": <button onClick={()=>AddToArmy(Data) }>ENLIST</button>}
    </div>
  )
}

export default BotCard