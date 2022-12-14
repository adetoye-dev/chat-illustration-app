const MessageIn = ({ text, customStyle }) => {
  return (
    <div
      className={`bg-red-500 my-1.5 rounded-xl p-1.5 rounded-bl-md text-xs w-3/4 ${customStyle}`}
    >
      {text}
    </div>
  );
};

export default MessageIn;
