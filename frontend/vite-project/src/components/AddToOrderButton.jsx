import cart from "../data/Cart";
export default function AddToOrderButton({ children, modalToggle, foodItem, quantity}){
    function addToOrder(){
        foodItem.quantity = quantity;
        cart.items.push(foodItem);
        modalToggle();
    }

    return  <button 
            className="bg-birthmark text-stone-200 text-3xl w-[75%] rounded-full"
            onClick={addToOrder}>
                {children}
            </button>
}