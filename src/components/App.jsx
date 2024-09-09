import { useSelector } from "react-redux";
import LangSwitcher from "./LangSwitcher";
import Balance from "./Balance";

export default function App() {
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div>
      <h1>State management with Redux</h1>

      <Balance />
      <hr />
      <LangSwitcher />
      <p>Selected lang: {lang}</p>
    </div>
  );
}
