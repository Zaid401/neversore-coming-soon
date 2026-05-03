"use client";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .cs-body {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0f;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .bg-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          animation: drift 12s ease-in-out infinite alternate;
        }
        .bg-orb-1 { width: 520px; height: 520px; background: #ff3b3b; top: -120px; left: -120px; animation-delay: 0s; }
        .bg-orb-2 { width: 400px; height: 400px; background: #ff1744; bottom: -80px; right: -60px; animation-delay: -4s; }
        .bg-orb-3 { width: 300px; height: 300px; background: #ff5555; top: 40%; left: 55%; animation-delay: -8s; }

        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.07); }
        }

        .cs-body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          z-index: 0;
        }

        .cs-card {
          position: relative;
          z-index: 10;
          width: min(420px, 92vw);
          padding: 48px 40px 40px;
          border-radius: 28px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset, 0 40px 80px rgba(0,0,0,0.5);
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cs-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,59,59,0.8), rgba(255,23,68,0.6), transparent);
          border-radius: 100px;
        }

        .logo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 36px;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.1s both;
        }
        .logo-wrap img {
          height: 52px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .cs-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,59,59,0.18);
          border: 1px solid rgba(255,59,59,0.35);
          color: #ff8080;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 20px;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.15s both;
        }

        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ff8080;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .cs-h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(40px, 10vw, 56px);
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 14px;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.2s both;
        }

        .cs-h1 span {
          background: linear-gradient(135deg, #ff8080 0%, #ff3b3b 60%, #ff5555 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-sub {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin-bottom: 36px;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.25s both;
        }

        .cs-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          margin-bottom: 28px;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.3s both;
        }

        .cs-socials {
          display: flex;
          gap: 14px;
          justify-content: center;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.35s both;
        }

        .social-btn {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .social-btn:hover {
          background: rgba(255,59,59,0.2);
          border-color: rgba(255,59,59,0.4);
          transform: translateY(-2px);
        }
        .social-btn svg { width: 18px; height: 18px; fill: rgba(255,255,255,0.6); transition: fill 0.2s; }
        .social-btn:hover svg { fill: #ff8080; }
      `}</style>

      <div className="cs-body">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />

        <div className="cs-card">
          <div className="logo-wrap">
            <img src="/images/darklogo.png" alt="Neversore Logo" />
          </div>

          <div className="cs-badge">
            <span className="badge-dot" />
            In development
          </div>

          <h1 className="cs-h1">
            Coming<br />
            <span>Soon.</span>
          </h1>

          <p className="cs-sub">
            Something exciting is on its way.<br />
            Stay tuned for updates.
          </p>

          <div className="cs-divider" />

          {/* Social Icons */}
          <div className="cs-socials ">
            {/* Instagram */}
            <a href="https://www.instagram.com/be.neversore?igsh=MWF4cTRmNDN1c3dwNA%253D%253" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/9166660436" className="social-btn" aria-label="WhatsApp">
              <FaWhatsapp style={{ width: '18px', height: '18px', fill: 'rgba(255,255,255,0.6)', transition: 'fill 0.2s' }} />
            </a>
            
            {/* Facebook */}
            <a href="https://www.facebook.com/people/Neversore/61561600970274/?mibextid=wwXIfr&rdid=enxQn05PzLFrYYOi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18mDzay9F8%2F%3Fmibextid%3DwwXIfr" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}