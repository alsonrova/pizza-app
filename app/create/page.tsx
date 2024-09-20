import PizzaCreator from "./pizzaCreator"



function CreatePage() {
  return (
    <div className="w-full flex justify-evenly items-center flex-wrap">
      <h1 className="w-full text-center my-8 text-2xl">
          Create your pizza and create your dreams Pizza
      </h1>
      <PizzaCreator />
    </div>
  )
}
export default CreatePage