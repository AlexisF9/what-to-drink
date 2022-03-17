import { Header } from "../../components/header";
import css from "./index.module.scss";
import Link from "next/link";

export function ItemCategory({ category, name }) {
  return (
    <>
      <Header
        searchDrink="/random"
        allIngredients="/ingredients"
        category="/category"
      />
      <main className={css.cateInfos}>
        <h2>{name}</h2>
        <div className={css.listeCocktails}>
          {category?.drinks?.map((cocktails, index) => {
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
  const cateInfos = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.id}`
  );
  const category = await cateInfos.json();

  const name = params.id;

  return {
    props: {
      category,
      name,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default ItemCategory;
