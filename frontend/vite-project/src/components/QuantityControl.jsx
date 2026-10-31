export default function QuantityControl({ increaseQuantity, decreaseQuantity, quantity }){
    return <div className="flex p-5 gap-5 items-center">
        <button onClick={decreaseQuantity} className="bg-birthmark text-stone-200 text-5xl py-1 px-6 mask-radial rounded-[100px]">-</button>
        <div className="border px-5 py-3 text-2xl rounded-xl">{quantity}</div>
        <button onClick={increaseQuantity} className="bg-birthmark text-stone-200 text-5xl py-1 px-5 mask-radial rounded-[100px]">+</button>
    </div>
}