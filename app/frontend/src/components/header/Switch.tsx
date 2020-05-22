import React from "react";
import { shade } from "polished";
import ReactSwitch, { ReactSwitchProps } from "react-switch";

const Switch: React.FC<ReactSwitchProps> = ({checked, onChange},...props) => {
    return (
      <div style={{margin: "5%"}}>
        <ReactSwitch
        onColor={shade(0.25, "#8F93EA")}
        offColor={"#8F93EA"}
        onChange={onChange}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={24}
        {...props}
        />
      </div>
    )
}

export default Switch;
