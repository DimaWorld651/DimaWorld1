import { Rocket, Hammer, Calendar, PartyPopper } from 'lucide-react';

const phases = [
  {
    icon: Rocket,
    phase: 'Фаза 1',
    title: 'Закрите бета-тестування',
    date: 'Серпень 2026',
    desc: 'Запрошені тестери перевіряють плагіни, баланс і стабільність. Збираємо фідбек і доводимо до ладу.',
    status: 'done',
  },
  {
    icon: Hammer,
    phase: 'Фаза 2',
    title: 'Відкритий стрес-тест',
    date: '25–28 серпня 2026',
    desc: 'Сервер відкритий для всіх. Тестуємо навантаження, шукаємо баги. Нагороди за знайдені проблеми.',
    status: 'active',
  },
  {
    icon: Calendar,
    phase: 'Фаза 3',
    title: 'Офіційний запуск',
    date: '1 вересня 2026',
    desc: 'Відкриття Сезону 1. Стартовий івент «Першопрохідці» з ексклюзивними нагородами.',
    status: 'upcoming',
  },
  {
    icon: PartyPopper,
    phase: 'Фаза 4',
    title: 'Сезонні оновлення',
    date: 'Щомісяця',
    desc: 'Нові плагіни, івенти та покращення за запитами ком\'юніті. Контент не закінчується ніколи.',
    status: 'upcoming',
  },
];

const statusStyles: Record<string, { dot: string; label: string; text: string }> = {
  done: { dot: 'bg-grass-500', label: 'Готово', text: 'text-grass-400' },
  active: { dot: 'bg-gold-500 animate-pulse', label: 'В процесі', text: 'text-gold-400' },
  upcoming: { dot: 'bg-gray-600', label: 'Скоро', text: 'text-gray-500' },
};

export default function Roadmap() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-obsidian-950 to-obsidian-900">
      <div className="section-pad">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Дорожня карта</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Шлях до запуску</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ми йдемо до відкриття за чітким планом. Ось де ми зараз і що буде далі.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-grass-500 via-gold-500 to-gray-700 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((p, i) => {
              const Icon = p.icon;
              const style = statusStyles[p.status];
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={p.phase}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 mt-5">
                    <div className={`w-4 h-4 rounded-full ${style.dot} ring-4 ring-obsidian-950`} />
                  </div>

                  {/* Card */}
                  <div className={`w-full sm:w-[calc(50%-3rem)] ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'} pl-16 sm:pl-0`}>
                    <div className="card-block p-6 hover:border-white/30 transition-all">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gold-400" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${style.text}`}>
                          {style.label}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold">{p.phase} · {p.date}</span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
