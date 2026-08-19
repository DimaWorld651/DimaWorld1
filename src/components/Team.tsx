import { Crown, Shield, Wrench, MessageCircle } from 'lucide-react';

const team = [
  {
    icon: Crown,
    name: 'Dima',
    role: 'Власник та адмін',
    desc: 'Засновник DimaWorld. Відповідає за розвиток сервера, плагіни та загальний напрямок.',
    color: 'from-gold-500/20 to-gold-700/5',
    accent: 'text-gold-400',
    border: 'border-gold-500/30',
    badge: 'Owner',
  },
  {
    icon: Shield,
    name: 'Олексій',
    role: 'Головний модератор',
    desc: 'Слідкує за порядком, розглядає скарги та допомагає гравцям з проблемами.',
    color: 'from-grass-500/20 to-grass-700/5',
    accent: 'text-grass-400',
    border: 'border-grass-500/30',
    badge: 'Admin',
  },
  {
    icon: Wrench,
    name: 'Максим',
    role: 'Технічний адмін',
    desc: 'Відповідає за стабільність сервера, оновлення плагінів та технічну підтримку.',
    color: 'from-diamond-500/20 to-diamond-700/5',
    accent: 'text-diamond-400',
    border: 'border-diamond-500/30',
    badge: 'Tech',
  },
  {
    icon: MessageCircle,
    name: 'Софія',
    role: 'Ком\'юніті-менеджер',
    desc: 'Організовує івенти, веде соцмережі та підтримує активність у Discord.',
    color: 'from-redstone-500/20 to-redstone-700/5',
    accent: 'text-redstone-400',
    border: 'border-redstone-500/30',
    badge: 'Community',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="section-pad">
        <div className="text-center mb-16">
          <span className="text-grass-400 text-sm font-bold uppercase tracking-widest">Команда</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Хто стоїть за DimaWorld</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Невелика, але віддана команда, яка працює над сервером щодня, щоб ти мав найкращий ігровий досвід.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className={`card-block p-6 group hover:-translate-y-2 transition-all duration-300 ${member.border}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} border ${member.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${member.accent}`} />
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${member.accent} bg-white/5 border border-white/10`}>
                      {member.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className={`text-sm font-semibold ${member.accent} mb-3`}>{member.role}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
