import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { areas, business, phoneHref } from '@/data/business'

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white/75">
      <div className="kasavu" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-white">{business.name}</p>
          <p className="mt-1 text-sm text-saffron-400" lang="ar" dir="rtl">
            نقل عفش وأثاث بالخبر والمنطقة الشرقية
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Careful, honest movers for families and businesses across {business.city} and the{' '}
            {business.region}.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-white uppercase">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="size-4 shrink-0 text-saffron-400" /> {business.city}, {business.region}</li>
            <li className="flex gap-3"><Clock className="size-4 shrink-0 text-saffron-400" /> {business.hours}</li>
            {business.phone && (
              <li className="flex gap-3"><Phone className="size-4 shrink-0 text-saffron-400" /><a href={phoneHref()}>{business.phone}</a></li>
            )}
            {business.email && (
              <li className="flex gap-3"><Mail className="size-4 shrink-0 text-saffron-400" /><a href={`mailto:${business.email}`}>{business.email}</a></li>
            )}
            <li><a href="#quote" className="font-semibold text-saffron-400 hover:underline">Request a free quote →</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-white uppercase">We serve</p>
          <p className="mt-4 text-sm leading-7">{areas.join(' · ')}</p>
        </div>
      </div>
      <div className="border-t border-white/10 pt-5 pb-24 md:pb-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {business.name}, {business.city}. All rights reserved.
      </div>
    </footer>
  )
}
