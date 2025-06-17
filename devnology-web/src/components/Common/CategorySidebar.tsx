import { FiChevronRight } from 'react-icons/fi';

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySidebar = ({
  categories,
  selectedCategory,
  onSelectCategory
}: CategorySidebarProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 sticky top-4">
      <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCategory('')}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${!selectedCategory ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`}
          >
            <span>All categories</span>
            {!selectedCategory && <FiChevronRight className="text-indigo-500" />}
          </button>
        </li>
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${selectedCategory === category ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`}
            >
              <span>{category}</span>
              {selectedCategory === category && <FiChevronRight className="text-indigo-500" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;