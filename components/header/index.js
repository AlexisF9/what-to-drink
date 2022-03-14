import css from "./header.module.scss";
import Link from "next/link";
import { createRef } from "react";

export function Header(props) {
  const handle = createRef();
  const overlay = createRef();

  function handleMenu() {
    handle.current.classList.add(css.active);
    overlay.current.classList.add(css.active);
  }

  function closeMenu() {
    handle.current.classList.remove(css.active);
    overlay.current.classList.remove(css.active);
  }

  return (
    <>
      <main className={css.header}>
        <Link href="/">
          <a>
            <h1>What to drink ?</h1>
          </a>
        </Link>
        <svg viewBox="0 0 100 80" width="30" height="30" onClick={handleMenu}>
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
        <div className={css.menu} ref={handle}>
          <svg
            viewPort="0 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            onClick={closeMenu}
          >
            <line
              x1="1"
              y1="25"
              x2="25"
              y2="1"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="1"
              x2="25"
              y2="25"
              stroke="black"
              strokeWidth="2"
            />
          </svg>

          <div className={css.linkHeader}>
            <Link href={props.searchDrink}>
              <a>Random</a>
            </Link>
            <Link href={props.allIngredients}>
              <a>Ingredients</a>
            </Link>
          </div>
        </div>
      </main>
      <div className={css.overlay} ref={overlay} onClick={closeMenu}></div>
    </>
  );
}
