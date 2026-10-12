import { useEffect, useState } from 'react'
import { Menu, Phone, Truck, X } from 'lucide-react'
import { business, phoneHref } from '@/data/business'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#areas', label: 'Areas' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-navy-950/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 text-white">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-saffron-500 text-navy-950">
            <Truck className="size-5" strokeWidth={2.4} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">{business.name}</span>
            <span className="block text-[11px] font-semibold tracking-[0.2em] text-saffron-400 uppercase">
              Movers & Packers · {business.city}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 transition hover:text-saffron-400">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {business.phone && (
            <a href={phoneHref()} className="flex items-center gap-2 text-sm font-semibold text-white/90">
              <Phone className="size-4 text-saffron-400" /> {business.phone}
            </a>
          )}
          <a
            href="#quote"
            className="rounded-full bg-saffron-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-saffron-400"
          >
            Free quote
          </a>
        </div>

        <button
          className="rounded-lg p-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 font-semibold text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-saffron-500 py-3 text-center font-bold text-navy-950"
          >
            Get a free quote
          </a>
        </nav>
      )}
    </header>
  )
}
