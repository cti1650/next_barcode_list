import React, { Component } from "react";
import ReactDOM from "react-dom";

import FetchPost from "../FetchPost/FetchPost";

import classes from "./AppPage.module.css";
 
export default class AppPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'test'
    };
  }
  render() {
    return (
      <div className={classes.Page}>
        <header>
          <h1>{this.state.title}</h1>
        </header>
        <main>
          <FetchPost />
        </main>
        <footer><small>Copyright © 2020 cti1650 All Rights Reserved.</small></footer>
      </div>
    );
  }
}