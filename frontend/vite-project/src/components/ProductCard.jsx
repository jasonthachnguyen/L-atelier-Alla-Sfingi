import Button from "./Button"

function ProductCard({ itemName, itemDesc, itemPrice }){
    return <div className="flex rounded-xl bg-orange-200 ">
        <div className="flex flex-col">
            <h1>{itemName}</h1>
            <h3>{itemDesc}</h3>
            <h2>${itemPrice}</h2>
        </div>
        <img />
        <Button>Text</Button>
    </div>
}

export default ProductCard