
import CategoryFilter from "./CategoryFilter";
import ContentTypeFilter from "./ContentTypeFilter";

const Filter = () => {
    
  

 

  return (
    <div className="flex flex-col gap-5">
      

        {/* Category Filter */}
        <CategoryFilter/>

        {/* Content Filter */}
        <ContentTypeFilter/>



    </div>
  );
};

export default Filter;
