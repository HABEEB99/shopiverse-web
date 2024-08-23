import Image from "next/image";

const HeroRightContent = () => {
  return (
    <div className="relative flex h-[70vh] w-60 flex-col items-center justify-center space-y-5 overflow-hidden rounded-md bg-light/25 p-3 shadow-sm">
      <Image
        src="/adverts.jpg"
        alt="Adverts"
        fill
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default HeroRightContent;
