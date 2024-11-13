import React from "react";
import ExpDate from "../../atoms/RightCard/ExpDate";
import Cvc from "../../atoms/RightCard/Cvc";
import Button from "../../atoms/RightCard/Button";

const DateInfo = () => {
  return (
    <div className=" flex gap-[20px]">
      <ExpDate />
      <Cvc />
    </div>
  );
};

export default DateInfo;
