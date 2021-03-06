import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import css from "../styles/home.module.scss";
import { Header } from "../components/header";
import { Title } from "../components/title";

export default function Home() {
  const [items, setItems] = useState([]);
  const search = createRef();

  async function handleOnSubmitSearch(e) {
    e.preventDefault(); // annule tout ce que tu fais nativement, dans ce cas : annule le rechargement de page
    const value = search.current.value;
    //const categorie = select.current.value
    const rep = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
    );
    const data = await rep.json();
    setItems(data);
  }

  return (
    <div className={css.container}>
      <Header
        searchDrink="/random"
        allIngredients="/ingredients"
        category="/category"
      />
      <Title title="Search your favorite cocktail" urlImg="/titleHome.jpg" />
      <div className={css.content}>
        <form className={css.search} onSubmit={handleOnSubmitSearch}>
          <input ref={search} type="text" placeholder="Search by name" />
          <button type="submit">Search</button>
        </form>
        <div className={css.cardItems}>
          {items?.drinks?.map((drink, index) => {
            return (
              <Link href={`/itemDrink/${drink.idDrink}`} key={index}>
                <a className={css.items}>
                  <div className={css.overlay}></div>
                  <h3 key={index}>{drink.strDrink}</h3>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
