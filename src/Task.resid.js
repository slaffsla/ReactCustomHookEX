export const Task = (props) => {
  const completeText = props.completed ? "Do Again" : "Complete";
  return (
    <div
      className="task"
      style={{
        backgroundColor: props.completed ? "rgb(65, 133, 60)" : "lightgrey",
        borderRadius: "10px",
        border: "1px solid darkgrey",
      }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>
        {completeText}
      </button>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  );
};
