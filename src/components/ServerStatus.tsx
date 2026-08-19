import { Server, Users, Activity, Wifi, Clock } from 'lucide-react';

const stats = [
  { icon: Server, label: 'Статус сервера', value: 'Скоро відкриття', color: 'text-gold-400', dot: 'bg-gold-500 animate-pulse' },
  { icon: Users, label: 'Онлайн гравців', value: '0 / 100', color: 'text-gray-400', dot: 'bg-gray-600' },
  { icon: Activity, label: 'TPS', value: '20.0', color: 'text-grass-400', dot: 'bg-grass-500' },
  { icon: Wifi, label: 'Версія', value: '26.2', color: 'text-diamond-400', dot: 'bg-diamond-500' },
  { icon: Clock, label: 'Графік роботи', value: 'Не 24/7', color: 'text-gold-400', dot: 'bg-gold-500' },
];

export default function ServerStatus() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-obsidian-900 to-obsidian-950 border-y border-white/5">
      <div className="section-pad">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="card-block p-5 flex items-center gap-4 hover:border-white/20 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    <span className="text-xs text-gray-500 uppercase tracking-wide truncate">{s.label}</span>
                  </div>
                  <div className={`text-sm font-bold ${s.color} truncate`}>{s.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
