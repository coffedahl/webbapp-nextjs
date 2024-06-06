'use client'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function CartButton({ children }: { children: ReactNode }) {
    // State for showing cart modal
    const [showModal, setShowModal] = useState<boolean>(false)
    /**
     * Function for handling clicking of cart button
     */
    function handleClick() {
        setShowModal(!showModal)
    }

    //Click outside of modal code from  https://dev.to/mirfayekhossain/how-to-detect-clicks-outside-of-an-element-in-nextjs-or-react-301p
    const ref = useRef(null)

    useEffect(() => {
        // if modal is not showing stop the code
        if (!showModal) return;
        // Code to run when a click is detected
        const handleOutSideClick = (event: MouseEvent) => {
            // If element is not the refrence element
            if (!ref.current?.contains(event.target)) {
                // Hide modal
                setShowModal(false)
            }
        };
        // Listnen for mouse click
        window.addEventListener("mousedown", handleOutSideClick);

        //tha hell??
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref, showModal])

    return (
        <div>
            <button onClick={handleClick}><FontAwesomeIcon icon={faShoppingCart} className="h-8" /></button>
            {showModal ? <div ref={ref}>{children}</div> : null}
        </div>
    )
}