export default function CategorySelector({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="overflow-x-auto px-4 py-5 scrollbar-hide flex   justify-around align-middle ">
      <div className="flex space-x-4 snap-x snap-mandatory ">
        {categories.map((cat, i) => {
          const isSelected = selectedCategory === cat.name;

          return (
            <div
              key={i}
              onClick={() => setSelectedCategory(cat.name)}
              className={`snap-start min-w-[100px] max-w-[110px]   flex-shrink-0 rounded-xl  text-center cursor-pointer transition-all duration-200 ease-in-out 
              p-4 group
              ${isSelected ? "border border-accent bg-accent/5 shadow-md" : "shadow  shadow-accent/20 bg-white hover:shadow-sm"}`}
            >
              <div className="relative w-12 h-12 mx-auto mb-3">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain rounded-full bg-muted p-1 shadow-sm"
                />
                {isSelected && (
                  <div className="absolute -top-1 -right-1 bg-accent text-white text-[10px] rounded-full px-1 py-0.5 shadow">
                    ✓
                  </div>
                )}
              </div>

              <div
                className={`text-xs font-medium leading-snug transition-colors ${
                  isSelected ? "text-accent" : "text-primary-text group-hover:text-accent"
                } line-clamp-2`}
              >
                {cat.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
