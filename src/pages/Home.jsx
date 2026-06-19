// src/pages/Home.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from '../components/common/UI'
import { useAuth } from '../context/AuthContext'
import darHeroImg from '../assets/dar-hero.png'

const features = [
  { icon: '🎯', title: 'Path A — I have an idea', desc: 'Tell us your business idea and location. Get a success probability, expected monthly profit, ROI, and break-even time.' },
  { icon: '💡', title: 'Path B — Suggest me ideas', desc: 'No idea yet? Tell us your capital, location, and background. We rank the best business activities for you — uniquely, not one-size-fits-all.' },
  { icon: '📊', title: 'Premium History', desc: 'Upgrade to save every advisory session. Track how your ideas evolve, compare reports, and build toward your best decision.' },
]

const stats = [
  { number: '33,000+', label: 'Businesses analysed' },
  { number: '5',       label: 'Districts covered' },
  { number: '97',      label: 'Wards mapped' },
  { number: '366',     label: 'Business activities' },
]

export default function Home() {
  const navigate = useNavigate()
  const { user }  = useAuth()

  return (
    <div>
      {/* Hero */}
      <section style={{
        backgroundImage: `linear-gradient(180deg, rgba(20,16,10,0.62) 0%, rgba(20,16,10,0.40) 38%, rgba(20,16,10,0.50) 68%, rgba(20,16,10,0.74) 100%), url(${darHeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundRepeat: 'no-repeat',
        padding: 'var(--space-16) 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="container animate-fadeUp" style={{ textAlign: 'center', color: '#fff', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(232,168,56,0.24)',
            color: 'var(--clr-accent)', padding: '6px 18px',
            borderRadius: '99px', fontSize: '13px', fontWeight: 700,
            marginBottom: 'var(--space-5)', letterSpacing: '.5px',
            border: '1px solid rgba(232,168,56,0.35)',
            backdropFilter: 'blur(6px)',
          }}>
            POWERED BY REAL TANZANIAN BUSINESS DATA
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: 'var(--space-5)',
            textShadow: '0 2px 18px rgba(0,0,0,0.45)',
          }}>
            Your Dar es Salaam<br />Business Advisor
          </h1>

          <p style={{
            fontSize: '1.15rem', color: 'rgba(255,255,255,0.92)',
            maxWidth: '560px', margin: '0 auto var(--space-8)',
            textShadow: '0 1px 12px rgba(0,0,0,0.4)',
          }}>
            Find out if your business idea will succeed — or discover what business
            to start — based on real data from 33,000+ enterprises across Dar es Salaam.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" onClick={() => navigate('/advisor')}>
              Get Free Advice →
            </Button>
            {!user && (
              <Button variant="ghost" size="lg"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(6px)' }}
                onClick={() => navigate('/register')}
              >
                Create Premium Account
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: 'var(--clr-white)', borderBottom: '1px solid var(--clr-border)' }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          padding: 'var(--space-6) var(--space-6)',
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem',
                color: 'var(--clr-primary)', lineHeight: 1,
              }}>{s.number}</div>
              <div style={{ fontSize: '13px', color: 'var(--clr-text-3)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 'var(--space-2)' }}>
            How it works
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--clr-text-2)', marginBottom: 'var(--space-10)' }}>
            Two paths. Instant answers. No guesswork.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-6)',
          }}>
            {features.map(f => (
              <Card key={f.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ fontSize: '2.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.2rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--clr-text-2)', fontSize: '15px', lineHeight: 1.7 }}>{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--clr-primary-lt)',
        padding: 'var(--space-12) 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-4)' }}>
            Ready to find your best business?
          </h2>
          <p style={{ color: 'var(--clr-text-2)', marginBottom: 'var(--space-6)' }}>
            Free, instant, and tailored to Dar es Salaam. No account needed to start.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate('/advisor')}>
            Start Now — It's Free
          </Button>
        </div>
      </section>
    </div>
  )
}
