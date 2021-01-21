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
    const obj = {
      token:'yhD5e2m0sPgigFEoucippJFY',
      channel:'C1WLNAC82',
      limit:20
    };
    const method = "POST";
    const body = Object.keys(obj).map((key)=>key+"="+encodeURIComponent(obj[key])).join("&");
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };
    fetch(url, {method, headers, body})
      .then((res)=> res.json())
      .then((json)=>{
        console.log;
        this.setState({
          items: json
        });
      })
      .catch(console.error);
  }
 
  render() {
    const { items } = this.state;
    return (
      <div>
        <button onClick={e => this.handleClick(e)}>
          取得
        </button>
        <ul>
          {Object.keys(items).map(key => (
            <li key={key}>{items[key]}</li>
          ))}
        </ul>
      </div>
    );
  }
}