import React from "react";
import PricingOption from "../PricingOptions/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Free", price: 0 },
    { id: 2, name: "Regula", price: 20 },
    { id: 1, name: "Premium", price: 30 },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-4">
      <h1 className="text-6xl font-mono text-white">Best Deal of the town</h1>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} options={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
