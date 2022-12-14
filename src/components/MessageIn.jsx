const MessageIn = ({ text, customStyle }) => {
  return (
    <div
      className={`bg-red-500 my-2 rounded-xl p-2 rounded-bl-md text-xs w-3/4 ${customStyle}`}
    >
      {text}
    </div>
  );
};

export default MessageIn;
