"use client"

import { useState,useEffect } from "react"
import { Pizza, ingrediants } from "./pizza"
import PizzaPreview from "./pizzaPreview"
import PizzaSelector from "./pizzaSelector"
import PizzaForm from "./pizzaForm"
import { IoIosAddCircle } from "react-icons/io";

function PizzaCreator() {
  const classicPizza : Pizza = {
    base: "Tomato",
    mainCheese : ingrediants.mozzarella,
    toppings: [ingrediants.chicken, ingrediants.ham],
    edge : false
  }

  const [order, setOrder] = useState<Pizza[]>(() => {
    const savedOrder = localStorage.getItem("order");
    return savedOrder ? JSON.parse(savedOrder) : [classicPizza];
  })

  const [selector, setSelector] = useState(0)

  function addPizza(){
    const newOrder = [...order, classicPizza]
    setOrder(newOrder)
    setSelector(order.length)
  }


  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <div className="w-full flex justify-evenly items-start max-h-screen">
        <div className="w-[200px] h-[200px]">
          <PizzaPreview pizza={order[selector]} />
        </div>
        <div className="flex-3 flex items-start">
          <PizzaForm pizza={order[selector]} setter={setOrder} index={selector} order={order}/>
          <PizzaSelector selector={selector} setSelector={setSelector} order={order}/>
          <button 
            onClick={addPizza}
            className="hover:text-lime-500"><IoIosAddCircle /></button>
        </div>
    </div>
  )
}
export default PizzaCreator