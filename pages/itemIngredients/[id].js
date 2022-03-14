import { Header } from "../../components/header";
import css from "./index.module.scss";
import Link from "next/link";

export function ItemIngredients({ ingre, listCocktails }) {
  return (
    <>
      <Header
        searchDrink="/random"
        allIngredients="/ingredients"
        category="/category"
      />
      <main className={css.ingreInfos}>
        <h2>{ingre.ingredients[0].strIngredient}</h2>

        <div className={css.listeCocktails}>
          {listCocktails?.drinks?.map((cocktails, index) => {
            return (
              <Link href={`/itemDrink/${cocktails.idDrink}`} key={index}>
                <a className={css.items}>
                  <div className={css.overlay}></div>
                  <h3>{cocktails.strDrink}</h3>
                  <img src={cocktails.strDrinkThumb} alt={cocktails.strDrink} />
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
  const ingreInfos = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${params.id}`
  );
  const ingre = await ingreInfos.json();

  const list = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params.id}`
  );
  const listCocktails = await list.json();

  return {
    props: {
      ingre,
      listCocktails,
    },
  };
}

export async function getStaticPaths() {
  // liste les (routes) pages à l'avance
  return {
    paths: [],
    fallback: "blocking", // met la page 404
  };
}

export default ItemIngredients;
