import { FiSearch, FiFilter, FiArrowDown } from 'react-icons/fi';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange
}: SearchAndFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiFilter className="text-gray-400" />
          </div>
          <select
            className="appearance-none w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FiArrowDown className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;