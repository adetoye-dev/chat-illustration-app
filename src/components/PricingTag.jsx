const PricingTag = ({ duration, price }) => {
  return (
    <div className="w-4/5 p-3 rounded-xl rounded-bl-md flex gap-3 bg-green-400 items-center text-white my-2">
      <div className="btn w-5 aspect-square border-white border-2 rounded-full"></div>
      <p className="text-xs">{duration}</p>
      <h2 className="font-bold text-lg ml-auto">${price}</h2>
    </div>
  );
};

export default PricingTag;
