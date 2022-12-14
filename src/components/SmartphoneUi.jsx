import Header from "./Header";
import MessageIn from "./MessageIn";
import MessageOut from "./MessageOut";
import PictureMessage from "./PictureMessage";
import PricingTag from "./PricingTag";
import TypeMessage from "./TypeMessage";

const SmartphoneUi = () => {
  return (
    <div className="relative w-72 h-auto rounded-3xl border-8 border-white bg-slate-300 overflow-hidden">
      <div className="phone-top absolute w-2/4 mx-auto h-5 bg-white -top-1 object-center left-1/4 rounded-b-xl"></div>
      <Header />
      <div className="chats p-2">
        <MessageIn text="That sounds great. I’d be happy with that." />
        <MessageIn text="Could you send over some pictures of your dog, please?" />
        <PictureMessage />
        <MessageOut text="Here are a few pictures. She’s a happy girl!" />
        <MessageOut text="Can you make it?" />
        <MessageIn
          text="She looks so happy! The time we discussed works. How long shall I take her out for?"
          customStyle="mt-3"
        />
        <PricingTag duration="30 minute walk" price="29" />
        <PricingTag duration="1 hour walk" price="49" />
        <TypeMessage />
      </div>
    </div>
  );
};

export default SmartphoneUi;
