import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Itemgrid({ selectedCategories }) {
    const [items, setItems] = useState([]);
    const [selectedItems,setSelectedItems] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await API.get('/items');
                setItems(res.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();
    }, []);

    const handleQuantityChange = (itemId, qty) => {
        const quantity = parseInt(qty);
        const stringId = itemId.toString();

        setSelectedItems((prev) => {
            const updated = { ...prev };
            if (!isNaN(quantity) && quantity > 0) {
                updated[stringId] = quantity;
            } else {
                delete updated[stringId];
            }
            return updated;
        });
    };


    const handleCheckout = async () => {
        const checkoutItems = Object.entries(selectedItems).map(([itemId, quantity]) => {
        const fullItem = items.find(item => item.id.toString() === itemId);
        return {
            ...fullItem,
            quantity,
            total: fullItem.price * quantity,
        };
    });


        console.log("Checkout payload:", checkoutItems);

        try {
            alert("Checkout successful!");
            navigate("/checkout", { state: { selectedItems: checkoutItems } });
            setSelectedItems({});
        } catch (err) {
            console.error("Checkout failed", err);
        }
    };


    const filteredItems = selectedCategories.length === 0 || selectedCategories.includes("All")
        ? items
        : items.filter((item) => selectedCategories.includes(item.category));

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Available Items</h2>
            {Object.keys(selectedItems).length > 0 && (
                <div className="mt-6">
                    <button
                        onClick={handleCheckout}
                        className="px-4 py-2 bg-dark text-white rounded hover:bg-green-700"
                    >
                        Checkout Selected Items
                    </button>
                </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                    <div key={item.id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-500">Category: {item.category}</p>
                        <p>Price: Rs.{item.price}.00</p>
                        <div className="flex items-center gap-2 mt-2">
                            <label htmlFor={`qty-${item.id}`} className="text-sm">Quantity: </label>
                            <input
                            key={`input-${item.id}`}
                            type="number"
                            min="0"
                            value={selectedItems[item.id.toString()] ?? ""}
                            onChange={(e) => handleQuantityChange(item.id.toString(), e.target.value)}
                            className="w-16 border px-1 py-0.5 text-center"
                            style={{ marginLeft:5, width:70}}
                            />
                        </div>
                    </div>
                ))}
                {filteredItems.length === 0 && (
                    <p className="col-span-full text-red-500">No items found.</p>
                )}
            </div>
        </div>
    );
}

export default Itemgrid;