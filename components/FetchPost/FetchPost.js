import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
 
export default class FetchPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'https://slack.com/api/search.messages?query=Next.js&count=200&pretty=1',
      data:{},
      items:{}
    };
  }
 
  // ボタン押下時処理
  handleClick(e) {
    let url = this.state.url;
    let data = this.state.data;
    let new_items = this.state.items;
    const obj = {};
    const method = "GET";
    const body = Object.keys(obj).map((key)=>key+"="+encodeURIComponent(obj[key])).join("&");
    const headers2 = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer xoxp-64683967046-64683967078-1675081906353-7c33e05dddc58d7a54404909dfe2381b'
    };
    const headers = {
      'Authorization': 'Bearer xoxp-64683967046-64683967078-1675081906353-7c33e05dddc58d7a54404909dfe2381b'
    };
    fetch(url, {method, headers})
      .then((res)=> res.json())
      .then((json)=>{
        console.log(json);
        this.setState({
          items: json
        });
      })
      .catch(console.error);
  }
  getData() {
    axios
      .get(this.state.url,{
        headers: {
          Authorization: "Bearer xoxp-64683967046-64683967078-1675081906353-7c33e05dddc58d7a54404909dfe2381b"
        }
      })
      .then(results => {
        const data = results.data.content;        
        this.setState({
          items: data,
        });
      });
  }
 
  render() {
    const { items } = this.state;
    return (
      <div>
        <button onClick={e => this.getData()}>
          取得
        </button>
        <div>
          {JSON.stringify(items)}
        </div>
      </div>
    );
  }
}