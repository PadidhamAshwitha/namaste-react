import { useDispatch } from "react-redux";
import { removeItem } from "../utilities/cartSlice";
import { RES_IMG_URL } from "../utilities/constants";

const CartItemsList = ({items}) =>{

    const output = items.map((item) => 
        item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100
        )
    
    const calculateTotalCost = (output) => {
        const total = output.reduce((acc, curr) => {
            acc = acc + curr;
            return acc;
        }, 0);
        return total;
    }

    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }
    return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 flex hover:shadow-xl">
                <div className="w-10/12">
                    <div className="font-bold pr-4 py-2 ">
                        <span >{item.card.info.name}</span>
                        <span> ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                    </div>
                <p className="text-sm">{item.card.info.description}</p>
                </div>

                <div className="w-2/12 my-4 ">
                    <div className="px-2 absolute align-top">
                    <button className="px-2 py-2 text-green-900 bg-white rounded-md font-bold" onClick={()=>handleRemoveItem(item)}> REMOVE | - </button>
                    </div>
                    <img src = { RES_IMG_URL + item.card.info.imageId} className="rounded-md shadow-lg shadow-black"/>
                </div>
            </div>   
        ))}
            <div className="p-4 m-2 font-bold text-end">
                <h1>Total - Cost = {calculateTotalCost(output)}</h1>
            </div>
    </div>
    )
};

export default CartItemsList;