import React from "react";

const ExpDate = () => {
  return (
    <div className="flex flex-col gap-[9px] flex-1">
      <p className="text-[12px] text-[#21092F] font-[500]">Exp. Date (MM/YY)</p>
      <div className="flex gap-[10px]">
        <input
          type="text"
          placeholder="MM"
          className="rounded-lg border border-[#DFDEE0] w-[80px] p-[8px]"
        />
        <input
          type="year"
          placeholder="YY"
          className="rounded-lg border border-[#DFDEE0] w-[80px] p-[8px]"
        />
      </div>
    </div>
  );
};

export default ExpDate;
