import { Zap, Shield, Globe, Wrench, Users, Server, Clock } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: 'Чиста ванілла',
    desc: 'Жодних модів і кастомних мобів. Тільки оригінальний Minecraft з плагінами для зручності.',
    stat: '100%',
  },
  {
    icon: Shield,
    title: 'Анти-грифери захист',
    desc: 'Авто-бани за X-Ray, Nuker та Kill Aura. Чесна гра без чітерів і грiferів.',
    stat: '99.7%',
  },
  {
    icon: Clock,
    title: 'Стабільний онлайн',
    desc: 'Сервер працює за стабільним графіком. Слідкуй за статусом у нашому Discord, щоб знати, коли можна грати.',
    stat: 'Стабільно',
  },
  {
    icon: Wrench,
    title: 'Свіжі плагіни',
    desc: 'Регулярно оновлюємо і додаємо нові плагіни за запитами гравців. Слухаємо ком\'юніті.',
    stat: '10+',
  },
  {
    icon: Users,
    title: 'Активне ком\'юніті',
    desc: 'Дружні гравці, адекватна модерация і постійні івенти для всіх бажаючих.',
    stat: '12K+',
  },
  {
    icon: Globe,
    title: 'Актуальна версія',
    desc: 'Сервер працює на версії Minecraft 26.2 — найновішій стабільній збірці з усіма новими можливостями.',
    stat: '26.2',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-gradient-to-b from-obsidian-950 to-obsidian-900">
      <div className="section-pad">
        <div className="text-center mb-16">
          <span className="text-diamond-400 text-sm font-bold uppercase tracking-widest">Чому DimaWorld</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Чому ми</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ванілла без зайвого, стабільний сервер і адекватне ком'юніті. Усе, що потрібно для комфортної гри.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="card-block p-6 group hover:border-diamond-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-diamond-500/10 border border-diamond-500/30 flex items-center justify-center group-hover:bg-diamond-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-diamond-400" />
                  </div>
                  <span className="pixel-font text-sm text-diamond-400">{f.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
