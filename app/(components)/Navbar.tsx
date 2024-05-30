import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between h-20">
            <div className="flex items-center">
                <a href="/"><Image src={'/jdtek-logo.png'} width={250} height={100} alt="JDTEK logo" /></a>
                <nav>
                    <ul className="flex font-semibold text-2xl space-x-5">
                        <li><a href="/">Home</a></li>
                        <li><a href="/calendar">Calendar</a></li>
                        <li><a href="/shop">Webshop</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center mr-10 space-x-8">
                <button><FontAwesomeIcon icon={faUser} className="h-8" /></button>
                <button><FontAwesomeIcon icon={faShoppingCart} className="h-8"/></button>
            </div>
        </header>
    )
}