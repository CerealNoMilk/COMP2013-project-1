

export default function ProductCard({ productQuantity, image, productName, setProductQuantity, price, quantity, handleOnChangePrice // added quantity prop
    
}) {
    const parsedPrice = parseFloat((price || "").replace('$', '')) || 0; //need this to eliminate $ sign in prices prop
    
    // console.log(testProduct);
    // const [productQuantity, setProductQuantity] = useState({
    //     quantityAmt, 
    //     price: parseFloat(price.replace('$', '')), //parse the $ because this was not a valid number

    // });
    
    //Building our output
    return ( <div className="ProductCard">
        {/* image */}
        <img src={image} alt="" height="100px"/>
        {/*product name */}
        <h3>{productName}</h3>
        {/*product price */}
        <h4>{price}</h4>
        {/* product quantity */}
        <p>Product Quantity: {quantity}</p>
        {/*Qty amount */}
        <p>How many you have: {productQuantity.quantityAmt}</p>
        <select value={productQuantity.price}
        onChange={(e) => {
            handleOnChangePrice(productQuantity.id, e);
        }}>
            {productQuantity.price((price, index) => (
                <option key={index} value={parsedPrice}>
                    {parsedPrice.toFixed(2)}
                </option>
            ))}
        </select>
        {/*Total Price  --Uses parsedPrice--*/}
        <p>
            Total Price: $  {(productQuantity.quantityAmt * parsedPrice).toFixed(2)}
        </p>
       {/* button to add product to cart */}
       <button onClick={() => setProductQuantity((prevData) => {
        return {...prevData, quantityAmt: prevData.quantityAmt + 1};
       })}>+</button>

       {/* Subtract an item from total added count */}
       <button onClick={() => setProductQuantity((prevData) =>{
        return {...prevData, quantityAmt: prevData.quantityAmt > 0 ? prevData.quantityAmt - 1 :0

        };
       }
    )}>

       -</button>
   
    </div>
        );
}