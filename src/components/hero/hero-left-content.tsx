import { categories } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";

const HeroLeftContent = () => {
  return (
    <div className="flex flex-col space-y-5 p-3 h-[70vh] w-60 shadow-sm bg-light/25 rounded-md">
      <div className="flex items-center space-x-3">
        <LayoutGrid className="w-6 h-6" />
        <h3>Categories</h3>
      </div>

      <div className="flex flex-col space-y-3">
        {categories.map((item) => (
          <div className="flex items-center space-x-3" key={item.name}>
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroLeftContent;
