import { useNavigate } from "react-router-dom"
import { Hero } from "../components/sections/hero"
import { useAuth } from "../context/AuthContext"

export default function Home() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div style={{ background: "var(--clr-bg)", color: "var(--clr-text)" }}>

      <Hero showCreateAccount={!user} />

      {/* ── How it works ── */}
      <section style={{
        padding: "72px 24px",
        background: "var(--clr-bg)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.8px",
            textTransform: "uppercase", color: "var(--clr-primary)",
            marginBottom: 12,
          }}>How it works</p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
            lineHeight: 1.2, color: "var(--clr-text)",
            marginBottom: 16,
          }}>Two paths. One clear answer.</h2>

          <p style={{
            fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
            color: "var(--clr-text-2)", lineHeight: 1.75,
            maxWidth: 500, margin: "0 auto",
          }}>
            Tell us your idea and we'll score it — or tell us your budget and
            we'll rank what works best in your area. Based on 64,000+ real
            Dar es Salaam enterprises.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "var(--clr-primary-lt)",
        borderTop: "1px solid var(--clr-border)",
        padding: "72px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "var(--clr-text)", lineHeight: 1.25, marginBottom: 14,
          }}>Ready to find your best business?</h2>

          <p style={{
            fontSize: "clamp(0.88rem, 1.8vw, 0.97rem)",
            color: "var(--clr-text-2)", lineHeight: 1.72, marginBottom: 32,
          }}>
            Free, instant, and built for Dar es Salaam. No account needed to start.
          </p>

          <button
            onClick={() => user ? navigate("/advisor") : navigate("/register")}
            style={{
              background: "var(--clr-primary)", color: "#fff",
              fontWeight: 700, fontSize: "0.95rem",
              padding: "13px 36px", borderRadius: 999, border: "none",
              cursor: "pointer", whiteSpace: "nowrap",
              boxShadow: "0 4px 18px rgba(13,110,110,0.26)",
              transition: "background 180ms ease, transform 180ms ease",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--clr-primary-dark)"
              ;(e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--clr-primary)"
              ;(e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"
            }}
          >Start Now — It's Free →</button>

          {!user && (
            <p style={{ marginTop: 16, fontSize: "0.85rem", color: "var(--clr-text-3)" }}>
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                style={{
                  background: "none", border: "none",
                  color: "var(--clr-primary)", fontWeight: 600,
                  cursor: "pointer", fontSize: "inherit",
                  textDecoration: "underline", padding: 0,
                }}
              >Log in</button>
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
