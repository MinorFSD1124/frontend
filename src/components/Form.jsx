import { useState } from "react";

import "./Form.css";
function Form() {
  const [nombre, setNombre] = useState("Luis");

  function assignToMe(event) {
    event.preventDefault();
    console.log("assignToMe");
    setNombre("Jordi");
  }

  function assignTask(event) {
    console.log(event.target.value);
    setNombre(event.target.value);
  }

  return (
    <>
      <h2>Nueva tarea</h2>
      <form>
        <p>Escribe la descripción de la tarea</p>
        <textarea></textarea>
        <p>Escribe el responsable de la tarea</p>
        <input type="text" onChange={assignTask} />
        <p>
          <button onClick={assignToMe}>Asignarme la tarea</button>
        </p>
        <p>El responsable de la tarea es {nombre}</p>
        <p>Fecha límite</p>
        <input type="date" />
        <button>Insertar</button>
      </form>
    </>
  );
}

export default Form;
