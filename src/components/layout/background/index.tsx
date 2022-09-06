import Image from "next/image";
import { FC, useEffect, useState } from "react";

import background from "public/images/background.png";

const Background: FC = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const onResize = () => {
      if (window === undefined) {
        return;
      }

      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={`-z-10 h-[120%] w-full bg-scroll absolute top-0 sm:fixed md:blur-sm`}
    >
      <Image
        src={background}
        layout={"fill"}
        objectFit={"cover"}
        priority
        objectPosition={"50% 90%"}
        // objectPosition={"center"}
        alt={"background image"}
      />
    </div>
  );
};

export default Background;
