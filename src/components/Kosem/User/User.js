import React, { useState } from "react";
import UserInput from "./UserInput";
import UserBadge from "./UserBadge";

export default function User(props) {
  return (
    <>
      <UserInput saveUser_Local={props.saveUser_Local} />
      <UserBadge usersArr={props.usersArr} />
    </>
  );
}
