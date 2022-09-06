import React, { FC } from "react";

export interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-90 px-36 py-24 rounded-2xl">
      {children}
    </div>
  );
};

export default ContentContainer;
