import { Header } from "../../components/header";
import { Title } from "../../components/title";
import css from "./ingredients.module.scss";
import { Footer } from "../../components/footer";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Ingredients() {

    const [ingredients, setIngredients] = useState([]) 

    useEffect(() => {
    const fetchData = async () => {
      const rep = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
      );
      const ingre = await rep.json();
      setIngredients(ingre);
    };
    fetchData();
    }, []);

    return (
        <>
            <Header searchDrink="/random" allIngredients="/ingredients"/>
            <Title title="Search drinks by ingredients" urlImg="/titleRandom.jpg"/>
            <main className={css.allIngredients}>
                {ingredients?.drinks?.map((ingre, index) => {
                    return (
                        <Link href={`/itemIngredients/${ingre.strIngredient1}`} key={index}>
                            <a>
                                <p>{ingre.strIngredient1}</p>
                            </a>
                        </Link>
                    )
                })}
            </main>
            <Footer/>
        </>
    )
}