import Image from "next/image";
import { FC } from "react";

import background from "public/images/background.png";

const Background: FC = () => {
  return (
    <div className={"-z-10 h-full w-full fixed top-0 md:blur-sm"}>
      <Image
        src={background}
        layout={"fill"}
        objectFit={"cover"}
        objectPosition={"50% 90%"}
        alt={"background image"}
      />
    </div>
  );
};

export default Background;
