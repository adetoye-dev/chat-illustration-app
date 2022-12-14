const TypeMessage = () => {
  return (
    <div className="flex p-1.5 rounded-full mt-3 gap-5 bg-white items-center">
      <input type="text" placeholder="Type a message…" className="ml-2 w-3/4" />
      <div className="send-btn p-1 w-7 rounded-full text-white aspect-square bg-gray-700 flex">
        <i className="fa-solid fa-angle-right m-auto"></i>
      </div>
    </div>
  );
};

export default TypeMessage;
