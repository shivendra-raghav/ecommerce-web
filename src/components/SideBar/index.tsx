import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import PropTypes from 'prop-types';

interface Props {
  icon: PropTypes.ReactElementLike;
  text: string;
}

function SideBarIcon({ icon, text = 'tooltip 💡' }: Props) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}

function Divider() {
  return <hr className="sidebar-hr" />;
}

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text="Fire" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text="Plus" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Lightning" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" />
    </div>
  );
}

export default SideBar;
