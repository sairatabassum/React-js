import React from "react";
import Benefit from "../Benefit/Benefit";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const PricingOption = (props) => {
  const { name, price, benefits } = props.options;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl font-bold text-left">Benefits: </h3>

        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-500 flex justify-center w-full py-2 rounded font-bold mt-6 text-white hover:text-green-700">
        Buy Now
        <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
