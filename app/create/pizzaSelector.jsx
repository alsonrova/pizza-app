import PizzaPreview from "./pizzaPreview"

function PizzaSelector({selector, setSelector, order}) {
  return (
    <div className="w-[50px] flex flex-col gap-1 bg-slate-400/50">

        {order.map((pizza, index) => (
        <div
          key={index}
          className={`w-full h-[50px] ${index==selector && "bg-lime-500/30"} `}
          onClick={() => setSelector(index)}
        >
          <PizzaPreview pizza={pizza} /> 
        </div>
      ))}
    </div>
  )
}
export default PizzaSelector