import {
  HeroLeftContent,
  HeroMainContent,
  HeroRightContent,
} from "@/components";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-4">
      <HeroLeftContent />
      <HeroMainContent />
      <HeroRightContent />
    </div>
  );
};

export default Hero;
