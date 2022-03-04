import { Header } from "../components/header";
import { Title } from "../components/title";
import css from "./search.module.scss";

export default function Search() {
  return (
    <>
      <Header searchDrink="/search" />
      <Title title="Search your favorite cocktails" />
      <main className={css.search}>
        <p></p>
      </main>
    </>
  );
}
