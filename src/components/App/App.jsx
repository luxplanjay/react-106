import UserForm from "./UserForm/UserForm";
import css from "./App.module.css";

export default function App() {
  const addUser = (newUser) => {
    console.log(newUser);
  };

  return (
    <div className={css.container}>
      <h1>Forms with Formik</h1>
      <UserForm onAdd={addUser} />
    </div>
  );
}
