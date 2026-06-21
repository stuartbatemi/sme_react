import { useNavigate } from "react-router-dom"
import { Hero } from "../components/sections/hero"
import { PathCard } from "../components/ui/path-card"
import { Button } from "../components/common/UI"
import { useAuth } from "../context/AuthContext"
import pathAThumb from "../assets/path-a-card-bg.jpg"
import pathBThumb from "../assets/path-b-card-bg.jpg"

export default function Home() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div>
      <Hero showCreateAccount={!user} />

      {/* Two paths — full-bleed image cards, reveal text on hover */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-display mb-2">How it works</h2>
          <p className="text-center mb-10" style={{ color: "var(--clr-text-2)" }}>
            Two paths. Instant answers. No guesswork.
          </p>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <PathCard
              variant="image-only"
              image={pathAThumb}
              title="Path A — I have an idea"
              onClick={() => navigate("/advisor")}
            />
            <PathCard
              variant="image-only"
              image={pathBThumb}
              title="Path B — Suggest me ideas"
              onClick={() => navigate("/advisor")}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--clr-primary-lt)", padding: "var(--space-12) 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.8rem", marginBottom: "var(--space-4)" }}>
            Ready to find your best business?
          </h2>
          <p style={{ color: "var(--clr-text-2)", marginBottom: "var(--space-6)" }}>
            Free, instant, and tailored to Dar es Salaam. No account needed to start.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate("/advisor")}>
            Start Now — It's Free
          </Button>
        </div>
      </section>
    </div>
  )
}
