import css from "./title.module.scss";

export function Title(props) {
  return (
    <div className={css.title} style={{backgroundImage: `url(${props.urlImg})`}}>
      <div className={css.overlay}></div>
      <h2>{props.title}</h2>
    </div>
  );
}
