import React, { Component } from "react";

import styles from "./ChatItemBox.module.css";

export default class ChatItemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      img: props.img,
      comment: props.comment,
      flg: props.mine,
    };
  }
  render() {
    return (
      <div className={styles.stKaiwaBox}>
        {!this.state.flg && (
          <div className={styles.stKaiwaFace}>
            {this.state.img != null && (
              <img src={this.state.img} width="60px"></img>
            )}
            <div className={styles.stKaiwaFaceName}>{this.state.name}</div>
          </div>
        )}
        <div
          className={!this.state.flg ? styles.stKaiwaArea : styles.stKaiwaArea2}
        >
          <div
            className={
              !this.state.flg
                ? styles.stKaiwaHukidashi
                : styles.stKaiwaHukidashi2
            }
          >
            {this.state.comment}
          </div>
        </div>
        {this.state.flg && (
          <div className={styles.stKaiwaFace}>
            {this.state.img != null && (
              <img src={this.state.img} width="60px"></img>
            )}
            <div className={styles.stKaiwaFaceName}>{this.state.name}</div>
          </div>
        )}
      </div>
    );
  }
}
