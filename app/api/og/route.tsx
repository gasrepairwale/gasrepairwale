import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const area = searchParams.get("area") || "Your Area"
  const city = searchParams.get("city") || "Pune"
  const service = searchParams.get("service") || "Gas Repair"

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #ea580c 0%, #dc2626 50%, #991b1b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
            background: "rgba(255,255,255,0.15)",
            padding: "12px 24px",
            borderRadius: "50px",
          }}
        >
          <span style={{ fontSize: 24, fontWeight: "bold", letterSpacing: "1px" }}>
            Gas Repair Wale
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: "bold",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.1,
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          {service} in {area}
        </h1>

        {/* City */}
        <p
          style={{
            fontSize: 32,
            opacity: 0.9,
            margin: "0 0 40px 0",
            fontWeight: 600,
          }}
        >
          {city}
        </p>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {["24/7 Emergency", "Licensed Techs", "15-30 Min Response", "Free Quote"].map((feature) => (
            <span
              key={feature}
              style={{
                background: "rgba(255,255,255,0.2)",
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: 20,
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Phone */}
        <div
          style={{
            background: "white",
            color: "#dc2626",
            padding: "16px 40px",
            borderRadius: "12px",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          Call: +91 83027 13127
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
