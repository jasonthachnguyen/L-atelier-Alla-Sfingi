import cart from "../data/Cart";
export default function AddToOrderButton({ children, modalToggle, foodItem, quantity}){
        

    function addToOrder(){
        const cartItem = {foodItem, quantity};
        cart.push(cartItem);
        console.log(cart);
        modalToggle();
    }

    return  <button 
            className="bg-birthmark text-stone-200 text-3xl w-[75%] rounded-full"
            onClick={addToOrder}>
                {children}
            </button>
}