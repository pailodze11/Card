import React from "react";

const CardNumber = () => {
  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#21092F] text-[12px] font-medium tracking-[2px]">
          Card Number
        </p>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          className="text-[18px] opacity-[0.25] rounded-lg border border-[#DFDEE0] bg-white p-[8px]"
        />
      </div>
    </div>
  );
};

export default CardNumber;
