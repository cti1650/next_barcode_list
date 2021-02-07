import React, { Component } from "react";

export default class ChatItemAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: "initial value",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async callApi(t) {
    console.log(t);
    const res = await fetch(
      "https://cti-tl.com/chat/qin_test/index.php?comment=" + t
    );
    const users = await res.json();
  }

  async callApi2(e) {
    console.log(e.target.value);
    const param = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Request-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({ comment: e.target.value }),
    };
    const res = await fetch(
      "https://cti-tl.com/chat/qin_test/index.php",
      param
    );
    const users = await res.json();
    this.setState({ textAreaValue: users });
  }

  onChangeText(e) {
    this.setState({ textAreaValue: e.target.value });
  }

  onClick() {
    callApi(this.state.textAreaValue);
    setState({ textAreaValue: "" });
  }

  render() {
    return (
      <div>
        <label>
          Is going:
          <textarea
            name="comment"
            value={this.state.textAreaValue}
            onChange={this.onChangeText}
          />
        </label>
        <button onClick={this.onClick}>change</button>
      </div>
    );
  }
}
