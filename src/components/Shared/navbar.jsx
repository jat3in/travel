import { useState } from "react";
import {
  Languages,
  HeartHandshake,
  CircleUserRound,
  Menu,
  Luggage,
} from "lucide-react";
import NavbarMenuModal from "../Home/navbarMenuModal";
const Navbar = () => {
  const [handleOnClickForModel, sethandleOnClickForModel] = useState(false);
  return (
    <header className="flex w-full flex-row items-center justify-center pt-0 md:pt-2 mb-4">
      {/* logo */}
      <div>
        <a href="#" className="flex items-center gap-x-2">
          <span className="flex items-center justify-center rounded-full bg-primary p-1">
            <Luggage />
          </span>
          <span className="font-medium text-white">Bharat Travel</span>
        </a>
      </div>
      <div className="flex w-full flex-1 items-center justify-end gap-x-1">
        <button className="hidden size-8 rounded-lg text-white transition-colors hover:bg-hover md:block md:size-10">
          <Languages className="mx-auto" />
        </button>
        <button className="size-8 rounded-lg text-white transition-colors hover:bg-hover md:size-10">
          <HeartHandshake className="mx-auto" />
        </button>
        <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg px-2 text-white transition-colors hover:bg-hover">
          <CircleUserRound />
          <span className="mb-0.5 hidden font-semibold md:block">Log in</span>
        </button>
        <button
          className="relative size-8 rounded-lg text-white transition-colors hover:bg-hover md:size-10"
          onClick={() => sethandleOnClickForModel((prev) => !prev)}
        >
          <Menu className="mx-auto" />
          {handleOnClickForModel && (
            <NavbarMenuModal handlefunction={sethandleOnClickForModel} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
