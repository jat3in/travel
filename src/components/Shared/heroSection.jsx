import Navbar from "./navbar";
import TabGrouped from "./tabGrouped";

const HeroSection = () => {
  return (
    <div className="flex w-full items-start justify-center bg-background p-3 md:p-8 lg:p-12">
      <div className="w-full max-w-[1200px]">
        <Navbar />
        <TabGrouped />
      
        
      </div>
    </div>
  );
};

export default HeroSection;
