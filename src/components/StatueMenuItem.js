import React from "react";
import { Link } from "react-router-dom";
import style from "./StatueMenuItem.module.css";

export function StatueMenuItem(props) {
  const { name, statueId } = props.value;

  const nameNoSpaces = `${name.replace(/\s/g, "-")}-${statueId}`;
  const statueUrl = "/Statue/" + nameNoSpaces;

  return (
    <li className={style.li}>
      <Link to={statueUrl} className={style.a}>
        {name}
      </Link>
    </li>
  );
}
