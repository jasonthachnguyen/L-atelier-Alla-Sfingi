import { sfingi, calamari } from "../data/FoodItems";
import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import InnerBackground from "../components/InnerBackground";

const OrderPage = () => {
    return (
        <>
            <Header />
            <InnerBackground>
                <div className="flex flex-col items-center p-5 font-workSans">
                    <h1 className="font-bold text-5xl text-stone-500 my-6">Appetizers</h1>
                    <div className="flex flex-wrap w-280 gap-10 my-10">
                        <ProductCard foodItem={sfingi}/>
                        <ProductCard foodItem={calamari}/>
                    </div>
                </div>
            </InnerBackground>
        </>
    )
}

export default OrderPage;