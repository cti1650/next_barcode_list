import React, { Component } from "react";

import ChatItemBox from "../ChatItemBox/ChatItemBox";

export default class ChatItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:props.Comments
    };
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        {Object.keys(items).map(key => (
          <ChatItemBox {...items[key]}/>
        ))}
      </div>
    );
  }
}