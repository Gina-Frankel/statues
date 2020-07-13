import React from "react";
import { Link } from "react-router-dom";

export function StatueMenuItem(props) {
  
  const statueUrl = "/StatueDetailContainer/" + props.index

  return <li>
    <Link to={statueUrl}>{props.value.name}</Link>
    </li>;
}
