import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does house shifting in Al Khobar cost?',
    a: 'It depends on the size of your home, the floor and lift access, distance and the extra services you need. Send the quote form and we will give you a clear, fixed price — usually after a free visit or a quick video call.',
  },
  {
    q: 'Do you dismantle and reassemble furniture?',
    a: 'Yes. Our carpenters take apart beds, wardrobes, dining tables and office workstations, bag and label every screw, and rebuild everything at your new place.',
  },
  {
    q: 'Can you remove and fit split AC units?',
    a: 'Yes, our technicians handle split and window AC removal and installation, along with curtain rods, TV wall mounts and light fittings.',
  },
  {
    q: 'Do you move between cities or to other GCC countries?',
    a: 'We move households and offices from the Eastern Province to Riyadh, Jeddah and other cities, and arrange door-to-door relocations to Bahrain, Kuwait, Qatar and the UAE.',
  },
  {
    q: 'Is my furniture safe during the move?',
    a: 'Every item is wrapped in bubble wrap, stretch film or moving blankets, and fragile pieces are packed in double-walled cartons. Our closed trucks keep your goods protected from dust and heat.',
  },
  {
    q: 'How early should I book?',
    a: 'Two to three days ahead is ideal, especially at month-end and before holidays. For urgent moves, contact us — same-day service is often possible.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-sand-200 rounded-3xl bg-white ring-1 ring-sand-200">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
            >
              <span className="font-display text-lg font-semibold">{f.q}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-saffron-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <p className="overflow-hidden px-6 text-navy-900/75 sm:px-8">
                <span className="block pb-6">{f.a}</span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
