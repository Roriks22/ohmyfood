"use client";

import { useState } from "react";
import Link from "next/link";
import "./RestaurantCard.css";

export default function RestaurantCard({ restaurant }) {
  const { name, location, image, isNew, slug, id } = restaurant;
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((previousState) => !previousState);
  };

  return (
    <article className="restaurant-card">
      <Link
        href={`/restaurant/${slug}`}
        className="restaurant-card__link"
      >
        <div className="restaurant-card__image-container">
          <img
            className="restaurant-card__image"
            src={image}
            alt={`Restaurant ${name}`}
          />

          {isNew && (
            <span className="restaurant-card__badge">
              Nouveau
            </span>
          )}
        </div>
      </Link>

      <div className="restaurant-card__content">
        <Link
          href={`/restaurant/${slug}`}
          className="restaurant-card__information"
        >
          <h3 className="restaurant-card__title">{name}</h3>
          <p className="restaurant-card__location">{location}</p>
        </Link>

        <button
          className={`restaurant-card__favorite ${
            isLiked ? "liked" : ""
          }`}
          type="button"
          onClick={handleLike}
          aria-label={
            isLiked
              ? `Retirer ${name} des favoris`
              : `Ajouter ${name} aux favoris`
          }
          aria-pressed={isLiked}
        >
          <svg
            viewBox="0 0 24 24"
            className="restaurant-card__heart"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id={`heart-gradient-${id}`}
                x1="50%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9356DC" />
                <stop offset="100%" stopColor="#FF79DA" />
              </linearGradient>
            </defs>

            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={isLiked ? `url(#heart-gradient-${id})` : "none"}
              stroke={isLiked ? "#9356DC" : "#000000"}
              strokeWidth="1.2"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}

