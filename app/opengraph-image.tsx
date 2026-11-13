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
          backgroundColor: "#F5F1E8",
          color: "#0A0A0A",
          display: "flex",
          height: "100%",
          gap: 24,
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <svg height="112" viewBox="0 0 112 112" width="112">
          <path d="M56 10 98 96H80l-8-17H40l-8 17H14L56 10Z" fill="#013B46" />
          <path d="m46 61 10-22 10 22H46Z" fill="#0A0A0A" />
        </svg>
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces, Georgia, serif",
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: "-0.05em",
          }}
        >
          <span style={{ color: "#0A0A0A" }}>{site.brand}</span>
        </div>
        <div
          style={{
            backgroundColor: "#013B46",
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
