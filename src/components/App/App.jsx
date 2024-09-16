import { useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import TaskForm from "../TaskForm/TaskForm";
import { fetchTasks } from "../../redux/tasksOps";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {loading && <Loader>Loading message</Loader>}
      {error && <Error>Error message</Error>}
      <TaskList />
    </main>
  );
}
