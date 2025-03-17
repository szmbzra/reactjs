import React from 'react';
import "./App.css";



export default function App() {
  const name = ["sam", "Bajracarya", "honda"];
  //array of objects
  const products = [
{id:1, name: "product 1", price: 10},
{id:2, name: "product 2", price: 15},
{id:3, name: "product 3", price: 25},
{id:4, name: "product 4", price: 30}
  ];
  // eg return map function
  const fruits = [
"apple", "oran","aasd","sgdfgfd"

  ];
  const fruitsitems = fruits.map((fruit,index)=><li key={index}>{fruit}</li>);
  return (
<>
<div className="App">
  <h1>Array with mao</h1>
  <ul>
    {name.map((name,index)=><li key={index}>{name}</li>)}
  </ul>
  {/* eg 2 */}
  <ul>
    {products.map((product)=>(
      <li key={product.id}>{product.name} - {product.price}</li>
    ))}
  </ul>
  {/* eg 3 */}
  <ul>{fruitsitems}</ul>
</div>
</>
  )
}
