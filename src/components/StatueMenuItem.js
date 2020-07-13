import React from "react";
import { Link } from "react-router-dom";

export function StatueMenuItem(props) {
  const name = props.value.name
  const nameNoSpaces = name.replace(/\s/g, "-");
  const statueUrl = "/StatueDetailContainer/" + nameNoSpaces

  return <li>
    <Link to={{ pathname: statueUrl, state: props.value}}>{props.value.name}</Link>
    </li>;
}
