import React, { useCallback, useRef, useState } from "react";
import  { Button, Paper, TextField } from "@mui/material";
export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const inputtext = useRef();
  const [id, setId] = useState(0);

  // console.log(text,id)

  const todoCreate = (text) => {
    if (text !== null) {
      const todo = { text: text, id: id };
      setId(id + 1);
      addTodo(todo);
      document.getElementById("outlined-basic").value = null;
      setText(text = null)
    }
  };
  const buttonenter = (e) => {
    if (e.key === "Enter") {
      var btn = document.querySelector("#buttonadd");
      btn.click();
    }
  };

  const addbuttonenter = useCallback((text) => {
    document.addEventListener("keypress", buttonenter);
  }, []);
  const offbuttonenter = useCallback(() => {
    document.removeEventListener("keypress", buttonenter);
  }, []);
  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          onBlur={() => offbuttonenter(text)}
          onFocus={() => addbuttonenter()}
          ref={inputtext}
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
          }}
          fullWidth
        />
        <Button
          id="buttonadd"
          variant="text"
          onClick={() => {
            todoCreate(text);
          }}
        >
          Add
        </Button>
      </div>
    </Paper>
  );
}
