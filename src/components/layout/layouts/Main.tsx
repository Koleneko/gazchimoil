import { ReactNode } from "react";
import Background from "src/components/layout/background";
import Footer from "src/components/layout/footer";
import Header from "src/components/layout/header";

export interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={"h-screen w-full"}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Background />
      </div>
    </>
  );
};

export default MainLayout;
