import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavItem extends Component {
  render() {
    return (
      <li id={this.props.item}>
        <Link
          to={this.props.tolink}
          onClick={this.props.activeComp.bind(this, this.props.item)}
        >
          {this.props.item}
        </Link>
      </li>
    );
  }
}

export default NavItem;
