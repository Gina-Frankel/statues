import React from "react";
import { Link } from "react-router-dom";

export function StatueMenuItem(props) {
  
  const statueUrl = "/StatueDetailContainer/" + props.index

  return <li>
    <Link to={{ pathname: statueUrl, state: props.value}}>{props.value.name}</Link>
    </li>;
}
