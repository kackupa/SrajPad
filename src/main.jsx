import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, CircleDollarSign, Globe2, Layers3, Menu, Radio, Repeat2, Users, X } from 'lucide-react';
import './style.css';

const chains = [
  { name: 'Base', state: 'LIVE', color: 'blue', glyph: '−' },
  { name: 'Robinhood Chain', state: 'LIVE', color: 'green', glyph: '↗' },
  { name: 'Solana', state: 'COMING SOON', color: 'purple', glyph: '≋' },
];

const metrics = [
  ['12.4M', 'TOTAL VOLUME (LP ARB)', CircleDollarSign],
  ['3,842', 'TOKENS LAUNCHED', Layers3],
  ['28,416', 'ARB ROUTES EXECUTED', Repeat2],
  ['9,771', 'TRADERS', Users],
  ['3', 'CHAINS (2 LIVE)', Globe2],
];

function ChainCard({ chain }) {
  return <div className={`chain-card ${chain.state !== 'LIVE' ? 'is-soon' : ''}`}>
    <span className={`chain-icon ${chain.color}`}>{chain.glyph}</span>
    <span className="chain-name">{chain.name}</span>
    <span className="chain-state"><i /> {chain.state}</span>
    <span className="bars">▂▅▃▇▆</span>
  </div>;
}

function App() {
  const [open, setOpen] = React.useState(false);
  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#launch" aria-label="SrajPad home"><span className="brand-frog">🐸</span><span>Sraj<span>Pad</span></span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav open' : 'nav'}>
        {['Launch', 'Chains', 'Pools', 'ARB Network', 'Fees', 'Docs'].map((item, index) => <a className={index === 0 ? 'active' : ''} href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}
      </nav>
      <a className="outline-button top-cta" href="#launch">Launch a Token <ArrowRight size={16} /></a>
    </header>

    <main>
      <section className="hero" id="launch">
        <div className="hero-copy">
          <p className="eyebrow">LIQUIDITY FINDS A BETTER USE.</p>
          <h1><span>SRAJ</span><b>PAD</b></h1>
          <h2>Launch tokens into<br />an arb network.</h2>
          <p className="lede">Multiple pools. Multiple chains.<br />More routes for arbitrage.</p>
          <div className="hero-actions"><a className="solid-button" href="#featured">Launch a Token <ArrowRight size={18} /></a><a className="outline-button" href="#pools">View Pools</a></div>
        </div>
        <div className="hero-art" aria-label="Illustration of liquidity routes between chains">
          <div className="route route-one" /><div className="route route-two" /><div className="route route-three" />
          <div className="paper paper-one">💩</div><div className="paper paper-two">💩</div><div className="paper paper-three">💩</div>
          <div className="operator"><div className="frog-face"><span>● ●</span><strong>▔</strong></div><div className="frog-body">▦</div><div className="console"><b>SRAJPAD</b><small>DEPLOYING LIQUIDITY...</small></div></div>
          <div className="hero-terminal"><span>ARB NETWORK:</span><b>GLOBAL LIQUIDITY FLOWS</b><div className="terminal-map">◌ ─── ◌ ── ◌<br />╲  ◌ ─── ◌  ╱</div></div>
        </div>
        <div className="chain-stack">{chains.map(chain => <ChainCard chain={chain} key={chain.name} />)}</div>
      </section>

      <section className="metrics">{metrics.map(([value, label, Icon]) => <div className="metric" key={label}><Icon size={24} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</section>

      <section className="feature-grid" id="pools">
        <Feature number="01" title="Launch" copy="Launch your token with built-in liquidity and ARB routing from day one."><div className="mini-launch"><span>NEW TOKEN</span><small>Name: SRAJ<br />Symbol: SRAJ<br />Supply: 1,000,000,000</small><button>LAUNCH <ArrowRight size={13} /></button></div></Feature>
        <Feature number="02" title="Chains" copy="Launch to multiple chains. Base and Robinhood Chain live now. Solana coming soon."><div className="mini-list">{chains.map(chain => <ChainCard chain={chain} key={chain.name} />)}</div></Feature>
        <Feature number="03" title="Pools" copy="Automatic pool creation across chains for deeper liquidity and more routes."><div className="pool-visual">💩 💩 💩<small>Token <b>SRAJ</b><br />Pools <b>6</b><br />Chains <b>2</b></small></div><a href="#pools" className="mini-link">View Pools <ArrowRight size={14} /></a></Feature>
        <Feature number="04" title="ARB Network" copy="Cross-chain arbitrage routes liquidity where it works hardest."><div className="network-visual"><span>◌──◌──◌</span><span>╲ ◌─◌ ╱</span><small><Check size={12} /> Scan price differences<br /><Check size={12} /> Route across chains<br /><Check size={12} /> Execute swaps<br /><Check size={12} /> Return liquidity</small></div></Feature>
        <Feature number="05" title="Fees" copy="Fair and transparent fees. A portion goes to the ecosystem and liquidity providers."><div className="fee-visual"><div className="donut" /><div><b>70%</b> LP Providers<br /><b>20%</b> SrajPad Treasury<br /><b>10%</b> Ecosystem</div></div><a href="#fees" className="mini-link">Fee Details <ArrowRight size={14} /></a></Feature>
      </section>

      <section className="featured" id="featured"><div><p className="eyebrow">FIRST LAUNCH / PREPARING</p><h2>Srajtasma <span>$SRAJ</span></h2><p>The first questionable idea to enter the SrajPad launch network.</p></div><a className="solid-button" href="#launch">View Launch <ArrowUpRight size={17} /></a></section>
    </main>
    <footer><span>© 2026 SrajPad Labs</span><span>Built for liquidity that refuses to sit still.</span></footer>
  </div>;
}

function Feature({ number, title, copy, children }) { return <article className="feature-card"><div className="feature-heading"><span>{number}</span><h3>{title}</h3></div><p>{copy}</p>{children}</article>; }

createRoot(document.getElementById('root')).render(<App />);
