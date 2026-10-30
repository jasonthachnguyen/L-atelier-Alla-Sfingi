import Button from "./Button"

function ProductCard({ itemName, itemDesc, itemPrice, itemImage }){
    
    const descLines = itemDesc.split("\n");
    console.log(descLines);

    return <div className="flex rounded-[75px] px-4 py-4 bg-sfingi-light">
        <div className="flex flex-col px-2 py-5 ml-2 justify-center">
            <h1 className="text-stone-100 text-3xl font-bold mb-2">{itemName}</h1>
            {descLines.map(descLine => (
                <h2 className="text-stone-200 text-xl font-light">{descLine}</h2> 
            ))}
            <h2 className="text-stone-100 text-2xl mt-3">${itemPrice}</h2>
        </div>
        <div className="flex flex-col justify-center">
            <img className="p-5 rounded-full h-50 aspect-square -mb-15" src={itemImage} alt="A picture of Wonderful Sfingi"/>
            <Button className="">Order</Button>
        </div>
    </div>
}

export default ProductCard