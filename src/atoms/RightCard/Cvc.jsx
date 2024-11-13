import React from "react";

const Cvc = () => {
  return (
    <div className=" flex flex-col gap-[9px] flex-1">
      <p className="text-[12px] font-[500]">CVC</p>
      <input
        type="number"
        placeholder="e.g. 123"
        className="rounded-lg border border-[#DFDEE0] p-[8px]"
      />
    </div>
  );
};

export default Cvc;
