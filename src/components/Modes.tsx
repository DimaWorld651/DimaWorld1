import { Coins, Map, Globe, Server, Users, Wrench } from 'lucide-react';

const plugins = [
  {
    icon: Coins,
    name: 'Економіка',
    tagline: 'Магазини та аукціон',
    desc: 'Повноцінна економіка: гравці можуть створювати свої магазини, виставляти товари на аукціон і торгувати між собою без обмежень.',
    color: 'from-gold-500/20 to-gold-700/5',
    accent: 'text-gold-400',
    border: 'border-gold-500/30',
    tags: ['Аукціон', 'Магазини', 'Валюта'],
  },
  {
    icon: Map,
    name: 'Динамічна карта',
    tagline: 'Dynmap у браузері',
    desc: 'Відкрий карту сервера прямо у браузері і подивись, де знаходяться гравці та будівлі в реальному часі.',
    color: 'from-diamond-500/20 to-diamond-700/5',
    accent: 'text-diamond-400',
    border: 'border-diamond-500/30',
    tags: ['Dynmap', 'Онлайн', 'Карта'],
  },
  {
    icon: Globe,
    name: 'Актуальна версія',
    tagline: 'Minecraft 26.2',
    desc: 'Сервер працює на найновішій версії Minecraft 26.2. Онови гру до цієї версії, щоб підключитися і насолоджуватись усіма новими можливостями.',
    color: 'from-grass-500/20 to-grass-700/5',
    accent: 'text-grass-400',
    border: 'border-grass-500/30',
    tags: ['26.2', 'Найнова', 'Стабільна'],
  },
  {
    icon: Server,
    name: 'Чиста ванілла',
    tagline: 'Без модів і кастомного контенту',
    desc: 'Оригінальний Minecraft без модів, кастомних мобів чи перекосів. Лише ванільна гра з плагінами для зручності.',
    color: 'from-dirt-500/20 to-dirt-700/5',
    accent: 'text-dirt-400',
    border: 'border-dirt-500/30',
    tags: ['Ванілла', 'Без модів', 'Оригінал'],
  },
  {
    icon: Users,
    name: 'Дружнє ком\'юніті',
    tagline: 'Грай разом з іншими',
    desc: 'Адекватні гравці, активний чат і дружня атмосфера. Знайди нових друзів і виживай разом у спільноті DimaWorld.',
    color: 'from-grass-500/20 to-grass-700/5',
    accent: 'text-grass-400',
    border: 'border-grass-500/30',
    tags: ['Спільнота', 'Друзі', 'Атмосфера'],
  },
  {
    icon: Wrench,
    name: 'Регулярні оновлення',
    tagline: 'Слухаємо гравців',
    desc: 'Постійно покращуємо сервер за відгуками ком\'юніті. Додаємо нові плагіни та виправляємо баги за запитами гравців.',
    color: 'from-diamond-500/20 to-diamond-700/5',
    accent: 'text-diamond-400',
    border: 'border-diamond-500/30',
    tags: ['Оновлення', 'Фідбек', 'Покращення'],
  },
];

export default function Modes() {
  return (
    <section id="modes" className="relative py-24 sm:py-32">
      <div className="section-pad">
        <div className="text-center mb-16">
          <span className="text-grass-400 text-sm font-bold uppercase tracking-widest">Що на сервері</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Ванілла з плагінами</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Чистий ванільний Minecraft з плагінами, які роблять гру зручнішою. Без донатів, без переваг — лише чесна гра.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plugins.map((plugin) => {
            const Icon = plugin.icon;
            return (
              <div
                key={plugin.name}
                className={`card-block p-6 group hover:-translate-y-2 transition-all duration-300 hover:border-white/30`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${plugin.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plugin.color} border ${plugin.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${plugin.accent}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{plugin.name}</h3>
                  <p className={`text-sm font-semibold ${plugin.accent} mb-3`}>{plugin.tagline}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{plugin.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {plugin.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
