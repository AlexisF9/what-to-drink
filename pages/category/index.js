import Link from "next/link";
import { Header } from "../../components/header";
import { Title } from "../../components/title";
import css from "./index.module.scss";

export default function Category({ categories }) {
  return (
    <>
      <Header
        searchDrink="/random"
        allIngredients="/ingredients"
        category="/category"
      />
      <Title title="Categories" urlImg="/titleCategory.jpg" />

      <main className={css.allCategories}>
        {categories.drinks.map((cate, index) => {
          return (
            <Link href={`/itemCategory/${cate.strCategory}`} key={index}>
              <a>
                <p>{cate.strCategory}</p>
              </a>
            </Link>
          );
        })}
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const rep = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
  );
  const categories = await rep.json();

  return {
    props: {
      categories,
    },
  };
}
