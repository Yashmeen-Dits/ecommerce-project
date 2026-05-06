function Categories() {
  const categories = [
    {
      title: "Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    {
      title: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Home Decor",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      title: "Beauty",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },
    {
      title: "Footwear",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      title: "Groceries",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e",
    },
    {
      title: "Sports",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
    {
      title: "Furniture",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      title: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },
  ];

  return (
    <section id="categories" className="categories">
      <h2>Shop By Category</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img
              src={cat.image}
              alt={cat.title}
            />
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;