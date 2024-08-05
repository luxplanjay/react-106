import Header from "../Header/Header";
import PilotList from "../PilotList/PilotList";
import officers from "../../officers.json";

export default function App() {
  return (
    <div>
      <Header />
      <PilotList pilots={officers} />
    </div>
  );
}
