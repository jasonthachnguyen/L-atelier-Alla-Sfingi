import cart from "../data/Cart"
export default function SubmitButton(){
    
    function submitOrder(){
        console.log(cart);
    }

    return <button onClick={submitOrder} className="my-5 py-4 px-10 block mx-auto bg-birthmark text-stone-200 text-3xl font-workSans rounded-full hover:bg-birthmark-light">
        Submit Order
    </button>
}