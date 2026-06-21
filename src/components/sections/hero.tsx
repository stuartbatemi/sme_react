import { useNavigate } from "react-router-dom"
import { Spotlight } from "../ui/spotlight"
import { ChatBotWidget } from "../ui/chat-bot-widget"
import darHeroImg from "../../assets/dar-hero.png"

interface HeroProps {
  showCreateAccount?: boolean
}

export function Hero({ showCreateAccount = true }: HeroProps) {
  const navigate = useNavigate()

  return (
    <section
      className="relative isolate min-h-[640px] overflow-hidden bg-neutral-950"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,8,6,0.70) 0%, rgba(10,8,6,0.40) 40%, rgba(10,8,6,0.55) 70%, rgba(10,8,6,0.85) 100%), url(${darHeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
      }}
    >
      <Spotlight className="-top-32 left-0 md:left-40 md:-top-10" fill="white" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-black/20" />

      <div className="container relative z-10 mx-auto flex min-h-[640px] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* "Pop" tagline — what ORin actually is, in one breath */}
        <div className="mb-6 max-w-xl rounded-2xl border border-accent/35 bg-accent/15 px-5 py-3 text-sm font-medium text-accent backdrop-blur-md animate-fadeUp">
          <span className="font-semibold">ORin</span> is a data-driven business
          advisor — it studies 33,000+ real Dar es Salaam enterprises to tell you,
          in seconds, whether your idea will work, or which one will.
        </div>

        <h1 className="animate-fadeUp font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Business Advisor
        </h1>

        <p className="animate-fadeUp mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg">
          Find out if your business idea will succeed — or discover what business
          to start — based on real data from 33,000+ enterprises across Dar es Salaam.
        </p>

        <div className="animate-fadeUp mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => navigate("/advisor")}
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_8px_24px_rgba(232,168,56,0.4)] transition hover:brightness-105 active:scale-[0.98]"
          >
            Get Free Advice →
          </button>
          {showCreateAccount && (
            <button
              onClick={() => navigate("/register")}
              className="rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.98]"
            >
              Create Premium Account
            </button>
          )}
        </div>
      </div>

      <ChatBotWidget onGetStarted={() => navigate("/advisor")} />
    </section>
  )
}
