import { createContext, useState } from "react";

export const langContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("uk");

  return (
    <langContext.Provider value={{ lang, changeLang: setLang }}>
      {children}
    </langContext.Provider>
  );
};
