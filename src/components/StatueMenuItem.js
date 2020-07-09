import React from "react";
import { Link } from "react-router-dom";

export function StatueMenuItem(props) {
  return <li>
    <Link to="/">{props.value.name}</Link>
    </li>;
}
