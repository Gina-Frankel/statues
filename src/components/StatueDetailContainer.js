import React, { Component } from "react";
import slaverStatueList from "../statues/slavers.js";

export class StatueDetailContainer extends Component {

  render() {
    
    const statues = slaverStatueList[0].details;
    
    // const items = statues.map((item) => (
    //   <StatueMenuItem key={item.name} value={item} />
    // ));

    
    return (
    <>
    <div>
      Evil statue information
    </div>
    <div>
      {statues}
    </div>
    </>
    )
  }
}
