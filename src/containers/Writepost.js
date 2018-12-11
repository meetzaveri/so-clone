import React, { Component, Fragment } from "react";
import Writeform from "../components/writepost/form";

class Writepost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div>
          <Writeform />
        </div>
      </Fragment>
    );
  }
}

export default Writepost;
