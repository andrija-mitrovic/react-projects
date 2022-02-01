const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            onClick={() => filterItems(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
