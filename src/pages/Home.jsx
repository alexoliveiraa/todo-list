import { Container, List } from "@mui/material";
import React, {  useState } from "react";
import Form from "../componentes/Form";
import Todoitem from "../componentes/Todoitem";


export default function Home() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id)=>  {
    var filtered = todos.filter((todo) => todo.id !== id)
    setTodos(filtered)
    
  }
  const editTodo = (id, editedText) => {
    var todosArray = [...todos];

    for (var i in todosArray) {
        if (todosArray[i].id === id) {
            todosArray[i].text = editedText;
        }
    }
    
  }
  console.log(todos)

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo, key) => (
          <div style={{ marginTop: "1em" }} key={key}>
            <Todoitem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
