import { sfingi } from "../data/FoodItems";
import ProductCard from "../components/ProductCard";

const OrderPage = () => {
    return <div className="flex flex-col border items-center p-5">
        <h1 className="font-mono text-5xl">Appetizers</h1>
        <div className="flex flex-wrap w-240 gap-10 my-10 items-start border">
            <ProductCard itemName={sfingi.title}
                         itemDesc={sfingi.description}
                         itemPrice={sfingi.price}
                         itemImage={sfingi.image}
                         />
            <ProductCard itemName={sfingi.title}
                         itemDesc={sfingi.description}
                         itemPrice={sfingi.price}
                         itemImage={sfingi.image}
                         />
            <ProductCard itemName={sfingi.title}
                         itemDesc={sfingi.description}
                         itemPrice={sfingi.price}
                         itemImage={sfingi.image}
                         />
            <ProductCard itemName={sfingi.title}
                         itemDesc={sfingi.description}
                         itemPrice={sfingi.price}
                         itemImage={sfingi.image}
                         />
        </div>
    </div>
}

export default OrderPage;