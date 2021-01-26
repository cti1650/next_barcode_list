import React, { Component } from "react";
import ReactDOM from "react-dom";

import FetchPost from "../FetchPost/FetchPost";
import ChatItems from "../ChatItems/ChatItems";
import ChatItemAdd from "../ChatItemAdd/ChatItemAdd";

import classes from "./AppPage.module.css";
 
export default class AppPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'メッセージ取得 API取得動作検証',
      items:[]
    };
  }
  async callApi() {
    const res = await fetch('https://cti-tl.com/chat/qin_test/index.php');
    const users = await res.json();
    this.setState({
      items: users,
    });
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
    const items = [
      { 'mine' : true , 'name' : 'test1' , 'comment' : 'テスト１\nテスト成功！' },
      { 'mine' : false , 'name' : 'test2' , 'comment' : 'テスト２' },
      { 'mine' : true , 'name' : 'test3' , 'comment' : 'テスト３' },
      { 'mine' : false , 'name' : 'test4' , 'comment' : 'テスト４' }
    ]
    return (
      <div className={classes.Page}>
        <header>
          <h2>{this.state.title}</h2>
        </header>
        <main>
          <FetchPost />
          <ChatItems Comments={this.state.items}/>
          <ChatItemAdd />
        </main>
        <footer><small>Copyright © 2020 cti1650 All Rights Reserved.</small></footer>
      </div>
    );
  }
}