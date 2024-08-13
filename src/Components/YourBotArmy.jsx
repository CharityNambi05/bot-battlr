import { useState } from "react"
import BotCard from "./BotCard"

function YourBotArmy({Bot,setArmy,army}) {
    const [canBeRemoved,setCanBeRemoved]=useState(true)
  return (
     <div>
        <h1>Your Bot Army</h1>
      {
    Bot.map((item)=>{
      return(<BotCard
      Data={item}
      key={item.id}
    canBeRemoved={canBeRemoved}
      army={army}/>)
    })
    
      }
    </div>
  )
}

export default YourBotArmy