import "./index.css";
import restaurantImg from "./assets/restaurant.jpg";
import chefImg from "./assets/chefs.jpg";
import chefPrepImg from "./assets/chef-prep-food.jpg";
import chefFlourImg from "./assets/chef-flour.jpg";
import chefFlameImg from "./assets/chef-flame.jpg";
import Header from "./components/Header";
import InnerBackground from "./components/InnerBackground";
import { ViewTransition } from "react";
import Border from "./components/Border";
import Footer from "./components/Footer";

const App = () => {
  return <ViewTransition enter="slide-up" exit="slide-down">
    <Header />
    <InnerBackground>
      <h1 className="text-stone-500 py-15 text-6xl font-workSans text-center">Discover the joy of fine cuisine.</h1>
      <img src={restaurantImg} alt="A picture of the L'atelier alla Sfingi resturant" className="object-cover h-100 w-full"/>
      <div className="bg-sub-body text-center text-2xl text-stone-700 w-[90%] m-auto rounded-4xl font-workSans flex flex-col gap-5 my-15 p-15">
        <p>Experience a new culinary world crafted by the legendary Chef Sfingi.  </p>
        <p>At L'atelier alla Sfingi, we strive to transcend beyond fine-dining and to deliver an unforgettable experience for all our guests.</p>
        <p>Utilizing only the finest ingredients, every dish prepared by our chefs has been meticulously tested for quality and excellence.</p>
        <p>We invite you to join us on this exciting journey towards a new way of experience cuisine and evolving the culinary industry.</p>
      </div>
      <Border />
      <div className="flex flex-wrap w-[90%] m-auto py-15 gap-15 justify-between">
        <img src={chefImg} className="w-[100%] h-100 object-cover rounded-xl shadow-[0px_0px_10px]"/>
        <img src={chefPrepImg} className="w-150 h-100 object-cover rounded-xl shadow-[0px_0px_10px]"/>
        <img src={chefFlourImg} className="w-110 h-100 object-cover rounded-xl shadow-[0px_0px_10px]"/>
        <img src={chefFlameImg} className="w-[100%] h-100 object-cover rounded-xl shadow-[0px_0px_10px]"/>
      </div>
      <Border />
      <div className="flex flex-col gap-5 w-[50%] mx-auto my-15 text-2xl font-workSans">
        <p>Meow meow meow meow....</p>
        <p>Meow meow meow meow meow. Meow meow meow meow meow meow. Meow meow meow meow meow meow meow!</p>
        <p className="self-end">- Chef Sfingi</p>
      </div>
    </InnerBackground>
    <Footer />
  </ViewTransition>;
}

export default App;