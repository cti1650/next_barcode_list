import React, { Component } from "react";
import ReactDOM from "react-dom";
 
class ObjectLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {
        1: "柴犬",
        2: "ポメラニアン"
      }
    };
  }
 
  // ボタン押下時処理
  // チワワのキー(3)が存在しなければ追加、存在すれば削除
  handleClick(e, key) {
    let new_dogs = this.state.dogs;
    if (new_dogs.hasOwnProperty(key)) {
      delete new_dogs[key];
    } else {
      new_dogs[key] = "チワワ";
    }
    this.setState({ dogs: new_dogs });
  }
 
  render() {
    const { dogs } = this.state;
    return (
      <div>
        <ul>
          {Object.keys(dogs).map(key => (
            <li key={key}>{dogs[key]}</li>
          ))}
        </ul>
        <button onClick={e => this.handleClick(e, 3)}>
          チワワひょっこりはん！
        </button>
      </div>
    );
  }
}
 
const rootElement = document.getElementById("root");
ReactDOM.render(<ObjectLoop />, rootElement);