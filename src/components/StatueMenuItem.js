import React from "react";
import { Link } from "react-router-dom";
import style from "./StatueMenuItem.module.css";

export function StatueMenuItem(props) {
  const name = props.value.name;
  const statueId = props.value.statueId;
  const nameNoSpaces = `${name.replace(/\s/g, "-")}-${statueId}`;
  const statueUrl = "/StatueDetailContainer/" + nameNoSpaces;

  return (
    <li className={style.li}>
      <Link to={statueUrl} className={style.a}>
        {props.value.name}
      </Link>
    </li>
  );
}
