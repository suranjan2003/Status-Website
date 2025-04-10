import React, { useState, useEffect, act } from "react";
import { FaCogs, FaTools, FaUsers, FaSlidersH } from "react-icons/fa";

const Sidebar = ({ activeSection,setActiveSection }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const iconMap = {
	services: <FaCogs size={20} />,
	incidents: <FaTools size={20} />,
	"team-members": <FaUsers size={20} />,
	settings: <FaSlidersH size={20} />,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Services", key: "services" },
    { label: "Incidents", key: "incidents" },
    { label: "Team Members", key: "team-members" },
    { label: "Settings", key: "settings" },
  ];

  return isSmallScreen ? (
    <div className="flex overflow-x-auto w-full bg-gray-100">
      <ul className="flex space-x-4 p-4 overflow-x-auto">
  {navItems.map(({ label, key }) => (
    <li key={key} className="flex-shrink-0 w-32 h-24">
      <button
        onClick={() => setActiveSection(key)}
        className={`w-full h-full flex flex-col items-center justify-center rounded-lg border text-center transition ${
          activeSection === key
            ? "bg-gray-300 border-gray-400"
            : "bg-white hover:bg-gray-200 border-transparent"
        }`}
      >
        <div className="mb-2 text-gray-700">{iconMap[key]}</div>
        <span className="text-sm font-medium">{label}</span>
      </button>
    </li>
  ))}
</ul>
    </div>
  ) : (
    <div className="w-62 h-[100vh] bg-gray-100 flex flex-col pt-0 p-4">
      <h2 className="text-2xl font-bold my-6">Admin Dashboard</h2>
      <ul className="text-xl space-y-2">
        {navItems.map(({ label, key }) => (
          <li key={key}>
            <button
              onClick={() => setActiveSection(key)}
			  className={`block py-2 px-4 rounded hover:bg-gray-400 w-full text-left ${
				activeSection === key ? "bg-gray-300" : ""
			  }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
