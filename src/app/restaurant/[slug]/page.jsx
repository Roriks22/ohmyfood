import Image from "next/image";
import { notFound } from "next/navigation";
import restaurantsData from "@/data/restaurants.json";
import RestaurantView from "@/components/RestaurantView/RestaurantView";
import styles from "./page.module.css";

export default async function RestaurantPage({ params }) {
  // 1. Récupérer le slug de l'URL
  const { slug } = await params;

  // 2. Rechercher le restaurant correspondant
  const restaurant = restaurantsData.restaurants.find(
    (restaurant) => restaurant.slug === slug,
  );

  // 3. Afficher une page 404 si le restaurant n'existe pas
  if (!restaurant) {
    notFound();
  }

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
        <RestaurantView restaurant={restaurant} view="menu" styles={styles} />

        <button type="button" className={styles.orderButton}>
          Commander
        </button>
      </div>
    </main>
  );
}
