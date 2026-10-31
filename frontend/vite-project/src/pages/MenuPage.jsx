import { ViewTransition } from "react";
import Header from "../components/Header";
import InnerBackground from "../components/InnerBackground";

export default function MenuPage(){
    return <ViewTransition enter="slide-up" exit="slide-down">
        <Header />
        <InnerBackground>

        </InnerBackground>
    </ViewTransition>
}