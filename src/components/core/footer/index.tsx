import Link from "next/link";
import { FC } from "react";

import TitleLogoLight from "public/icons/TitleLogoLight.svg";
import { buttonsInfo } from "src/components/core/header";

const Footer: FC = () => {
  return (
    <footer className="bg-neutral-500 w-100 flex py-10">
      <div className="flex h-100 ">
        <TitleLogoLight className="w-72 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4 h-100 ">
        <div className="flex divide-x gap-2 items-center">
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
          <span className="text-white text-xs">
            ООО ПФ &quot;Ока&quot;, Россия, 606100 Нижегородская обл., г.
            Павлово, ул.Аллея Ильича, 43.
            <br />
            Телефон: (83171) 5-75-44, 5-73-43, 5-76-06, Факс: (83171) 5-73-48,
            E-mail: office@okapf.ru
          </span>
        </div>
      </div>
      <div className="flex h-100 "></div>
    </footer>
  );
};

export default Footer;
