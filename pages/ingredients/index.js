import { Header } from "../../components/header";
import { Title } from "../../components/title";
import css from "./ingredients.module.scss";
import { useState } from "react";
import Link from "next/link";
import { createRef } from "react/cjs/react.production.min";

export default function Ingredients({ ingre }) {
  const [value, setValue] = useState("");
  const search = createRef();

  const newIngre = ingre.drinks.filter((ingredient) =>
    ingredient.strIngredient1.toLowerCase().includes(value)
  );

  return (
    <>
      <Header
        searchDrink="/random"
        allIngredients="/ingredients"
        category="/category"
      />
      <Title title="Drinks by ingredients" urlImg="/titleIngredients.jpg" />

      <main className={css.allIngredients}>
        <input
          className={css.search}
          ref={search}
          type="text"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value.toLowerCase())}
        />
        <div>
          {newIngre.map((ingredient, index) => {
            return (
              <Link
                href={`/itemIngredients/${ingredient.strIngredient1}`}
                key={index}
              >
                <a>
                  <p>{ingredient.strIngredient1}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const rep = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
  );
  const ingre = await rep.json();

  return {
    props: {
      ingre,
    },
  };
}
