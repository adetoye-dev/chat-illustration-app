const SmartphoneUi = () => {
  return (
    <div className="relative w-72 h-96 rounded-3xl border-8 border-white bg-slate-300 overflow-hidden">
      <div className="phone-top absolute w-2/4 mx-auto h-6 bg-white -top-1 object-center left-1/4 rounded-b-xl"></div>
      <div className="chat-header flex bg-green-800 h-20 p-3 items-end rounded-b-lg">
        <div className="header-content flex gap-3 items-center grow">
          <div className="arrow-back-btn">
            <i className="fas fa-angle-left text-white"></i>
          </div>
          <div className="user-img w-9 h-9 rounded-full overflow-hidden border-2 border-white">
            <img src="/images/avatar.jpg" alt="user-img" />
          </div>
          <div className="user-data">
            <h2 className="font-bold text-white">Samuel Green</h2>
            <p className="text-xs text-white">Available to Walk</p>
          </div>
          <div className="menu-btn ml-auto">
            <i className="fas fa-ellipsis-vertical text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartphoneUi;
