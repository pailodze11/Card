import React from "react";

const CardHolderName = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-[#21092F] text-[12px] font-medium tracking-[2px]">
        Cardholder Name
      </p>
      <input
        type="text"
        placeholder="e.g. Jane Appleseed"
        className="text-[18px] opacity-[0.25] rounded-lg border border-[#DFDEE0] bg-white p-[8px]"
      />
    </div>
  );
};

export default CardHolderName;
