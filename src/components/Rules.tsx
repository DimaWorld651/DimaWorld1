import { Ban, Shield, Users, Gamepad2, AlertTriangle, BookOpen } from 'lucide-react';

const rules = [
  {
    icon: Ban,
    title: 'Без чітів та модів',
    desc: 'Будь-які чіти, X-Ray, Kill Aura, Nuker та інші заборонені. Бан назавжди без права на апеляцію.',
    severity: 'Бан',
    color: 'text-redstone-400',
    border: 'border-redstone-500/30',
  },
  {
    icon: Shield,
    title: 'Без гріферства',
    desc: 'Знищення чужих будівель, крадіжка речей та зловживання механіками привату — заборонено.',
    severity: 'Бан',
    color: 'text-redstone-400',
    border: 'border-redstone-500/30',
  },
  {
    icon: Users,
    title: 'Повага до гравців',
    desc: 'Без образ, дискримінації, спаму в чаті та токсичності. Будь адекватним — і до тебе будуть адекватними.',
    severity: 'Мут / Бан',
    color: 'text-gold-400',
    border: 'border-gold-500/30',
  },
  {
    icon: Gamepad2,
    title: 'Без реклами',
    desc: 'Реклама інших серверів, сайтів та ресурсів у чаті, особистих повідомленнях та на табличках заборонена.',
    severity: 'Мут / Бан',
    color: 'text-gold-400',
    border: 'border-gold-500/30',
  },
  {
    icon: AlertTriangle,
    title: 'Без баг-юзу',
    desc: 'Використання багів плагінів, дюпів та експлойтів для отримання переваги — заборонено. Про баги повідомляй адмінам.',
    severity: 'Бан',
    color: 'text-redstone-400',
    border: 'border-redstone-500/30',
  },
  {
    icon: BookOpen,
    title: 'Загальні правила',
    desc: 'Слухай адміністрацію, не створюй зайвих конфліктів і просто гарно проводь час. Правила можуть оновлюватись.',
    severity: 'За ситуації',
    color: 'text-diamond-400',
    border: 'border-diamond-500/30',
  },
];

export default function Rules() {
  return (
    <section id="rules" className="relative py-24 sm:py-32 bg-gradient-to-b from-obsidian-950 to-obsidian-900">
      <div className="section-pad max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-redstone-400 text-sm font-bold uppercase tracking-widest">Правила сервера</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Грай чесно</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Прості правила для комфортної гри всіх. Незнання правил не звільняє від відповідальності.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.title}
                className={`card-block p-6 group hover:-translate-y-1 transition-all duration-300 ${rule.border}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${rule.color}`} />
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${rule.color} bg-white/5 border border-white/10`}>
                    {rule.severity}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{rule.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{rule.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Порушення правил призводить до муту, кіку або бану — залежно від серйозності. Рішення адміністрації остаточне.
          </p>
        </div>
      </div>
    </section>
  );
}
