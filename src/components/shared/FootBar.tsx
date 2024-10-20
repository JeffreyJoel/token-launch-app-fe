import React from "react";
import { Wallet, Grid, Ban, Settings, Home, PlusIcon, ChartNoAxesCombined } from "lucide-react";

const FootBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t-slate-800 text-white p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1">
            <Home size={28} className="text-[#42dd97]" />
          </button>

          <button className="flex flex-col items-center gap-1">
            <PlusIcon size={32} className="text-gray-400" />
          </button>

          <button className="flex flex-col items-center gap-1">
            <ChartNoAxesCombined size={28} className="text-gray-400" />
          </button>

     
{/* 
          <button className="flex flex-col items-center gap-1">
            <Settings size={28} className="text-gray-400" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FootBar;
