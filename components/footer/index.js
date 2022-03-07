import css from "./footer.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <main className={css.footer}>
        <p>
            Site réalisé par 
            <Link href="https://alexisflacher.fr/">
                <a target="_blanck"> Alexis Flacher</a>
            </Link>
        </p>
    </main>
  );
}
