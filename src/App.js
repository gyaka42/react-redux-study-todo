import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import DeleteAll from "./components/DeleteAll";
import Header from "./components/Header";
import ListTodos from "./components/ListTodos";



function App() {

  return (
    <div>
      <Header />
      <AddTodoForm />
      <ListTodos />
      <DeleteAll />
    </div>
  );
}

export default App;
