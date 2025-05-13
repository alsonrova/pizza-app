"use client"

import { useState,useEffect } from "react"
import { Pizza, ingrediants } from "./pizza"
import PizzaPreview from "./pizzaPreview"
import PizzaSelector from "./pizzaSelector"
import PizzaForm from "./pizzaForm"
import { IoIosAddCircle } from "react-icons/io";
import { TrashIcon } from "lucide-react"

function PizzaCreator() {
  const classicPizza : Pizza = {
    base: "Tomato",
    mainCheese : ingrediants.mozzarella,
    toppings: [ingrediants.chicken, ingrediants.ham],
    edge : false
  }

  const [isShowModal, setIsShowModal] = useState(false)
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

  function showModal(){
    setIsShowModal(true)
  }

  function hideModal(){
    setIsShowModal(false)
  }

  function removePizza() {
    if (order.length > 1) {
      const newOrder = order.filter((_, index) => index !== selector);
      setOrder(newOrder);
      setSelector((prev) => (prev > 0 ? prev - 1 : 0));
      setIsShowModal(false)
    }
  }


  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <div className="w-full flex justify-evenly items-start max-h-screen flex-wrap">
        <div className="w-[200px] h-[200px]">
          <PizzaPreview pizza={order[selector]} />
        </div>
        <div className="rounded-full px-1 pt-1 pb-2 bg-red-600"
        onClick={showModal}
        >
          <TrashIcon />
        </div>
        {
          isShowModal &&
          <div className="absolute w-full bg-black/20 h-screen top-0 flex items-center justify-center">
          <div className="w-80 h-48 bg-slate-200 rounded-md">
            <h2
            className="text-black"
            >Voulez vous vraiment supprimer cette Pizza de votre commande
            </h2>
              <button
              onClick={hideModal}>
                Annuler
              </button>
              <button
              onClick={removePizza}>
                Supprimer
              </button>
          </div>
          
        </div> 
        }
        
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