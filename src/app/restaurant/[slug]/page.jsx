import Image from "next/image";
import { notFound } from "next/navigation";
import restaurantsData from "@/data/restaurants.json";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import MenuItem from "@/components/MenuItem/MenuItem";
import styles from "./page.module.css";

export default async function RestaurantPage({ params }) {
  // 1. Récupérer le slug de l'URL
  const { slug } = await params;

  // 2. Rechercher le restaurant correspondant dans le fichier JSON
  const restaurant = restaurantsData.restaurants.find(
    (restaurant) => restaurant.slug === slug,
  );

  // 3. Afficher une page 404 si le restaurant n'existe pas
  if (!restaurant) {
    notFound();
  }

  // 4. Récupérer les catégories du menu
  const categories = [
    { title: "Entrées", items: restaurant.menu["entrées"] },
    { title: "Plats", items: restaurant.menu.plats },
    { title: "Desserts", items: restaurant.menu.desserts },
  ];

  return (
    <main className={styles.restaurantPage}>
      <div className={styles.imageContainer}>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          priority
          sizes="100vw"
          className={styles.restaurantImage}
        />
      </div>

      <div className={styles.menuContainer}>
        <RestaurantHeader name={restaurant.name} />

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

        <button type="button" className={styles.orderButton}>
          Commander
        </button>
      </div>
    </main>
  );
}
