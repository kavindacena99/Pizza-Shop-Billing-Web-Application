import { useState } from "react";
import Navbar from "../components/Navbar";
import Itemgrid from "../components/Itemgrid";
import Sidebar from "../components/Sidebar";

function Store() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-3">
                    <Sidebar
                        selectedCategories={selectedCategories}
                        onCategoryChange={setSelectedCategories}
                    />
                </div>
                <div className="col-md-9">
                    <Itemgrid selectedCategories={selectedCategories} />
                </div>
            </div>
        </div>
    );
}

export default Store;