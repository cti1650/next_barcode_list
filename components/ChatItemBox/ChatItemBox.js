import React, { Component } from "react";

import styles from "./ChatItemBox.module.css";
 
export default class ChatItemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'アフィラ',
      img:'https://afila0.com/wp-content/uploads/2020/12/afila_black-min.jpg',
      comment:'サイトによるけど、基本テキストリンクの方が高い'
    };
  }
  render() {
    return (
      <div className={styles.stKaiwaBox}>
        <div className={styles.stKaiwaFace}>
          <img src={this.state.img} width="60px"></img>
          <div className={styles.stKaiwaFaceName}>{this.state.name}</div>
        </div>
        <div className={styles.stKaiwaArea}>
          <div className={styles.stKaiwaHukidashi}>{this.state.comment}</div>
        </div>
      </div>
    );
  }
}