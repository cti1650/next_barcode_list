import React, { Component } from "react";

import styles from "./ChatItemBox.module.css";
 
export default class ChatItemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'test',
      img:'',
      comment:'コメントを表示するサンプルコンポーネントです。'
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