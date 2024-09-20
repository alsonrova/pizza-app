export interface Ingrediant{
    name: string,
    price: number,
    type: "cheese" | "meat" | "vegetables" | "sauce" | "seasonings" | "others",
    image: string
  }
  
export interface Pizza{
      base: "Tomato" | "Cream",
      mainCheese : Ingrediant,
      toppings: Ingrediant[],
      edge : boolean
  }


export type Cheese = Extract<Ingrediant, {type: "cheese"}>

export const ingrediants = {
    mozzarella : { name: 'Mozzarella', price: 1.5 ,type:"cheese",image:"mozzarella.svg"} as Ingrediant,
    parmigianno: { name: 'Parmigianno', price: 1.6 ,type:"cheese",image:"parmigianno.svg"} as Ingrediant,
    gorgonzola: { name: 'Gorgonzola', price: 1.6 ,type:"cheese",image:"gorgonzola.svg"} as Ingrediant,
    cheddar: { name: 'Cheddar', price: 1.2,type:"cheese" ,image:"cheddar.svg"} as Ingrediant,
    ricota: { name: 'Ricotta', price: 1.6,type:"cheese" ,image:"ricota.svg"} as Ingrediant,
    chicken: { name: 'Poulet', price: 1.1 ,type:"meat" ,image:"chicken.svg"}  as Ingrediant,
    ham: { name: 'Jambon', price: 1.2 ,type:"meat" ,image:"ham.svg"} as Ingrediant,
    americanBacon : { name: 'Bacon Americain', price: 1.2 ,type:"meat" ,image:"bacon.svg"} as Ingrediant,
    bolognaise : { name: 'Bolognaise', price: 1.3 ,type:"meat" ,image:"mozzarella.svg"} as Ingrediant,
    chorizo : { name: 'Chorizo', price: 1.3 ,type:"meat" ,image:"chorizo.svg"} as Ingrediant,
    pancetta : { name: 'Pancetta', price: 2.0 ,type:"meat" ,image:"mozzarella.svg"} as Ingrediant,
    mushroom : { name: 'Champignon de Paris', price: 1.0 ,type:"vegetables",image:"mozzarella.svg"} as Ingrediant,
    basilicLeaf : { name: 'Feuille de Basilic', price: 1.0 ,type:"vegetables" ,image:"mozzarella.svg"} as Ingrediant,
    pepper : { name: 'Poivron', price: 1.0 ,type:"vegetables" ,image:"mozzarella.svg"} as Ingrediant,
    tomato : { name: 'Tomate', price: 1.0 ,type:"vegetables" ,image:"mozzarella.svg"} as Ingrediant,
    olive : { name: 'Olive', price: 1.0 ,type:"vegetables" ,image:"olive.svg"} as Ingrediant,
    pesto : { name: 'Sauce pesto', price: 1.0 ,type:"sauce" ,image:"mozzarella.svg"} as Ingrediant,
    oliveOil : { name: 'Huile d\'olive', price: 1.0 ,type:"sauce",image:"mozzarella.svg"} as Ingrediant,
    origan : { name: 'Origan', price: 0.5 ,type:"seasonings",image:"mozzarella.svg"} as Ingrediant,
    basilic : { name: 'Basilic', price: 0.5 ,type:"seasonings",image:"mozzarella.svg"} as Ingrediant,
    egg : { name: 'Oeuf', price: 0.5 ,type:"others",image:"egg.svg"} as Ingrediant,

}