import PilotCard from "../PilotCard/PilotCard";
import css from "./PilotList.module.css";

export default function PilotList({ pilots }) {
  return (
    <ul className={css.list}>
      {pilots.map((item) => (
        <li key={item.id}>
          <PilotCard pilot={item} />
        </li>
      ))}
    </ul>
  );
}
