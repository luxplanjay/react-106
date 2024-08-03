import { useSelector } from "react-redux";
import Task from "../Task/Task";
import css from "./TaskList.module.css";

export default function TaskList() {
  const tasks = useSelector(state => state.tasks.items);
  const textFilter = useSelector(state => state.filters.text);

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(textFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
