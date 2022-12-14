const Header = () => {
  return (
    <div className="chat-header flex bg-green-800 h-16 p-2 items-end rounded-b-lg">
      <div className="header-content flex gap-3 items-center grow">
        <div className="arrow-back-btn">
          <i className="fas fa-angle-left text-white"></i>
        </div>
        <div className="user-img w-8 h-8 rounded-full overflow-hidden border-2 border-white">
          <img src="/images/avatar.jpg" alt="user-img" />
        </div>
        <div className="user-data">
          <h2 className="font-bold text-white text-sm">Samuel Green</h2>
          <p className="text-xs text-white">Available to Walk</p>
        </div>
        <div className="menu-btn ml-auto">
          <i className="fas fa-ellipsis-vertical text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
