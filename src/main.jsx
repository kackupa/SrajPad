import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, Check, Globe2, Layers3, Menu, Repeat2, Users, X } from 'lucide-react';
import './style.css';

const art = `${import.meta.env.BASE_URL}art/`;

const chains = [
  { name: 'Base', status: 'PREPARING', color: 'base', symbol: '◆' },
  { name: 'Robinhood Chain', status: 'PREPARING', color: 'robinhood', symbol: '↗' },
  { name: 'Solana', status: 'LATER', color: 'solana', symbol: '≋' },
];

const routes = [
  'M 844 150 C 895 90 925 56 975 70',
  'M 844 150 C 920 80 1020 75 1100 107',
  'M 844 150 C 920 130 987 180 1030 224',
  'M 844 150 C 860 202 875 260 900 300',
  'M 844 150 C 945 230 1035 305 1100 360',
];

function ChainCard({ chain, compact = false }) {
  return <div className={`chain-card ${compact ? 'compact' : ''} ${chain.color}`}>
    <span className="chain-icon" aria-hidden="true">{chain.symbol}</span>
    <span className="chain-name">{chain.name}</span>
    <span className="chain-state"><i />{chain.status}</span>
    {!compact && <span className="chain-bars" aria-hidden="true">▁▂▄▃▅▂▆▄▇</span>}
  </div>;
}

function FlyingRolls() {
  return <svg className="flight-layer" viewBox="0 0 1440 604" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <filter id="route-glow"><feGaussianBlur stdDeviation="5" /></filter>
      <filter id="arm-key" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -3.4 -3.4 -3.4 0 8" result="keyed" />
        <feComposite in="keyed" in2="SourceAlpha" operator="in" />
      </filter>
    </defs>
    {routes.map((path, index) => <g key={path}>
      <path d={path} className="route-glow" filter="url(#route-glow)" />
      <path d={path} className="route-line" />
      <g className="flying-roll">
        <image href={`${art}flying-roll.png`} x="-43" y="-43" width="86" height="86" />
        <animateMotion path={path} dur={`${4.4 + index * .25}s`} begin={`${-index * .8 - 1}s`} repeatCount="indefinite" />
      </g>
    </g>)}
    <g className="throw-arm">
      <image href={`${art}throw-arm-sprite.png`} x="682" y="114" width="206" height="252" filter="url(#arm-key)" />
    </g>
  </svg>;
}

function Feature({ number, title, copy, id, children }) {
  return <article className="feature-card" id={id}>
    <div className="feature-heading"><span>{number}</span><h3>{title}</h3></div>
    <p>{copy}</p>
    {children}
  </article>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = [
    ['Launch', '#launch'], ['Chains', '#chains'], ['Pools', '#pools'],
    ['ARB Network', '#arb-network'], ['Fees', '#fees'], ['Docs', '#featured'],
  ];

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#launch" aria-label="SrajPad home"><img className="brand-frog" src={`${art}frog-mark.png`} alt="" /><span>Sraj<span>Pad</span></span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">{navigation.map(([label, href], index) => <a className={index === 0 ? 'active' : ''} href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="outline-button top-cta" href="#featured">Explore the Launch <ArrowRight size={16} /></a>
    </header>

    <main>
      <section className="hero" id="launch">
        <div className="hero-scene" role="img" aria-label="Pixel art frog operating a toilet paper factory, sending rolls along glowing liquidity routes" />
        <FlyingRolls />
        <div className="hero-copy">
          <p className="eyebrow">LIQUIDITY FINDS A BETTER USE.</p>
          <h1><span>SRAJ</span><b>PAD</b></h1>
          <h2>Launch tokens into<br />an arb network.</h2>
          <p className="lede">Multiple pools. Multiple chains.<br />More routes for arbitrage.</p>
          <div className="hero-actions"><a className="solid-button" href="#featured">Explore Srajtasma <ArrowRight size={18} /></a><a className="outline-button" href="#pools">View Pools</a></div>
        </div>
        <div className="machine-screen"><div className="machine-title"><img src={`${art}frog-mark.png`} alt="" /> SRAJPAD</div><div className="machine-status">PREPARING LIQUIDITY<span className="blink">...</span></div></div>
        <div className="machine-checks"><span><Check size={13} /> BUILD POOLS</span><span><Check size={13} /> ADD ROUTES</span><span><Check size={13} /> MONITOR PRICES</span><span><Check size={13} /> SEND TO CHAINS</span></div>
        <div className="chain-stack" id="chains">{chains.map(chain => <ChainCard chain={chain} key={chain.name} />)}</div>
        <div className="crate-caption">TOILET PAPER<br />IS RESERVE<br />CAPITAL.</div>
        <div className="route-monitor"><span>ARB NETWORK:</span><b>GLOBAL LIQUIDITY FLOWS</b><div className="monitor-map"><span>✦───✦──✦</span><span>╲ ✦──✦ ╱</span><span>└───────┘</span></div></div>
      </section>

      <section className="metrics" aria-label="Launch status">
        <div className="metric"><span className="metric-icon">▣</span><div><strong>1 BILLION</strong><span>SRAJ FIXED SUPPLY</span></div></div>
        <div className="metric"><Layers3 size={26} /><div><strong>4</strong><span>INITIAL POOLS PLANNED</span></div></div>
        <div className="metric"><Repeat2 size={27} /><div><strong>ARB</strong><span>ROUTES IN PREPARATION</span></div></div>
        <div className="metric"><Users size={27} /><div><strong>OPEN</strong><span>COMMUNITY LAUNCH</span></div></div>
        <div className="metric"><Globe2 size={27} /><div><strong>2</strong><span>INITIAL CHAINS PLANNED</span></div></div>
      </section>

      <section className="feature-grid" aria-label="SrajPad features">
        <Feature number="01" title="Launch" copy="The first launch is Srajtasma. Follow the setup as pools and routes are prepared.">
          <div className="mini-launch"><img className="mini-frog" src={`${art}frog-mark.png`} alt="" /><div><span>FIRST TOKEN</span><small>Name: Srajtasma<br />Symbol: SRAJ<br />Supply: 1,000,000,000</small><a href="#featured">EXPLORE <ArrowRight size={13} /></a></div></div>
        </Feature>
        <Feature number="02" title="Chains" copy="Base and Robinhood Chain are the first planned destinations. More chains can follow." id="chains-card"><div className="mini-list">{chains.map(chain => <ChainCard chain={chain} compact key={chain.name} />)}</div></Feature>
        <Feature number="03" title="Pools" copy="The first pool plan covers SRAJ/USDC and SRAJ/WETH on each initial chain." id="pools"><div className="pool-visual"><img src={`${art}flying-roll.png`} alt="" /><div className="pool-data"><span>Token <b>SRAJ</b></span><span>Pairs <b>2</b></span><span>Chains <b>2</b></span><span>Status <b>PLANNED</b></span></div></div><a href="#featured" className="mini-link">Pool Plan <ArrowRight size={14} /></a></Feature>
        <Feature number="04" title="ARB Network" copy="The system watches price differences and routes liquidity when the numbers work." id="arb-network"><div className="network-visual"><div className="network-orbit">✦ ⋯ ✦ ⋯ ✦</div><small><Check size={12} /> Scan price differences<br /><Check size={12} /> Compare net costs<br /><Check size={12} /> Execute eligible swaps<br /><Check size={12} /> Track inventory</small></div></Feature>
        <Feature number="05" title="Fees" copy="Fee details will be published before launch so you can see how the system works." id="fees"><div className="fee-visual"><div className="donut" /><div><b>LP</b> providers<br /><b>ARB</b> operations<br /><b>SRAJ</b> ecosystem</div></div><a href="#featured" className="mini-link">Launch Details <ArrowRight size={14} /></a></Feature>
      </section>

      <section className="featured" id="featured"><div><p className="eyebrow">FIRST LAUNCH / PREPARING</p><h2>Srajtasma <span>$SRAJ</span></h2><p>One billion SRAJ. Base and Robinhood Chain first. Launch contracts and pool addresses will appear here when deployed.</p></div><a className="solid-button" href="#launch">Back to Top <ArrowUpRight size={17} /></a></section>
    </main>
    <footer><span>© 2026 SrajPad</span><span>Liquidity finds a better use.</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
