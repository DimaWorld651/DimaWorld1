import { useState } from 'react';
import { ImageIcon, X } from 'lucide-react';

const screenshots = [
  {
    url: 'https://images.pexels.com/photos/18419510/pexels-photo-18419510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Нічний спавн',
    desc: 'Стартова точка для всіх гравців',
  },
  {
    url: 'https://images.pexels.com/photos/29738258/pexels-photo-29738258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Торговий хаб',
    desc: 'Магазини та аукціон у центрі світу',
  },
  {
    url: 'https://images.pexels.com/photos/12810660/pexels-photo-12810660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Будівлі гравців',
    desc: 'Творчість нашого ком\'юніті',
  },
  {
    url: 'https://images.pexels.com/photos/29008333/pexels-photo-29008333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Івент-зона',
    desc: 'Тут проходять щомісячні події',
  },
  {
    url: 'https://images.pexels.com/photos/28492550/pexels-photo-28492550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PvP арена',
    desc: 'Дуелі без втрати речей',
  },
  {
    url: 'https://images.pexels.com/photos/662377/pexels-photo-662377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Піксель-арт',
    desc: 'Мистецтво прямо у грі',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-gradient-to-b from-obsidian-950 to-obsidian-900">
      <div className="section-pad">
        <div className="text-center mb-16">
          <span className="text-diamond-400 text-sm font-bold uppercase tracking-widest">Галерея</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Світ DimaWorld</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Підборка скріншотів з сервера — спавн, будівлі гравців, івент-зони та найцікавіші місця.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {screenshots.map((shot, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-grass-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={shot.url}
                alt={shot.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="text-sm font-bold text-white mb-1">{shot.title}</h3>
                <p className="text-xs text-gray-400">{shot.desc}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-md bg-obsidian-950/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="w-4 h-4 text-grass-400" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-obsidian-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={screenshots[active].url}
              alt={screenshots[active].title}
              className="w-full rounded-xl border border-white/10"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white">{screenshots[active].title}</h3>
              <p className="text-sm text-gray-400">{screenshots[active].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
