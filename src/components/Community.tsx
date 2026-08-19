import { MessageCircle, Send, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '12,000+', label: 'Учасників у Discord' },
  { icon: TrendingUp, value: '850K', label: 'Переглядів на YouTube' },
  { icon: MessageCircle, value: '8K+', label: 'Підписників у Telegram' },
];

const socials = [
  {
    icon: MessageCircle,
    name: 'Discord',
    desc: 'Головний хаб ком\'юніті, анонси, підтримка',
    members: '12K+',
    color: 'bg-[#5865F2]',
    border: 'border-[#5865F2]/40',
    href: 'https://discord.gg/YZMzgwRTsr',
  },
  {
    icon: Send,
    name: 'Telegram',
    desc: 'Новини, опитування, швидкі оновлення',
    members: '8K+',
    color: 'bg-[#26A5E4]',
    border: 'border-[#26A5E4]/40',
    href: 'https://t.me/+zLOWvRj1Sn81ZjAy',
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32 bg-gradient-to-b from-obsidian-900 to-obsidian-950">
      <div className="section-pad">
        <div className="text-center mb-16">
          <span className="text-grass-400 text-sm font-bold uppercase tracking-widest">Ком'юніті</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Приєднуйся до сім'ї</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            DimaWorld — це не лише сервер, а й тисячі гравців, які будують, змагаються і веселяться разом.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="card-block p-6 text-center hover:border-grass-500/30 transition-all">
                <Icon className="w-8 h-8 text-grass-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Socials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-block p-6 group hover:-translate-y-2 transition-all duration-300 ${social.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{social.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{social.desc}</p>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-300">{social.members}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 relative card-block p-8 sm:p-12 overflow-hidden border-grass-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-grass-500/10 to-diamond-500/10" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-grass-500/20 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="pixel-font text-xl sm:text-2xl text-white mb-3">Готовий до запуску?</h3>
              <p className="text-gray-300 max-w-xl">
                Увійди в Discord або Telegram першим, щоб не пропустити відкриття та бути в курсі всіх новин.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://discord.gg/YZMzgwRTsr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 whitespace-nowrap animate-pulse-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Discord
              </a>
              <a
                href="https://t.me/+zLOWvRj1Sn81ZjAy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base px-8 py-4 whitespace-nowrap"
              >
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
