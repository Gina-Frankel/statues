import React, { Component } from "react";

export class StatueList extends Component {
  constructor() {
    super()
    this.state = {
   
    }
  }


  render() {
    
    const items = this.props.statue.map ((item,key) =>
     <li key={item.statueName}>
       {item.statueName}
     </li>)

    console.log(items)
    return (
      <div>
        <p>{this.props.statue[0].statueName}</p>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default StatueList;
