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
 
  callApi() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => {
        this.setState({
          items: res.json()
        });
      })
      .catch(console.error);
  }
 
  render() {
    const { items } = this.state;
    return (
      <div>
        <button onClick={e => this.callApi()}>
          取得
        </button>
        <div>
          {JSON.stringify(items)}
        </div>
      </div>
    );
  }
}