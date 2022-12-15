const PricingTag = ({ duration, price }) => {
  return (
    <div className="w-4/5 p-1.5 rounded-xl rounded-bl-md flex gap-3 bg-gradient-to-r from-light-magenta to-light-violet items-center text-white my-1.5">
      <div className="btn w-4 aspect-square border-very-light-magenta border-2 rounded-full"></div>
      <p className="text-xs">{duration}</p>
      <h2 className="font-bold text-md ml-auto">${price}</h2>
    </div>
  );
};

export default PricingTag;
