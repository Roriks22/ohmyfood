import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <Link href="/" className="logo">
          ohmyfood
        </Link>
      </div>
    </header>
  );
}
