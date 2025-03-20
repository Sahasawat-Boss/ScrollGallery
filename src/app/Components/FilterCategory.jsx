import { FiXCircle } from "react-icons/fi"; // ✅ Import React Icon

const FilterCategory = ({ selectedTag, clearFilter }) => {
    return (
        <div className="mb-6 flex flex-col justify-center items-center gap-2 ">
            {/* Tag Display */}
            <div className="gradient-bg px-4 py-2 rounded-md shadow-md animate-fade-in-down">
                <div className="drop-shadow-xl">
                    Tag: #{selectedTag ? selectedTag : "All"}
                </div>
            </div>

            {/* Clear Button (Only Show If Tag is Selected) */}
            {selectedTag && (
                <button
                    onClick={clearFilter}
                    className="text-red-500 hover:text-red-700 transition text-2xl hover:cursor-pointer hover:scale-110 animate-fade-in-down"
                >
                    <FiXCircle /> {/* ✅ Close Icon */}
                </button>
            )}
        </div>
    );
};

export default FilterCategory;
