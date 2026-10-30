import ProductCard from "../components/ProductCard";

function OrderPage(){
    return <div className="flex flex-col border items-center p-5">
        <h1 className="font-mono text-5xl">Appetizers</h1>
        <div className="border flex items-start w-50">
            <ProductCard itemName="Sfingi (6 Pcs)" 
                         itemDesc="Test" 
                         itemPrice="6.99"/>
            <ProductCard />
        </div>
    </div>
}

export default OrderPage;