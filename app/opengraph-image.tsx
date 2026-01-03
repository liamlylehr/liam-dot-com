import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";

export const alt = SITE_CONFIG.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              margin: 0,
              background: "linear-gradient(to right, #ffffff, #a0a0a0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {SITE_CONFIG.name}
          </h1>
          <p
            style={{
              fontSize: "40px",
              margin: 0,
              color: "#cccccc",
            }}
          >
            {SITE_CONFIG.subtitle}
          </p>
          <p
            style={{
              fontSize: "30px",
              margin: 0,
              marginTop: "40px",
              color: "#888888",
            }}
          >
            A Freestyle Rhapsody
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}