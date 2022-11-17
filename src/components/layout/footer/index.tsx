import Link from "next/link";

import TitleLogoLight from "public/icons/TitleLogoLight.svg";
import { FC } from "react";
import { buttonsInfo } from "src/components/core/navbar/buttons-info";

const Footer: FC = () => {
  return (
    <footer className="bg-neutral-500 w-100 flex items-center flex-col px-5 md:flex-row py-10">
      <div className="justify-self-center md:justify-self-auto flex h-100 ">
        <TitleLogoLight className="w-36 md:w-72 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4 h-100 grow ">
        <div className="flex flex-wrap justify-center md:divide-x gap-2 items-center">
          {buttonsInfo.map((button) => (
            <div
              key={button.title}
              className="p-2 text-white text-sm cursor-pointer hover:text-slate-300"
            >
              <Link href={button.link}>
                <span>{button.title}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className={"self-center justify-self-center"}>
          <p className="text-white text-center text-xs">
            ООО &quot;ГазХимОйл&quot;, Россия, Московская обл, <br />
            г. Домодедово, мкр. Северный, ул Гагарина, д. 63, офис 16
            <br />
            Телефон: +7 (925) 547-22-62, E-mail: info@gazchemoil.ru
          </p>
        </div>
      </div>
      <div className="flex h-100 grow "></div>
    </footer>
  );
};

export default Footer;
