import { sfingi, calamari } from "../data/FoodItems";
import ProductCard from "../components/ProductCard";

const OrderPage = () => {
    return <div className="flex flex-col border items-center p-5">
        <h1 className="font-mono text-5xl">Appetizers</h1>
        <div className="flex flex-wrap w-280 gap-10 my-10">
            <ProductCard foodItem={sfingi}/>
            <ProductCard foodItem={calamari}/>
        </div>
    </div>
}

export default OrderPage;