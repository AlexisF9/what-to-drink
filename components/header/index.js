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
      <div className={css.linkHeader}>
        <Link href={props.searchDrink}>
          <a>Random</a>
        </Link>
        <Link href={props.allIngredients}>
          <a>Ingredients</a>
        </Link>
        {/*<Link href={props.category}>
          <a>Category</a>
        </Link>*/}
      </div>
    </main>
  );
}
