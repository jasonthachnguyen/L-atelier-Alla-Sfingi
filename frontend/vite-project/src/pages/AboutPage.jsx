import Header from "../components/Header";
import InnerBackground from "../components/InnerBackground";
import { ViewTransition } from "react";

export default function AboutPage(){
    return <ViewTransition enter="slide-up" exit="slide-down">
            <Header />
            <InnerBackground>
                AboutPage
            </InnerBackground>
        </ViewTransition>
};
