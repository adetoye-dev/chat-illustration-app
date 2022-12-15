const MessageIn = ({ text, customStyle }) => {
  return (
    <div
      className={` bg-very-pale-violet text-moderate-violet my-1.5 rounded-xl p-1.5 rounded-bl-md text-xs w-3/4 ${customStyle}`}
    >
      {text}
    </div>
  );
};

export default MessageIn;
