import React from "react";
import { OpenEyesIcon, CloseEyesIcon } from "../../../assets/index";

const PasswordInputBox = (props) => {
  const {
    placeholder,
    index,
    handlePasswordType,
    visible,
    type,
    onChangeEvent,
  } = props;
  return (
    <div className="passwordWrapper">
      <input
        type={type}
        onChange={(e) => {
          onChangeEvent(e, index);
        }}
        placeholder={placeholder}
      />
      <img
        src={visible ? OpenEyesIcon : CloseEyesIcon}
        onClick={() => {
          handlePasswordType(index);
        }}
        alt=""
      />
    </div>
  );
};

export default PasswordInputBox;
