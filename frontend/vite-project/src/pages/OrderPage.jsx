import { 
    sfingi, 
    calamari, 
    fries, 
    gyoza,
    meatball,
    nachos,
    bread,
    brushcetta,
    sushi,
    pasta,
    bibimbap,
    sandwich,
    burger,
    pizza,
    steak,
    salmon,
    tiramisu,
    shortcake,
    redVelvet,
    sundae,
    pop,
    milkis,
    soju,} from "../data/FoodItems";
import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import InnerBackground from "../components/InnerBackground";
import { ViewTransition } from "react";
import Footer from "../components/Footer";

const OrderPage = () => {
    return (
        <ViewTransition enter="slide-up" exit="slide-down">
            <Header />
            <InnerBackground>
                <div className="flex flex-col items-center p-5 font-workSans">
                    <h1 className="font-bold text-5xl text-stone-500 my-6">Appetizers</h1>
                    <div className="flex flex-wrap w-280 gap-10 my-10">
                        <ProductCard foodItem={sfingi}/>
                        <ProductCard foodItem={calamari}/>
                        <ProductCard foodItem={fries}/>
                        <ProductCard foodItem={gyoza}/>
                        <ProductCard foodItem={meatball}/>
                        <ProductCard foodItem={nachos}/>
                        <ProductCard foodItem={bread}/>
                        <ProductCard foodItem={brushcetta}/>
                    </div>
                    <h1 className="font-bold text-5xl text-stone-500 my-6">Entrees</h1>
                    <div className="flex flex-wrap w-280 gap-10 my-10">
                        <ProductCard foodItem={sushi}/>
                        <ProductCard foodItem={pasta}/>
                        <ProductCard foodItem={bibimbap}/>
                        <ProductCard foodItem={sandwich}/>
                        <ProductCard foodItem={burger}/>
                        <ProductCard foodItem={pizza}/>
                        <ProductCard foodItem={steak}/>
                        <ProductCard foodItem={salmon}/>
                    </div>
                    <h1 className="font-bold text-5xl text-stone-500 my-6">Desserts</h1>
                    <div className="flex flex-wrap w-280 gap-10 my-10">
                        <ProductCard foodItem={tiramisu}/>
                        <ProductCard foodItem={shortcake}/>
                        <ProductCard foodItem={redVelvet}/>
                        <ProductCard foodItem={sundae}/>
                    </div>
                    <h1 className="font-bold text-5xl text-stone-500 my-6">Drinks</h1>
                    <div className="flex flex-wrap w-280 gap-10 my-10">
                        <ProductCard foodItem={pop}/>
                        <ProductCard foodItem={milkis}/>
                        <ProductCard foodItem={soju}/>
                    </div>
                </div>
            </InnerBackground>
            <Footer />
        </ViewTransition>
    )
}

export default OrderPage;