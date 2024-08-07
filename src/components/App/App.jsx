import Header from "../Header/Header";
import PilotList from "../PilotList/PilotList";
import officers from "../../officers.json";

export default function App() {
  return (
    <div>
      <h1>React components</h1>
      <Header />
      <PilotList pilots={officers} />
    </div>
  );
}
