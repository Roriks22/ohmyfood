import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <h1>404</h1>

        <h2>Oups ! Ce restaurant n'existe pas.</h2>

        <p>
          Le restaurant que vous recherchez est introuvable.
          Vérifiez l'adresse ou retournez à l'accueil.
        </p>

        <Link href="/" className="not-found__button">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
