import CategoryFilter from "./CategoryFilter";
import ContentTypeFilter from "./ContentTypeFilter";
import Sort from "./Sort";

type TFilter = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedContentType: string | null;
  setSelectedContentType: (category: string | null) => void;
  selectedSortOption?: string | null; 
  setSelectedSortOption?: (option: string | null) => void;
};

const Filter: React.FC<TFilter> = ({
  setSelectedCategory,
  selectedCategory,
  setSelectedContentType,
  selectedContentType,
  selectedSortOption,
  setSelectedSortOption,
}) => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto scrollbar-hide h-full">
      {/* Category Filter */}
      <CategoryFilter
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {/* Content Filter */}
      <ContentTypeFilter
        selectedContentType={selectedContentType}
        setSelectedContentType={setSelectedContentType}
      />

      {/* Sort Filter */}
      <Sort
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />
    </div>
  );
};

export default Filter;
