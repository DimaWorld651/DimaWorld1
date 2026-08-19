import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Коли відкриється DimaWorld?',
    a: 'Відкриття заплановано на 1 вересня 2026 року о 18:00 за київським часом. Таймер зворотного відліку на головній сторінці покаже точний час. Рекомендуємо зайти в Discord або Telegram заздалегідь — там буде посилання на ранній доступ.',
  },
  {
    q: 'Які версії Minecraft підтримуються?',
    a: 'На сервер можна зайти лише з версії Minecraft 26.2. Онови гру до цієї версії, щоб підключитися. Інші версії не підтримуються.'
  },
  {
    q: 'DimaWorld безкоштовний?',
    a: 'Так, грати на сервері повністю безкоштовно. На DimaWorld немає донатів — жодних платних привілеїв чи переваг за гроші. Усі гравці в рівних умовах.',
  },
  {
    q: 'Це чиста ванілла?',
    a: 'Так! Сервер заснований на чистому ванільному Minecraft без модів і кастомних мобів. Плагіни лише покращують зручність: економіка, динамічна карта та захист від чітерів — без перекосів і переваг.',
  },
  {
    q: 'Чи працює сервер 24/7?',
    a: 'Ні, сервер не працює цілодобово. У нього є свій графік роботи — слідкуй за статусом у нашому Discord або Telegram, щоб знати, коли сервер онлайн і коли можна грати.',
  },
  {
    q: 'Як поскаржитися на гравця?',
    a: 'Напиши в Discord-канал #скарги або звернись до адміністрації у Telegram. Модерація розглядає скарги якнайшвидше.',
  },
  {
    q: 'Чи можна грати з друзями?',
    a: 'Звісно! Виживай разом з друзями, будуйте спільні бази та досліджуй світ. DimaWorld — це дружнє ком\'юніті, де кожен знайде собі компанію.',
  },
  {
    q: 'Що буде після відкриття?',
    a: 'Одразу після запуску пройде стартовий івент «Першопрохідці», потім регулярні івенти та оновлення плагінів за запитами ком\'юніті. Івенти — щомісяця.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="section-pad max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-diamond-400 text-sm font-bold uppercase tracking-widest">Часті питання</span>
          <h2 className="pixel-font text-2xl sm:text-4xl text-white mt-3 mb-4">Відповідаємо на все</h2>
          <p className="text-gray-400">
            Не знайшов відповідь? Напиши нам в Discord або Telegram — допоможемо за пару хвилин.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card-block overflow-hidden transition-all duration-300 ${
                open === i ? 'border-grass-500/40' : ''
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className={`font-bold text-base transition-colors ${open === i ? 'text-grass-400' : 'text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-grass-400' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
