import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#142130",
          border: "2px solid #FF5B2E",
          borderRadius: 2,
          color: "#F4EDE0",
          display: "flex",
          fontFamily: "Fraunces, Georgia, serif",
          fontSize: 44,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {site.brand.slice(0, 1)}
      </div>
    ),
    size,
  );
}
