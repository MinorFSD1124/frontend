import "./Item.css";

function Item(props) {
  function deleteItem() {
    console.log("delete");
  }

  function getStatusClass() {
    if (props.status === "IN PROGRESS") {
      return "in-progress";
    }
    if (props.status === "DONE") {
      return "done";
    }
    if (props.status === "TO DO") {
      return "to-do";
    }
  }

  return (
    <div className="item">
      <p>{props.description}</p>
      <p>
        <span className={getStatusClass()}>{props.status}</span> Fecha límite{" "}
        {props.dueDate}
      </p>
      <p>
        <a href="">Editar</a>
        <a href="">Marcar como finalizada</a>
        <a href="" onClick={deleteItem}>
          Eliminar
        </a>
      </p>
    </div>
  );
}

export default Item;
