import React from "react";
import { Link } from "react-router-dom";
import style from "./StatueMenuItem.module.css";

export function StatueMenuItem(props) {
  const name = props.value.name;
  const nameNoSpaces = name.replace(/\s/g, "-");
  const statueUrl = "/StatueDetailContainer/" + nameNoSpaces;

  return (
    <li className={style.li}>
      <Link
        to={{ pathname: statueUrl, state: props.value }}
        className={style.a}
      >
        {props.value.name}
      </Link>
    </li>
  );
}
