import React from "react";
import CardHolderName from "../atoms/RightCard/CardHolderName";
import CardNumber from "../atoms/RightCard/CardNumber";
import DateInfo from "./RightFormElems/DateInfo";
import Button from "../atoms/RightCard/Button";

const RightForm = () => {
  return (
    <div className="flex flex-col gap-[25px] w-[382px]">
      <CardHolderName />
      <CardNumber />
      <DateInfo />
      <Button />
    </div>
  );
};

export default RightForm;
