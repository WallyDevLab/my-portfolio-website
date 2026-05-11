import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Katlego Barayi — Software Engineer · Open to Work"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0F172A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "#3B82F6",
          }}
        />

        {/* Top: logo mark + site name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "#1E3A5F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
              color: "#93C5FD",
            }}
          >
            W
          </div>
          <span style={{ fontSize: "18px", color: "#64748B", letterSpacing: "0.02em" }}>
            wally-dev-lab.vercel.app
          </span>
        </div>

        {/* Middle: name + tagline + badges */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#F1F5F9",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Katlego Barayi
          </div>
          <div style={{ fontSize: "32px", color: "#94A3B8", fontWeight: 400 }}>
            Software Engineer · Open to Work
          </div>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <div
              style={{
                background: "#1E3A5F",
                border: "1px solid #1E40AF",
                borderRadius: "999px",
                padding: "6px 16px",
                fontSize: "18px",
                color: "#93C5FD",
                fontWeight: 500,
              }}
            >
              Full-Stack
            </div>
            <div
              style={{
                background: "#1E3A5F",
                border: "1px solid #1E40AF",
                borderRadius: "999px",
                padding: "6px 16px",
                fontSize: "18px",
                color: "#93C5FD",
                fontWeight: 500,
              }}
            >
              Next.js · TypeScript · Node.js
            </div>
          </div>
        </div>

        {/* Bottom: URL indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3B82F6",
            }}
          />
          <span style={{ fontSize: "18px", color: "#475569" }}>
            wally-dev-lab.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}