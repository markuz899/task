import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState([]);

  const styled = {
    ul: {
      listStyleType: "none",
    },
    li: {
      textAlign: "left",
      display: "flex",
      alignItems: "center",
    },
    button: {
      marginLeft: "20px",
    },
  };

  useEffect(() => {
    fetch("http://localhost:3030/data")
      .then((response) => response.json())
      .then((json) => setState(json));
  }, []);

  const handleChange = (evt) => {
    const { value } = evt;
    fetch(`http://localhost:3030/data/${value}`)
      .then((response) => response.json())
      .then((json) => setSelectedCustomer(json));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Seleziona il customer da visualizzare</p>
        {state.map((el, i) => {
          return (
            <div key={i}>
              <input
                onChange={(e) => handleChange(e.target)}
                type="radio"
                name="customer"
                value={el}
                id={`choice-${el}`}
              ></input>
              <label htmlFor={`choice-${el}`}>CUSTOMER {el}</label>
            </div>
          );
        })}
        <ul style={styled.ul}>
          {selectedCustomer.map((el, i) => {
            return (
              <li key={i} style={styled.li}>
                Customer-{el.customer} {el.date} {el.value}{" "}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
