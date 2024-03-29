import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import Email from "public/icons/Email.svg";
import MenuBtn from "public/icons/MenuBtn.svg";
import Phone from "public/icons/Phone.svg";
import TitleLogo from "public/icons/TitleLogo.svg";
import { FC, Fragment } from "react";
import Navbar from "src/components/core/navbar";
import { buttonsInfo } from "src/components/core/navbar/buttons-info";
import MyLink from "src/components/ui/HUILink";
import useWindowDimensions from "src/hooks/useWindowDimensions";

const DropDownMenu: FC = () => {
  const { asPath } = useRouter();

  return (
    <Menu>
      <Menu.Button className={"w-5"}>
        <MenuBtn />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={
            'absolute inset right-0 top-0 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"'
          }
        >
          {buttonsInfo.map((button) => (
            <Menu.Item key={button.title}>
              {({ active }) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <MyLink href={button.link} scroll={false}>
                  <span
                    className={`block px-4 py-2 text-sm text-black focus:bg-neutral-300 hover:bg-neutral-300 ${
                      (asPath === button.link || active) && "bg-neutral-300"
                    }`}
                  >
                    {button.title}
                  </span>
                </MyLink>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {() => (
              <div className={"flex items-center gap-2 px-4 py-2 "}>
                <a
                  className={"flex items-center gap-2"}
                  href="tel:+79255472262"
                >
                  <Phone className="w-5" />
                  <span
                    aria-label={"Номер телефона"}
                    className="text-sm text-black"
                  >
                    +7 (925) 547-22-62
                  </span>
                </a>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {() => (
              <div className={"flex items-center gap-2 px-4 py-2 "}>
                <a
                  className={"flex items-center gap-2"}
                  href="mailto:info@gazchemoil.ru"
                >
                  <Email className="w-5" />
                  <span className="text-sm text-black">info@gazchemoil.ru</span>
                </a>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const Header: FC = () => {
  const [, width] = useWindowDimensions();

  return (
    <>
      <div className="w-full h-16 md:h-32 p-3 bg-white flex items-center justify-between">
        <Link href={"/"} passHref={true} scroll={false}>
          <a>
            <TitleLogo className="w-32 md:w-80 cursor-pointer" />
          </a>
        </Link>

        {width && width <= 768 ? (
          <DropDownMenu />
        ) : (
          <div className="flex flex-col gap-1 mr-5">
            <div className={"flex w-100 gap-2 items-center justify-end"}>
              <a href="tel:+79255472262" className={"flex items-center gap-2"}>
                <span
                  aria-label={"Номер телефона"}
                  className="font-semibold text-lg text-neutral-500"
                >
                  +7 (925) 547-22-62
                </span>
                <Phone className="w-5" />
              </a>
            </div>
            <div className={"flex w-100 gap-2 items-center justify-end"}>
              <a
                href="mailto:info@gazchemoil.ru"
                className="font-semibold text-lg flex items-center gap-2 text-neutral-500"
              >
                <span className="font-semibold text-lg text-neutral-500">
                  info@gazchemoil.ru
                </span>
                <Email className="w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
      {width && width >= 768 && <Navbar />}
    </>
  );
};

export default Header;
