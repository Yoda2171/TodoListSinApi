import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import List from "./Component/List";




function App() {
  return (
    <>
      <div className="container">
            <h1>Todo.List</h1>
            <List />
        </div>
    </>
  )
}

export default App;
