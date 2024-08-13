import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex h-8 w-80 items-center space-x-2 rounded-md border-2 bg-gray-200 px-3">
      <Search className="text-gray-400" />
      <input
        type="text"
        placeholder="Search Products"
        className="flex-1 bg-transparent text-sm outline-none"
      />
    </div>
  );
};

export default SearchBar;
