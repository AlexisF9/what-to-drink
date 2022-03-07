import css from "./header.module.scss";
import Link from "next/link";

export function Header(props) {
  return (
    <main className={css.header}>
      <Link href="/">
        <a>
          <h1>What to drink ?</h1>
        </a>
      </Link>
      <Link href={props.searchDrink}>
        <a>Random drink</a>
      </Link>
    </main>
  );
}
