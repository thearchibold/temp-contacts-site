import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Temp Contacts — Contacts That Expire"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  const iconData = await readFile(join(process.cwd(), "public/icon-64x64.png"))
  const iconBase64 = `data:image/png;base64,${iconData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <img
            src={iconBase64}
            width={56}
            height={56}
            style={{ borderRadius: "12px" }}
          />
          <span
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
            }}
          >
            Temp Contacts
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "56px",
            fontWeight: 700,
            color: "#fafafa",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          <span>Your phone contacts</span>
          <span style={{ color: "#f97316" }}>shouldn&apos;t be forever</span>
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Save contacts with an expiry timer — they auto-delete when
          time&apos;s up. Free on iOS and Android.
        </div>
      </div>
    ),
    { ...size },
  )
}
