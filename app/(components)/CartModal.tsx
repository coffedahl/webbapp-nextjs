import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProductRow() {
    return (
        <div className="flex items-center space-x-3 bg-slate-100 p-3 rounded-lg text-black shadow-md">
            <img src="/test.png" alt="Product image" />
            <div>
                <h1 className="text-lg font-bold">Test Product</h1>
                <p className="text-sm">299,90</p>
            </div>
            <div className="flex items-center flex-col">
                <button className="text-md"><FontAwesomeIcon icon={faPlus} /></button>
                <p className="text-lg font-bold">1</p>
                <button className="text-md"><FontAwesomeIcon icon={faMinus} /></button>
            </div>
            <h1 className="font-bold">299,90</h1>
            <button className="bg-red-800 text-white rounded-lg p-2 aspect-square flex"><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    )
}

export default function CartModal() {
    return (
        <div className="absolute right-10 bg-white p-5 space-y-3 shadow-lg rounded-md">
            <div className="mb-6">
                <ProductRow />
            </div>
            <div className="flex w-full space-x-3">
                <button className="w-1/2 bg-black rounded-lg">Clear</button>
                <button className="w-1/2 bg-black rounded-lg">Checkout</button>
            </div>
        </div>
    )
}