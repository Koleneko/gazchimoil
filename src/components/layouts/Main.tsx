import { ReactNode } from "react";
import Background from "src/components/core/background";
import Footer from "src/components/core/footer";
import Header from "src/components/core/header";

export interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={"h-full"}>
        <Header />
        <main className="h-100">{children}</main>
        <Footer />
      </div>
      <Background />
    </>
  );
};

export default MainLayout;
