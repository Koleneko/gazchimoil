import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import TitleLogo from "public/icons/TitleLogo.svg";

export const config = {
  runtime: "experimental-edge",
};

export default function (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "";
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          // background: "rgb(0,195,241)",
          background:
            "linear-gradient(27deg, rgba(0,195,241,1) 0%, rgba(255,255,255,1) 94%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TitleLogo />
        <span
          style={{
            fontSize: 48,
            color: "white",
          }}
        >
          {title}
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
