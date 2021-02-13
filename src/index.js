import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const plusItem = () => setItem(item + 1);
  const minusItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={plusItem}>+</button>
      <button onClick={minusItem}>-</button>
    </div>
  );
};

class UglyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 1
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.plusItem}>+</button>
        <button onClick={this.minusItem}>-</button>
      </div>
    );
  }
  plusItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  minusItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };
}
const rootElement = document.getElementById("root");
ReactDOM.render(<UglyApp />, rootElement);
