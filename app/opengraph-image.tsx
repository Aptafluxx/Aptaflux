import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Aptaflux";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fraunces = await readFile(
    join(process.cwd(), "public", "fonts", "fraunces-700.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#142130",
          color: "#F4EDE0",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: "-0.05em",
          }}
        >
          {site.brand}
        </div>
        <div
          style={{
            backgroundColor: "#FF5B2E",
            bottom: 96,
            height: 5,
            left: 96,
            position: "absolute",
            width: 104,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: fraunces,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
