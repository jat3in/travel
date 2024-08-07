import { Dumbbell, Plane, Hotel, TreePalm } from "lucide-react";
import { useState } from "react";

const Tab = ({ title, icon, activeTab, onClick }) => {
  const Icon = icon;
  return (
    <div
      className={`box-border flex items-center gap-x-1 rounded-full ${
        activeTab === title
          ? "bg-primary"
          : "border-[1.5px] border-white/70 bg-transparent text-white"
      } cursor-pointer px-4 py-1.5`}
      onClick={onClick}
    >
      <span className="mt-0.5">
        <Icon className="" size={16} />
      </span>
      <span className="">{title}</span>
    </div>
  );
};

const TabGrouped = () => {
  const tabs = [
    {
      title: "Flight",
      icon: Plane,
    },
    {
      title: "Hotel",
      icon: Hotel,
    },
    {
      title: "Holidays",
      icon: TreePalm,
    },
    {
      title: "Activity",
      icon: Dumbbell,
    },
  ];
  const [ActiveTab, setActiveTab] = useState(tabs[0]?.title);

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div className="hide-scrollbar w-full overflow-x-auto">
      <div className="flex w-full gap-x-1.5">
        {tabs.map((tab) => (
          <Tab
            key={tab.title}
            title={tab.title}
            icon={tab.icon}
            onClick={() => handleTabClick(tab.title)}
            activeTab={ActiveTab}
          />
        ))}
      </div>
    </div>
  );
};

export default TabGrouped;
