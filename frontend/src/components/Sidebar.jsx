function Sidebar({ selectedCategories, onCategoryChange }) {
    const categories = ["All", "Beverage", "Topping", "Pizza"];

    const handleCheckboxChange = (category) => {
        if (selectedCategories.includes(category)) {
            onCategoryChange(selectedCategories.filter((c) => c !== category));
        } else {
            onCategoryChange([...selectedCategories, category]);
        }
    };

    return (
        <div className="w-1/4 p-4 border-r border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Filter by Category</h2>
            <form className="space-y-2">
                {categories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    return (
                        <label
                            key={category}
                            className={`flex items-center px-2 py-1 rounded cursor-pointer transition 
                                ${isSelected ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100 text-gray-700"}`}
                        >
                            <input
                                type="checkbox"
                                className="mr-2 accent-blue-600"
                                checked={isSelected}
                                onChange={() => handleCheckboxChange(category)}
                                style={{ marginRight:5 }}
                            />
                            {category}
                        </label>
                    );
                })}
            </form>
        </div>
    );
}

export default Sidebar;
