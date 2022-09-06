import Link from "next/link";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default MyLink;
