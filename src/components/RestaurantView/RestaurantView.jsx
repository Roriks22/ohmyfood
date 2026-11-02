import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import MenuContent from "@/components/MenuContent/MenuContent";

export default function RestaurantView({ restaurant, view = "card", styles }) {
  const { id, name, location, image, isNew, slug, menu } = restaurant;

  if (view === "card") {
    return (
      <RestaurantCard
        id={id}
        name={name}
        location={location}
        image={image}
        isNew={isNew}
        slug={slug}
      />
    );
  }

  if (view === "menu") {
    return (
      <>
        <RestaurantHeader name={name} />
        <MenuContent menu={menu} styles={styles} />
      </>
    );
  }

  return null;
}
