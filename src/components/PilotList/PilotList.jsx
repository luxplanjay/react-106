import PilotCard from "../PilotCard/PilotCard";

export default function PilotList({ pilots }) {
  return (
    <ul>
      {pilots.map(item => {
        return (
          <li key={item.id}>
            <PilotCard pilot={item} />
          </li>
        );
      })}
    </ul>
  );
}
