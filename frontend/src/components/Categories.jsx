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
  ];

  return (
    <section className="categories">
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