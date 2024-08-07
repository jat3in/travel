import {
  Dumbbell,
  Plane,
  Hotel,
  TreePalm,
  Telescope,
  Info,
} from "lucide-react";
import { useEffect, useRef } from "react";

const menuItems = [
  { icon: Plane, label: "Flights" },
  { icon: Hotel, label: "Hotels" },
  { icon: TreePalm, label: "Holiday" },
  { icon: Dumbbell, label: "Activities" },
];

const NavbarMenuItem = ({ icon, label }) => {
  const Icon = icon;

  return (
    <button className="flex w-full">
      <div className="flex w-full items-center gap-x-3 px-4 py-1 hover:bg-background/10">
        <Icon className="my-auto size-4 text-background" />
        <span className="text-md mb-0.5 font-medium text-black">{label}</span>
      </div>
    </button>
  );
};

const NavbarMenuModal = ({ handlefunction }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handlefunction(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handlefunction]);

  useEffect(() => {
    setTimeout(() => {
      handlefunction(false);
    }, 10000);
  }, []);

  return (
    <div
      className="absolute right-0 top-[calc(100%+0.5rem)] z-10 flex min-w-max flex-col rounded-lg bg-white py-2"
      ref={modalRef}
    >
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={index} icon={item.icon} label={item.label} />
      ))}
      <hr className="my-2 border-gray-300" />
      <button className="flex w-full">
        <div className="flex w-full items-center gap-x-3 px-4 py-1 hover:bg-background/10">
          <Telescope className="my-auto size-4 text-background" />
          <span className="text-black">Explorer everywhere</span>
        </div>
      </button>
      <button className="flex w-full">
        <div className="flex w-full items-center gap-x-3 px-4 py-1 hover:bg-background/10">
          <Info className="my-auto size-4 text-background" />
          <span className="text-black">Help</span>
        </div>
      </button>
    </div>
  );
};

export default NavbarMenuModal;
