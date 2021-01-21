import React, { Component } from "react";
import ReactDOM from "react-dom";
 
export default class FetchPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'https://slack.com/api/conversations.replies',
      data:{},
      items:{}
    };
  }
 
  // ボタン押下時処理
  handleClick(e) {
    let url = this.state.url;
    let data = this.state.data;
    let new_items = this.state.items;
    const obj = {hello: "world"};
    const method = "POST";
    const body = Object.keys(obj).map((key)=>key+"="+encodeURIComponent(obj[key])).join("&");
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };
    fetch(url, {method, headers, body})
      .then((res)=> res.json())
      .then((json)=>{console.log;this.setState({
        new_items: json
      });})
      .catch(console.error);
    this.setState({ items: new_items });
  }
 
  render() {
    const { items } = this.state;
    return (
      <div>
        <button onClick={e => this.handleClick(e)}>
          取得
        </button>
        <div>
          {JSON.parse(items)}
        </div>
        <ul>
          {Object.keys(items).map(key => (
            <li key={key}>{items[key]}</li>
          ))}
        </ul>
      </div>
    );
  }
}