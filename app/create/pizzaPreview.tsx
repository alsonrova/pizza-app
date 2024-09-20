import { Pizza } from "./pizza"

interface Children {
  pizza: Pizza
}

function PizzaPreview({pizza}:Children) {
  return (
    <div className="rounded-full bg-amber-200 w-full h-full flex justify-center items-center relative">
      <div className={`rounded-full ${pizza.base == "Tomato"? "bg-red-500" : "bg-amber-100"}  w-[96%] h-[96%]`}>
        
      </div>
      {
        pizza.toppings.map((item,index)=>{
          return <div className="absolute w-full h-full">
                  <img src={`/assets/${item.image}`} className={`contain w-full h-full z-1`}/>
                </div>
        })
      }
      <div className="absolute w-full h-full">
        {
         pizza.mainCheese.name === "Mozzarella" ? 
            <img src={`/assets/mainMozzarella.svg`} className={`contain w-full h-full z-50 opacity-85`}/>
            :  
            <img src={`/assets/${pizza.mainCheese.image}`} className={`contain w-full h-full z-50 opacity-85`}/>
  
        }
      </div>
    </div>
  )
}
export default PizzaPreview