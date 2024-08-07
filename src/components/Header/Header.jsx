import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.container}>
      <h1 className={css.pageTitle}>Styling React components</h1>
    </header>
  );
}
