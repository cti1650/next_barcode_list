import React, { Component } from "react";
import ReactDOM from "react-dom";
 
class CodeLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: {
        1: "柴犬",
        2: "ポメラニアン"
      }
    };
  }
 
  // ボタン押下時処理
  // チワワのキー(3)が存在しなければ追加、存在すれば削除
  handleClick(e, key) {
    let new_codes = this.state.codes;
    if (new_codes.hasOwnProperty(key)) {
      delete new_codes[key];
    } else {
      new_codes[key] = "チワワ";
    }
    this.setState({ codes: new_codes });
  }
 
  render() {
    const { codes } = this.state;
    return (
      <div>
        <ul>
          {Object.keys(codes).map(key => (
            <li key={key}>{codes[key]}</li>
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
ReactDOM.render(<CodeLoop />, rootElement);