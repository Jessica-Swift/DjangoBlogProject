import React, { useContext } from "react";
import { MyContext } from "../App";

function ComponentD() {
  const data = useContext(MyContext);

  return <div>{data}</div>;
}

export default ComponentD;
