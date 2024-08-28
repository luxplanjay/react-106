import { useContext } from "react";
import { langContext } from "../context/langContext";

const text = {
  uk: "Вибрана мова",
  en: "Selected language",
  pl: "Wybrany język",
  es: "Idioma seleccionado",
  de: "Ausgewählte Sprache",
};

export default function LangMessage() {
  const ctx = useContext(langContext);

  return (
    <p>
      <b>{text[ctx.lang]}</b>: {ctx.lang}
    </p>
  );
}
