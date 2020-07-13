import React from "react";
import { Link } from "react-router-dom";

export function StatueMenuItem(props) {
  return <li>
    <Link to="/StatueDetailContainer/0">{props.value.name}</Link>
    </li>;
}
