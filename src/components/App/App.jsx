import Header from "../Header/Header";
import PilotList from "../PilotList/PilotList";
import officers from "../../officers.json";
import defaultImg from "../../assets/default-pilot.jpeg";
import css from "./App.module.css";
import { FaBeer } from "react-icons/fa";
import { BiArchive } from "react-icons/bi";
// import AtomIcon from "../../assets/atom.svg";

const PSection = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const UserData = () => {
  return (
    <div>
      <img src={defaultImg} alt="" width="50" />
      <p>Дмитро Головський</p>
      <p>Current points: 61848</p>
    </div>
  );
};

const ExpRating = () => {
  return (
    <ul>
      <li>
        We care about the educational experience of our students, and we want
        that your learning will be interesting and funny.
      </li>
      <li>
        For this purpose, we have introduced experience points and levels, which
        serve as a measure of your experience and progress gained in the
        learning process.
      </li>
      <li>
        We award experience points only for actions that are related to the
        acquisition of knowledge.
      </li>
    </ul>
  );
};

export default function App() {
  return (
    <div className={css.container}>
      <img src={defaultImg} alt="" width="80" />
      <FaBeer size="40" className={css.icon} />
      <BiArchive size="80" />
      {/* <AtomIcon /> */}
      <Header />
      <PilotList pilots={officers} />

      <PSection title="Rating">
        <UserData />
      </PSection>
      <PSection title="What are these experience points and levels?">
        <ExpRating />
      </PSection>
    </div>
  );
}
