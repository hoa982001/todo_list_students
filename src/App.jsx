import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPersonComponent from "./containers/listPerson";

function App() {
  return (
    <div className="App container">
        <ListPersonComponent></ListPersonComponent>
    </div>
  );
}

export default App;
