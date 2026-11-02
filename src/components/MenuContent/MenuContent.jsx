import MenuItem from "@/components/MenuItem/MenuItem";

export default function MenuContent({ menu, styles }) {
  const categories = [
    { title: "Entrées", items: menu.entrées },
    { title: "Plats", items: menu.plats },
    { title: "Desserts", items: menu.desserts },
  ];

  return (
    <div className={styles.menu}>
      {categories.map((category) => (
        <section key={category.title} className={styles.menuCategory}>
          <h2 className={styles.categoryTitle}>{category.title}</h2>

          <div className={styles.menuItems}>
            {category.items.map((item, index) => (
              <MenuItem
                key={`${category.title}-${item.nom}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
