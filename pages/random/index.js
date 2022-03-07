import { Header } from "../components/header";
import { Title } from "../components/title";
import css from "./random.module.scss";
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";

export default function Random() {
  const [cocktails, setCocktails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      const rep = await response.json();
      setCocktails(rep);
    };
    fetchData();
  }, []);

  async function random() {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const recipe = await res.json();
    setCocktails(recipe);
  }

  return (
    <>
      <Header searchDrink="/random" />
      <Title title="Find a random drink" urlImg="/titleRandom.jpg" />
      <main className={css.random}>
      <div className={css.cocktails}>
        <button onClick={random}>Refresh</button>
        {cocktails && (
          <>
            <h3>{cocktails.drinks[0].strDrink}</h3>
            <div className={css.infos}>
              <img src={cocktails.drinks[0].strDrinkThumb} alt={cocktails.drinks[0].strDrink} />
              <div>
                <p>
                  <span>Category : </span>
                  {cocktails.drinks[0].strCategory}
                </p>
                <p>
                  <span>Type : </span>
                  {cocktails.drinks[0].strAlcoholic}
                </p>
                <h4>Instructions :</h4>
                <p>{cocktails.drinks[0].strInstructions}</p>
              </div>
            </div>
            <div className={css.ingredients}>
              <h4>Ingredients :</h4>
              <ul>
                {cocktails.drinks[0].strIngredient1 && (
                  <li>
                    {cocktails.drinks[0].strIngredient1}
                    {cocktails.drinks[0].strMeasure1 &&
                      " : " + cocktails.drinks[0].strMeasure1}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient2 && (
                  <li>
                    {cocktails.drinks[0].strIngredient2}
                    {cocktails.drinks[0].strMeasure2 &&
                      " : " + cocktails.drinks[0].strMeasure2}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient3 && (
                  <li>
                    {cocktails.drinks[0].strIngredient3}
                    {cocktails.drinks[0].strMeasure3 &&
                      " : " + cocktails.drinks[0].strMeasure3}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient4 && (
                  <li>
                    {cocktails.drinks[0].strIngredient4}
                    {cocktails.drinks[0].strMeasure4 &&
                      " : " + cocktails.drinks[0].strMeasure4}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient5 && (
                  <li>
                    {cocktails.drinks[0].strIngredient5}
                    {cocktails.drinks[0].strMeasure5 &&
                      " : " + cocktails.drinks[0].strMeasure5}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient6 && (
                  <li>
                    {cocktails.drinks[0].strIngredient6}
                    {cocktails.drinks[0].strMeasure6 &&
                      " : " + cocktails.drinks[0].strMeasure6}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient7 && (
                  <li>
                    {cocktails.drinks[0].strIngredient7}
                    {cocktails.drinks[0].strMeasure7 &&
                      " : " + cocktails.drinks[0].strMeasure7}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient8 && (
                  <li>
                    {cocktails.drinks[0].strIngredient8}
                    {cocktails.drinks[0].strMeasure8 &&
                      " : " + cocktails.drinks[0].strMeasure8}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient9 && (
                  <li>
                    {cocktails.drinks[0].strIngredient9}
                    {cocktails.drinks[0].strMeasure9 &&
                      " : " + cocktails.drinks[0].strMeasure9}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient10 && (
                  <li>
                    {cocktails.drinks[0].strIngredient10}
                    {cocktails.drinks[0].strMeasure10 &&
                      " : " + cocktails.drinks[0].strMeasure10}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient11 && (
                  <li>
                    {cocktails.drinks[0].strIngredient11}
                    {cocktails.drinks[0].strMeasure11 &&
                      " : " + cocktails.drinks[0].strMeasure11}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient12 && (
                  <li>
                    {cocktails.drinks[0].strIngredient12}
                    {cocktails.drinks[0].strMeasure12 &&
                      " : " + cocktails.drinks[0].strMeasure12}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient13 && (
                  <li>
                    {cocktails.drinks[0].strIngredient13}
                    {cocktails.drinks[0].strMeasure13 &&
                      " : " + cocktails.drinks[0].strMeasure13}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient14 && (
                  <li>
                    {cocktails.drinks[0].strIngredient14}
                    {cocktails.drinks[0].strMeasure14 &&
                      " : " + cocktails.drinks[0].strMeasure14}
                  </li>
                )}
                {cocktails.drinks[0].strIngredient15 && (
                  <li>
                    {cocktails.drinks[0].strIngredient15}
                    {cocktails.drinks[0].strMeasure15 &&
                      " : " + cocktails.drinks[0].strMeasure15}
                  </li>
                )}
              </ul>
            </div>
          </>
        )}
        </div>
    </main>
    <Footer/>
    </>
  );
}
