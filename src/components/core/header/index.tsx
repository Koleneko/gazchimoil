import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import Email from "public/icons/Email.svg";
import Phone from "public/icons/Phone.svg";
import TitleLogo from "public/icons/TitleLogo.svg";

export const buttonsInfo = [
  {
    title: "О нас",
    link: "/",
  },
  {
    title: "Продукция",
    link: "products",
  },
  {
    title: "Услуги",
    link: "services",
  },
  {
    title: "Клиентам",
    link: "customer-info",
  },
  {
    title: "Контакты",
    link: "contacts",
  },
  {
    title: "Прайс-лист",
    link: "price-list",
  },
];

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav
      className="w-full p-4 sticky top-0 bg-primary items-center justify-center"
      role="navigation"
      aria-label="main navigation"
    >
      <div className={"flex gap-4 items-center justify-center"}>
        {buttonsInfo.map((button) => (
          <div
            key={button.title}
            className={
              "p-2 text-white text-lg cursor-pointer hover:text-slate-300" +
              (router.pathname === button.link ? " text-slate-300" : "")
            }
          >
            <Link href={button.link} scroll={false}>
              <span>{button.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

const Header: FC = () => {
  return (
    <>
      <div className="w-full h-32 p-3 bg-white flex items-center justify-between">
        <Link href={"/"} passHref={true} scroll={false}>
          <a>
            <TitleLogo className="w-80 cursor-pointer" />
          </a>
        </Link>
        <div className="flex flex-col gap-1">
          <div className={"flex w-100 gap-2 items-center justify-end"}>
            <span
              aria-label={"Номер телефона"}
              className="font-semibold text-lg text-neutral-500"
            >
              +7 (999) 999-99-99
            </span>
            <a href="tel:+79999999999">
              <Phone className="w-5" />
            </a>
          </div>
          <div className={"flex w-100 gap-2 items-center justify-end"}>
            <span className="font-semibold text-lg text-neutral-500">
              GazChimOil@mail.com
            </span>
            <a
              href="mailto:GazChimOil@mail.com"
              className="font-semibold text-lg text-neutral-500"
            >
              <Email className="w-5" />
            </a>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
