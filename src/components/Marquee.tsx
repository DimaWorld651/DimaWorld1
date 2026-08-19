const items = [
  'Ванілла', 'Економіка', 'Dynmap', 'Версія 26.2', 'Анти-чіт',
  'Без донатів', 'Чесна гра', 'Дружнє ком\'юніті', 'Івенти', 'Оновлення',
];

export default function Marquee() {
  return (
    <div className="relative py-6 border-y border-grass-500/20 bg-obsidian-900/50 overflow-hidden">
      <div className="flex animate-[shimmer_30s_linear_infinite] gap-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="pixel-font text-sm text-grass-400/70 flex items-center gap-8">
            {item}
            <span className="text-diamond-500/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
