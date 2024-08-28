/**
 * Використовує контекст вибору мови,
 * не отримує пропсів.
 */

import { useContext } from "react";
import { langContext } from "../context/langContext";

export default function LangSwitcher() {
  const ctx = useContext(langContext);

  const handleChange = (event) => {
    ctx.changeLang(event.target.value);
  };

  return (
    <select value={ctx.lang} onChange={handleChange}>
      <option value="uk">Українська</option>
      <option value="en">English</option>
      <option value="pl">Polski</option>
      <option value="es">Española</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
