import Head from "next/head";
import { useEffect, useState } from "react";
import css from "../styles/home.module.scss";
import { Header } from "./components/header";
import { Random } from "./components/random";
import { Title } from "./components/title";

export default function Home() {
  return (
    <div className={css.container}>
      <Head>
        <title>What to drink ?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header searchDrink="/search" />
      <Title title="Find a random cocktail" />
      <Random />
    </div>
  );
}
