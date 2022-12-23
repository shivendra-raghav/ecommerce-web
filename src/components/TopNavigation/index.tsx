import { FaSearch, FaHashtag, FaRegBell, FaUserCircle } from 'react-icons/fa';

function Search() {
  return (
    <div className="search">
      <input className="search-input" type="text" placeholder="Search..." />
      <FaSearch size="18" className="text-secondary my-auto" />
    </div>
  );
}
function BellIcon() {
  return <FaRegBell size="24" className="top-navigation-icon" />;
}
function UserCircle() {
  return <FaUserCircle size="24" className="top-navigation-icon" />;
}
function HashtagIcon() {
  return <FaHashtag size="20" className="title-hashtag" />;
}
function Title() {
  return <h5 className="title-text">tailwind-css</h5>;
}

function TopNavigation() {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
}

export default TopNavigation;
