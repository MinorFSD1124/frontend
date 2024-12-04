import Item from "./Item";
import { useEffect, useState } from "react";

function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(function () {
    fetch("http://localhost:8000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <>
      <h2>Tareas</h2>
      {tasks.map(function (task) {
        return (
          <Item
            description={task.description}
            status={task.status}
            dueDate={task.dueDate}
          />
        );
      })}
    </>
  );
}

export default List;
