import ProductCard from "./ProductCard";

export default function ProductsContainer({data, productQuantity, setProductQuantity, handleOnChangePrice}){
    return ( <div>
        {data.map((product) => ( <ProductCard 
        key={product.id} 
        {...product}
         productQuantity={productQuantity.find( (prod) => prod.id == product.id)}
          setProductQuantity={setProductQuantity}
          handleOnChangePrice={handleOnChangePrice}
          /> ))}
    </div>
    );
}


