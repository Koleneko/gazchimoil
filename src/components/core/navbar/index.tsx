import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { buttonsInfo } from "src/components/core/navbar/buttons-info";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav
      className="hidden md:flex w-full p-4 sticky top-0 bg-primary items-center justify-center"
      role="navigation"
      aria-label="main navigation"
    >
      <div className={"flex gap-4  items-center justify-center"}>
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

export default Navbar;
