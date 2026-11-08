import Image from "next/image";
import styles from "./page.module.css";
import Steps from "@/components/Steps/Steps";
import RestaurantView from "@/components/RestaurantView/RestaurantView";
import restaurantsData from "@/data/restaurants.json";

export default function Home() {
  const restaurants = restaurantsData.restaurants;

  return (
    <>
      <div className={styles.location}>
        <Image src="/icons/location.svg" alt="" width={16} height={16} />
        <span>Paris, Belleville</span>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Réservez le menu qui vous convient</h1>

          <p>
            Découvrez des restaurants d'exception, sélectionnés par nos soins.
          </p>

          <button className={styles.cta}>Explorer nos restaurants</button>
        </div>
      </section>

      <Steps />

      <section className={styles.restaurants}>
        <div className={styles.restaurantsContent}>
          <h2>Restaurants</h2>

          <div className={styles.restaurantGrid}>
            {restaurants.map((restaurant) => (
              <RestaurantView
                key={restaurant.id}
                restaurant={restaurant}
                view="card"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
