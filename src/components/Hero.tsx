import { useEffect, useState } from 'react';
import { Play, Copy, Check, Users, Sparkles, Zap } from 'lucide-react';

const SERVER_IP = 'dimaworld.falix.me';

function CountdownPill({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="pixel-font text-2xl sm:text-3xl text-white tabular-nums">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{label}</div>
    </div>
  );
}

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return time;
}

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const target = new Date('2026-09-01T18:00:00');
  const { days, hours, minutes, seconds } = useCountdown(target);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/40 via-obsidian-950/70 to-obsidian-950" />

      {/* Floating blocks */}
      <div className="absolute top-24 left-[8%] w-16 h-16 bg-grass-500/80 rounded-md shadow-block animate-float opacity-80" />
      <div className="absolute top-40 right-[12%] w-12 h-12 bg-diamond-500/80 rounded-md shadow-block-sm animate-float-slow opacity-80" />
      <div className="absolute bottom-32 left-[15%] w-14 h-14 bg-gold-500/80 rounded-md shadow-block animate-float opacity-80" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-48 right-[18%] w-10 h-10 bg-dirt-400/80 rounded-md shadow-block-sm animate-float-slow opacity-80" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-[5%] w-8 h-8 bg-redstone-500/70 rounded-md animate-float opacity-70" style={{ animationDelay: '0.5s' }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-grass-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-diamond-500/20 rounded-full blur-[120px]" />

      <div className="section-pad relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5" />
          Скоро відкриття — Сезон 1
        </div>

        <h1 className="pixel-font text-4xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          DIMA<span className="text-gradient-grass">WORLD</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Ванільний Minecraft з плагінами: економіка, динамічна карта та дружнє ком'юніті.
          Без донатів, без переваг — лише чесна гра. Виживай, будуй і розвивайся у світі DimaWorld!
        </p>

        {/* Countdown */}
        <div className="inline-flex items-center gap-4 sm:gap-8 px-6 sm:px-10 py-5 rounded-2xl bg-obsidian-900/60 backdrop-blur border border-white/10 mb-10 animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <CountdownPill value={days} label="Днів" />
          <span className="text-grass-500 text-2xl">:</span>
          <CountdownPill value={hours} label="Годин" />
          <span className="text-grass-500 text-2xl">:</span>
          <CountdownPill value={minutes} label="Хвилин" />
          <span className="text-grass-500 text-2xl">:</span>
          <CountdownPill value={seconds} label="Секунд" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <a href="#modes" className="btn-primary text-base px-8 py-4 animate-pulse-glow">
            <Play className="w-5 h-5" />
            Що на сервері
          </a>
          <a href="https://discord.gg/YZMzgwRTsr" target="_blank" rel="noopener noreferrer" className="btn-ghost text-base px-8 py-4">
            <Users className="w-5 h-5" />
            Увійти в Discord
          </a>
        </div>

        {/* IP copy box */}
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-obsidian-900/80 backdrop-blur border border-grass-500/30 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <Zap className="w-4 h-4 text-grass-400" />
          <span className="text-sm text-gray-400">IP сервера:</span>
          <code className="text-sm font-bold text-grass-400 pixel-font">{SERVER_IP}</code>
          <button
            onClick={copyIp}
            className="ml-1 w-8 h-8 flex items-center justify-center rounded-md bg-grass-500/20 hover:bg-grass-500/40 text-grass-400 transition-all"
            aria-label="Копіювати IP"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian-950 to-transparent" />
    </section>
  );
}
