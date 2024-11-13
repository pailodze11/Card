import React from "react";
import LeftCardBg from "../atoms/LeftCard/LeftCardBg";
import CardImage from "../atoms/LeftCard/CardImage";

const LeftCard = () => {
  return (
    <div className="flex-1 flex">
      <LeftCardBg />
      <CardImage />
    </div>
  );
};

export default LeftCard;
