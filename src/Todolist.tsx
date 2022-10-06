import { Button, Stack } from "@mui/material";
import { Todo } from "./Todo";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import { useState } from "react";

const initialTodos = [
  { id: 1, title: "aufräumen", isChecked: false },
  { id: 2, title: "joggen", isChecked: false },
  { id: 3, title: "Küche putzen", isChecked: false },
  { id: 4, title: "Schlümpfe bei Firat klauen", isChecked: false }
];

let nextId = 5;

export const Todolist = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const onTextChanged = (event) => {
    const textFromField = event.target.value;
    setText(textFromField);
  };

  const addButtonClicked = () => {
    console.log("Todo mit text anlegen: ", text);
    const newTodo = { id: nextId, title: text, isChecked: false };
    nextId = nextId + 1;
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  console.log({ todos });

  return (
    <div>
      <h1>Space-Todo 🚀</h1>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          isChecked={todo.isChecked}
          onDelete={() => {
            console.log(todo.id, " soll gelöscht werden");
          }}
        />
      ))}
      <div>
        <Stack direction="row" spacing={2} marginTop={6}>
          <TextField size="small" onChange={onTextChanged} />
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={addButtonClicked}
          >
            Hinzufügen
          </Button>
        </Stack>
      </div>
    </div>
  );
};
