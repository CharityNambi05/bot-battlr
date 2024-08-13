import BotCard from "./BotCard"

function BotCollection({Bot,setArmy,army}) {
  return (
    <div>
      {
    Bot.map((item)=>{
      return(<BotCard
      Data={item}
      key={item.id}
      setArmy={setArmy}
      army={army}/>)
    })
    
      }
    </div>
  )
}

export default BotCollection