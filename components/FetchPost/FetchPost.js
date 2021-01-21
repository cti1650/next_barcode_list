import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
 
export default class FetchPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'https://jsonplaceholder.typicode.com/posts/1/comments',
      data:{},
      date: new Date(),
      items:{}
    };
  }
 
  async callApi() {
    const res = await fetch(this.state.url);
    const users = await res.json();
    this.setState({
      items: users,
      date: new Date()
    });
    console.log();
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.callApi(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  render() {
    const { items } = this.state;
    let mailTo = "";
    return (
      <div>
        <h2>メッセージ取得 API取得動作検証</h2>
        <div>
          {Object.keys(items).map(key => (
            <details key={key}>
              <summary>{items[key].name} <a href={"mailTo:" + items[key].email}>[ メール ]</a></summary>
              {items[key].body}
            </details>
          ))}
        </div>
        <div><small>{this.state.date.toLocaleTimeString()} Updated</small></div>
        <button onClick={e => this.callApi()}>
          取得
        </button>
      </div>
    );
  }
}