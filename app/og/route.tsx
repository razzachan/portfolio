import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Julio Cesar Betoni";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0a0a0a",
          color: "#fff",
          padding: 64,
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div style={{ opacity: 0.6, fontSize: 28, marginBottom: 16 }}>Portfólio</div>
        <div style={{ lineHeight: 1.1 }}>{title}</div>
      </div>
    ),
    size
  );
}
