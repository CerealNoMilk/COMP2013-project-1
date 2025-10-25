import { useState } from "react";
import ProductsContainer from "./ProductsContainer";

export default function GroceriesAppContainer({ data }) { 
    const [productQuantity, setProductQuantity] = useState(data.map((prod)=>{
        return {
            id: prod.id,
            quantityAmt: prod.quantityAmt,
            price: prod.price,
            currentPrice: prod.price,
        }
      

}));

//handler
const handleOnChangePrice = (productId, e) => {
    const newProductQuantity = productQuantity.map((prod) =>     {
        if(prod.id === productId){
            return {...prod, currentPrice: e.target.value};
}
        return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
}


    return (
        <div>
            <ProductsContainer
             data={data}
              productQuantity={productQuantity}
               setProductQuantity={setProductQuantity}
               handleOnChangePrice={handleOnChangePrice}
               />
        </div>
)


}