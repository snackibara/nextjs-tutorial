import Nav from "/components/nav";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">Material Book</Link>
      </div>
      <Nav/>

    </header>
  );
}
