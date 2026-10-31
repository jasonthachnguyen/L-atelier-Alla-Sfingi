import { useState } from "react";
import Logo from "../assets/Logo.svg"
import { NavLink } from "react-router";

export default function Header(){


    return <div className="flex font-playwrite text-stone-200 px-[20%] py-10 justify-between content-center">
       <div className="flex gap-5 align-middle place-content-center">
            <img src={Logo} className="aspect-square h-10"/>
            <h1 className="text-3xl">L'atelier alla Sfingi</h1>
        </div> 
        <nav className="flex gap-7 text-2xl">
            <NavLink to="/home"
                     className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/about"
                     className={({ isActive }) => (isActive ? 'active' : '')}>Our Story</NavLink>
            <NavLink to="/menu"
                     className={({ isActive }) => (isActive ? 'active' : '')}>Menu</NavLink>
            <NavLink to="/order"
                     className={({ isActive }) => (isActive ? 'active' : '')}>Order</NavLink>
        </nav>
    </div>
}