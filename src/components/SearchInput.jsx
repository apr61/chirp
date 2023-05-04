import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="group flex items-center gap-2 py-2 px-4 bg-gray-200 w-full rounded-full focus-within:outline focus-within:outline-1 focus-within:outline-gray-500">
      <span className="text-gray-500">
        <BsSearch />
      </span>
      <input
        type="search"
        placeholder="Search Chirp"
        className="w-full bg-gray-200 focus:outline-none placeholder:text-gray-500 caret-gray-500 text-gray-600"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
export default SearchInput;
