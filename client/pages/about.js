import Image from "next/image";

const about = () => {
  return (
    <div>
      <Image
        className="slides"
        src="/slide1.png"
        alt="logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default about;
