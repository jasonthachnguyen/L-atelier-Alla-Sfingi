import logo from "../assets/Logo.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
import xIcon from "../assets/alpha-x-box.svg";

import { Link} from "react-router";

export default function Footer(){
    return  <div className="pt-10 pb-5 px-12 font-workSans mb-10 bg-ash-black text-stone-200 w-[60%] mx-auto rounded-b-[100px] shadow-[0px_5px_15px] shadow-black">
                <img src={logo} className="w-30 h-30 mx-auto"/>
                <h1 className="text-center text-lg mt-5 mb-3">Stay updated with the latest.</h1>
                <div className="flex gap-10 text-lg mb-8 justify-center font-bold font-workSans mr-2">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        Instagram
                    </a>
                    <a href="https://www.youtube.com/watch?v=AxE4TltnvjI">
                        Youtube
                    </a>
                    <a href="https://www.youtube.com/watch?v=F0gsKF0dYrc">
                        X
                    </a>
                </div>
                    <footer className="text-center">2026 © Sfingi. All rights reserved.</footer>
            </div>
}