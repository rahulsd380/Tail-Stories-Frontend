
import CategoryFilter from "./CategoryFilter";
import ContentTypeFilter from "./ContentTypeFilter";

const Filter = () => {
    
  

 

  return (
    <div className="flex flex-col gap-5 overflow-y-auto scrollbar-hide h-full">
      

        {/* Category Filter */}
        <CategoryFilter/>

        {/* Content Filter */}
        <ContentTypeFilter/>



    </div>
  );
};

export default Filter;
