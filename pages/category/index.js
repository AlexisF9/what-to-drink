import { Header } from "../../components/header";
import { Title } from "../../components/title";
import css from "./category.module.scss";
import { useEffect, useState } from "react";

export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rep = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      const cat = await rep.json();
      setCategory(cat);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header
        searchDrink="/random"
        allIngredients="/ingredients"
        category="/category"
      />
      <Title title="Drinks by category" urlImg="/titleRandom2.jpg" />
      <main className={css.allCategory}>
        <ul>
          {category?.drinks?.map((category, index) => {
            return <li key={index}>{category.strCategory}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
