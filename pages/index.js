import Head from "next/head";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import css from "../styles/home.module.scss";
import { Header } from "./components/header";
import { Title } from "./components/title";

export default function Home() {

  const [items, setItems] = useState([]) 
  const search = createRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
      );
      const rep = await response.json();
      setItems(rep);
    };
    fetchData();
  }, []);

  async function handleOnSubmitSearch(e) {
    e.preventDefault(); // annule tout ce que tu fais nativement, dans ce cas : annule le rechargement de page
    const value = search.current.value
    //const categorie = select.current.value      
    const rep = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
    const data = await rep.json();
    setItems(data);
  }

  console.log(items);
  console.log(items.drinks);

  return (
    <div className={css.container}>
      <Head>
        <title>What to drink ?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header searchDrink="/random" />
      <Title title="Search your favorite cocktail" urlImg="/titleHome.jpg" />
      <div className={css.content}>
        <form className={css.search} onSubmit={handleOnSubmitSearch}>
            <input ref={search} type="text" placeholder="Search a drink"/>
            <button type="submit">Search</button>
        </form> 
        <div className={css.cardItems}>
          {items?.drinks?.map((drink, index) => {
            return (
              <div className={css.items}>
                <div className={css.overlay}></div>
                <h3 key={index}>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
