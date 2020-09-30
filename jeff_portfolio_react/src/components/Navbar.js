import React, { Component } from "react";
import NavItem from "./NavItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }

  activeItem=(x)=>
{
if(this.state.NavItemId.length>0)
{
document.getElementById(this.state.NavItemActive).classList.remove('active');
}
this.setState({'NavItemActive':x},()=>{
document.getElementById(this.state.NavItemActive).classList.add('active');
});
};

  render() {
    return (
      <nav>
        <ul>
          <NavItem item="Home" tolink="/" activeComp ={this.activeItem} ></NavItem>
          <NavItem item="About" tolink="/about" activeComp ={this.activeItem}></NavItem>
          <NavItem item="Education" tolink="/education" activeComp ={this.activeItem}></NavItem>
          <NavItem item="Skills" tolink="/skills" activeComp ={this.activeItem}></NavItem>
          <NavItem item="Contact" tolink="/contact" activeComp ={this.activeItem}></NavItem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
