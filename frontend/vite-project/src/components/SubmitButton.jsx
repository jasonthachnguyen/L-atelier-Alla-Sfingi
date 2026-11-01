import cart from "../data/Cart"
export default function SubmitButton(){
    
    async function submitOrder(){
        console.log(JSON.stringify(cart));
        await fetch("http://localhost:8000/submitOrder", {
            method: "POST",
            body: JSON.stringify(cart),
            headers: { "Content-Type": "application/json"},
        })
        .then((res) => console.log(`promise is ${res.json()}`))
        .catch((err) => console.log(err));
    }

    return <button onClick={submitOrder} className="my-5 py-4 px-10 block mx-auto bg-birthmark text-stone-200 text-3xl font-workSans rounded-full hover:bg-birthmark-light">
        Submit Order
    </button>
}