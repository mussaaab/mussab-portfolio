import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} · ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(900px 500px at 70% 0%, rgba(233,184,114,0.18), rgba(59,50,44,0) 70%), #3B322C",
          color: "#F4EBDD",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#C9B8A6", letterSpacing: 1 }}>
          {`${profile.title.toUpperCase()} · ${profile.discipline.toUpperCase()} · ${profile.location.toUpperCase()}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -3, maxWidth: 980, display: "flex", flexWrap: "wrap" }}>
            I take products from concept to&nbsp;<span style={{ color: "#E08A4F" }}>production.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26 }}>
          <div style={{ display: "flex" }}>{profile.name}</div>
          <div style={{ display: "flex", alignItems: "center", color: "#9DB39A" }}>
            <div style={{ width: 12, height: 12, borderRadius: 12, background: "#9DB39A", marginRight: 14 }} />
            iOS · Android · Web
          </div>
        </div>
      </div>
    ),
    size,
  );
}
