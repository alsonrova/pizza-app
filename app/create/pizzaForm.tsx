import { Ingrediant, Pizza,ingrediants } from "./pizza";

interface Children {
  pizza : Pizza,
  setter : Function,
  index : number,
  order : Pizza[]
}

function PizzaForm({pizza,setter,index,order}:Children) {
  function updateBase(newBase:"Tomato"|"Cream"){
    const updatedOrder = [...order]
    updatedOrder[index] = { ...updatedOrder[index], base: newBase } 
    setter(updatedOrder) 
  }

  function updateCheese(newCheese:Ingrediant){
    const updatedOrder = [...order]
    updatedOrder[index] = { ...updatedOrder[index], mainCheese: newCheese } 
    setter(updatedOrder) 
  }

  function updateTopping(topping: Ingrediant, isChecked: boolean) {
    const updatedOrder = [...order];
    const currentToppings = updatedOrder[index].toppings || [];

    if (isChecked) {
      // Ajouter la garniture si elle n'existe pas déjà
      updatedOrder[index] = {
        ...updatedOrder[index],
        toppings: [...currentToppings, topping],
      };
    } else {
      // Supprimer la garniture si elle est décochée
      updatedOrder[index] = {
        ...updatedOrder[index],
        toppings: currentToppings.filter((t) => t.name !== topping.name),
      };
    }

    setter(updatedOrder);
  }


  const cheeseIngrediants = Object.values(ingrediants).filter(
    (ingrediant) => ingrediant.type === "cheese"
  )

  console.log(pizza)

  return (
    <div className="w-80">
      <h3 className="text-xl uppercase">Pizza</h3>
      <form>
          <div>
            <label>
              Base : 
            </label>
            <div className="flex text-sm">
              Tomate:
              <div 
                className={`bg-red-500 w-5 h-5 ${pizza.base == "Tomato" && "border border-spacing-x-2 border-emerald-500"}`}
                onClick={()=>{updateBase("Tomato")}}
              ></div>
              Creme:
              <div 
                className={`bg-amber-200 w-5 h-5 ${pizza.base == "Cream" && "border border-spacing-x-2 border-emerald-500"}`}
                onClick={()=>{updateBase("Cream")}}
              ></div>  
            </div>
          </div>
          <div className="flex flex-wrap">
            <label>
              Cheese {pizza.mainCheese.name}:
            </label>
            <div className="w-full flex flex-wrap">
              {cheeseIngrediants.map((cheese) => (
                <label
                  key={cheese.name}
                  className={`border ${
                    pizza.mainCheese.name === cheese.name && "border border-spacing-x-2 bg-emerald-500"
                  }`}
                  onClick={() => {
                    updateCheese(cheese);
                  }}
                >
                  {cheese.name}
                </label>
             ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <h3>Garniture :</h3>
            {Object.values(ingrediants)
              .map((topping) => (
                <div key={topping.name}>
                  <label className="text-xs">{topping.name}</label>
                  <input
                    type="checkbox"
                    checked={pizza.toppings?.some((t) => t.name === topping.name) || false}
                    onChange={(e) => updateTopping(topping, e.target.checked)}
                  />
                </div>
              ))}
          </div>
      </form>
    </div>
  )
}
export default PizzaForm