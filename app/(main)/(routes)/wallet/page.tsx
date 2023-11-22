import * as React from "react";

// NOTE: TODO: make url like from localhost/wallet  to localhost/[...userId]/wallet or something like

const Wallet = () => (
  <div className="flex h-full wallet_font">
    <div className="w-1/3 p-4 flex flex-col  bg-[#f1f5f9] gap-20">
      <div className="self-center mb-10">
        <h1 className="text-5xl font-medium text-[#2c4e84]">My Wallet</h1>
      </div>
      <div className="flex justify-between">
        <div className="font-light text-4xl">Balance</div>
        <div className="text-blue-400 font-bold text-3xl">$4,265.56</div>
      </div>
    </div>
    <div className="w-2/3 p-4">
      <div className="text-center text-5xl text-[#630c0ca9] mb-96">
        Transactions
      </div>
      <div className="text-center">No Transactions yet ...</div>
    </div>
  </div>
);

export default Wallet;
