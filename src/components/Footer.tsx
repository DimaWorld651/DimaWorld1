import { Blocks, Heart } from 'lucide-react';

const links = {
  'Навігація': [
    { label: 'Головна', href: '#hero' },
    { label: 'Що на сервері', href: '#modes' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Правила', href: '#rules' },
  ],
  'Ком\'юніті': [
    { label: 'Discord', href: 'https://discord.gg/YZMzgwRTsr' },
    { label: 'Telegram', href: 'https://t.me/+zLOWvRj1Sn81ZjAy' },
  ],
  'Допомога': [
    { label: 'FAQ', href: '#faq' },
    { label: 'Правила', href: '#rules' },
    { label: 'Підтримка', href: '#community' },
    { label: 'Статус сервера', href: '#hero' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-obsidian-950 py-16">
      <div className="section-pad">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-grass-400 to-grass-600 flex items-center justify-center shadow-block-sm">
                <Blocks className="w-5 h-5 text-white" />
              </div>
              <span className="pixel-font text-sm text-white">
                Dima<span className="text-grass-400">World</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-4">
              Ванільний Minecraft з плагінами: економіка, динамічна карта та дружнє ком'юніті. Без донатів, без переваг.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-grass-500/10 border border-grass-500/30">
              <span className="w-2 h-2 rounded-full bg-grass-400 animate-pulse" />
              <span className="text-xs font-semibold text-grass-400">Сервер скоро відкриється</span>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-gray-400 hover:text-grass-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 DimaWorld. Не афілійований з Mojang AB або Microsoft.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1.5">
            Зроблено з <Heart className="w-3.5 h-3.5 text-redstone-500 fill-redstone-500" /> для ком'юніті
          </p>
        </div>
      </div>
    </footer>
  );
}
