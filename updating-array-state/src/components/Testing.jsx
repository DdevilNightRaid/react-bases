import { useState } from "react";
const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
  }, {
    id: 1,
    name: 'Cheese',
    count: 5,
  }, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  }];
const Testing = () => {
    const [products, setProducts] = useState(initialProducts);
    const [nItems, setNItems] = useState('');
    function handleClick(productId){
        const newList = products.map( product => {
            if(product.id === productId) {
                return {
                    ...product,
                    count: product.count + Number(nItems)
                }
            } else{
                return product;
            }
        });
        setProducts(newList)
    }
  return (
    <div>
        <h1>List Of Items</h1>
        {
            products.map(product => (
                <p key={product.id}>
                    {product.name}
                    {": [ "}
                    {product.count}
                    {" ]"}
                    {" "}
                    <input 
                        type="number"
                        value={nItems}
                        onChange={(e)=> setNItems(e.target.value)}
                     />
                    <button onClick={() => {handleClick(product.id)}}>
                        Add
                    </button>
                </p>
            ))
        }
    </div>
  )
}

export default Testing