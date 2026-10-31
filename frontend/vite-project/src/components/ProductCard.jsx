import AddToOrderButton from "./AddToOrderButton";
import QuantityControl from "./QuantityControl";
import OrderModal from "./OrderModal";
import { useState, useCallback } from "react";

const ProductCard = ({ foodItem }) => {
    
    const [modal, setModal] = useState(false);
    const [quantity, setQuantity] = useState(0); 

    const handleToggle = useCallback(() => setModal(prevModal => !prevModal), []);
    const handleQuantityIncrease = useCallback(() => setQuantity(quantity => quantity + 1), []);
    const handleQuantityDecrease = useCallback(() => setQuantity(quantity => Math.max(0, quantity - 1)), []);
    const descLines = foodItem.description.split("\n");

    // Food item card background
    return <div className="flex rounded-[75px] px-4 py-4 bg-sfingi-light">
        {/*Container for product information on the left*/}
        <div className="flex flex-col px-2 py-5 ml-2 w-75 justify-center">
            <h1 className="text-stone-100 text-3xl font-bold mb-2">{foodItem.title}</h1>
            {descLines.map(descLine => (
                <h2 className="text-stone-200 text-xl font-light">{descLine}</h2> 
            ))}
            <h2 className="text-stone-100 text-2xl mt-3">${foodItem.price}</h2>
        </div>
        {/*Container for product image and order button on the right*/}
        <div className="flex flex-col justify-center">
            <img className="p-5 rounded-full h-50 aspect-square -mb-15" src={foodItem.image} alt="A picture of Wonderful Sfingi"/>
            {/*Contains the modal that opens up when the order button is pressed*/}
            <OrderModal text="Order" modalState={modal} modalToggle={handleToggle}>
                <h1 className="text-6xl text-stone-700">{foodItem.title}</h1>
                <img 
                className="w-full h-140 object-cover object-[50%_30%] rounded-4xl border mt-10 mb-5 shadow-2xl" 
                src={foodItem.image} 
                alt="A picture of the food item"/>
                {/*Allows user to set quantity and the button adds the quantity to the cart*/}
                <div className="flex">
                    <QuantityControl decreaseQuantity={handleQuantityDecrease} increaseQuantity={handleQuantityIncrease} quantity={quantity}/>
                    <AddToOrderButton modalToggle={handleToggle} foodItem={foodItem} quantity={quantity}>Add To Order</AddToOrderButton>
                </div>
            </OrderModal>
        </div>
    </div>
}

export default ProductCard