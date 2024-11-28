import Item from "./Item";

function List() {
  const tasks = [
    {
      description: "Preparar la clase de Nuclio Full Stack Developer",
      status: "IN PROGRESS",
      dueDate: "25 NOV 2024",
    },
    {
      description:
        "Devolver libros a la biblioteca y recoger nuevos libros sobre ciencia ficción",
      status: "DONE",
      dueDate: "04 DIC 2024",
    },
    {
      description:
        "Preparar las maletas y contratar el seguro de viaje a Marte",
      status: "TO DO",
      dueDate: "03 MAY 2025",
    },
    {
      description: "Desarrollar un robot para que pueda programar por mi",
      status: "TO DO",
      dueDate: "25 DIC 2027",
    },
  ];

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
