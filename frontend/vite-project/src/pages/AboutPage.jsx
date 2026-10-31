import Header from "../components/Header";
import InnerBackground from "../components/InnerBackground";
import sfingiPortrait from "../assets/sfingi-portrait.webp";
import { ViewTransition } from "react";
import Footer from "../components/Footer";

export default function AboutPage(){
    return <ViewTransition enter="slide-up" exit="slide-down">
            <Header />
            <InnerBackground>
                <h1 className="text-center my-5 text-4xl text-stone-900 font-workSans font-bold">Our Story</h1>
                <div className="flex m-15">
                    <img src={sfingiPortrait} className="rounded-3xl h-200 w-150 object-cover"/>
                    <div className="flex flex-col gap-5 bg-ash-black mx-15 rounded-3xl text-stone-200 font-workSans px-8 py-10 text-xl">
                        <p>Born within the bustling streets of Italy, Chef Sfingi has always had a deep appreciation for the fine cuisine of Italy.</p>
                        <p>It was this very fascination that led him to undergo the mentorship of reowned chef, Gordan Ramsay.</p>
                        <p>Under his tutelage, Chef Sfingi mastered the fundamentals of cooking within several months until he decided that even Ramsay's guidance was not enough.</p>
                        <p>With a deep yearning for self-improvement, Chef Sfingi traveled to the Himalayan mountains where he hone his skills until they were nothing but perfect.</p>
                        <p>It was during this time in the Himalayans where Chef Sfingi felt a nostalgia for his childhood home and returned there shortly after his training.</p>
                        <p>Upon arriving, Chef Sfingi put his skills to use and opened his signature restaurant, L'atelier alla Sfingi, to both commercial success and critical acclaim.</p>
                    </div>
                </div>
            </InnerBackground>
            <Footer />
        </ViewTransition>
};
