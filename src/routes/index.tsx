import { createFileRoute } from '@tanstack/react-router'
import {
  Armchair,
  Boxes,
  Building2,
  CalendarCheck,
  Car,
  ClipboardList,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Snowflake,
  Star,
  Truck,
  Warehouse,
} from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { QuoteForm } from '@/components/QuoteForm'
import { Faq } from '@/components/Faq'
import { SiteFooter } from '@/components/SiteFooter'
import { areas, business, imageUrl, intercity, phoneHref, whatsappHref } from '@/data/business'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  { icon: Home, title: 'House & flat shifting', text: 'Complete apartment moves across Al Khobar — packed, loaded, delivered and set up the same day.' },
  { icon: Building2, title: 'Villa relocation', text: 'Large crews and multiple trucks for villas and compounds, with room-by-room labelling.' },
  { icon: Boxes, title: 'Office & commercial moves', text: 'After-hours and weekend moves for offices, clinics and shops so your business keeps running.' },
  { icon: Hammer, title: 'Furniture carpentry', text: 'Dismantling and reassembly of beds, wardrobes, kitchens and workstations by skilled carpenters.' },
  { icon: Snowflake, title: 'AC removal & fitting', text: 'Split and window AC units safely removed, transported and reinstalled at your new home.' },
  { icon: PackageCheck, title: 'Professional packing', text: 'Bubble wrap, stretch film, blankets and double-walled cartons for glassware and electronics.' },
  { icon: Car, title: 'Intercity & GCC moving', text: 'Door-to-door moves to Riyadh, Jeddah and GCC countries in closed, tracked trucks.' },
  { icon: Warehouse, title: 'Short-term storage', text: 'Secure, clean storage while you wait for keys to your new place or travel home on vacation.' },
]

const steps = [
  { icon: ClipboardList, title: 'Tell us about your move', text: 'Fill the quote form or message us with your locations, date and home size.' },
  { icon: CalendarCheck, title: 'Free survey & fixed price', text: 'We visit or video-call, list every item and give you one clear price — no surprises.' },
  { icon: Armchair, title: 'Pack, wrap & load', text: 'Our uniformed crew packs everything carefully and loads it into a closed truck.' },
  { icon: Truck, title: 'Deliver & set up', text: 'We unload, reassemble furniture, refit ACs and place everything where you want it.' },
]

const reviews = [
  { name: 'Anoop M.', area: 'Al Rakah, Al Khobar', text: 'Moved our 3-bedroom flat in one afternoon. Not a single glass broken and they assembled every bed before leaving. Very professional team.' },
  { name: 'Fatima Al-Qahtani', area: 'Dhahran', text: 'They moved our villa with two trucks and finished on time. The carpenters were careful with our wardrobes and the price was exactly as quoted.' },
  { name: 'James R.', area: 'Office move, Dammam', text: 'Relocated our office over a weekend. Desks, servers and files all labelled and in place on Sunday morning. Highly recommended.' },
]

const stats = [
  { value: '7 days', label: 'a week, incl. Fridays' },
  { value: '10+', label: 'Eastern Province cities' },
  { value: 'Free', label: 'survey & quotation' },
  { value: 'Fixed', label: 'price, no hidden costs' },
]

function HomePage() {
  return (
    <div id="top" className="overflow-x-clip">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate min-h-[92vh] bg-navy-950 text-white">
        <img
          src={imageUrl('hero.png', 1800)}
          srcSet={`${imageUrl('hero.png', 900)} 900w, ${imageUrl('hero.png', 1400)} 1400w, ${imageUrl('hero.png', 2000)} 2000w`}
          sizes="100vw"
          alt="Kerala Movers crew loading wrapped furniture into a truck outside a villa in Al Khobar"
          className="absolute inset-0 -z-10 size-full object-cover object-[70%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950/70 to-transparent" />

        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-28 pb-20">
          <p className="rise inline-flex w-fit items-center gap-2 rounded-full border border-saffron-400/40 bg-saffron-400/10 px-4 py-1.5 text-sm font-semibold text-saffron-400">
            <MapPin className="size-4" /> {business.city} · Dammam · Dhahran
          </p>
          <h1 className="rise rise-2 mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Your home, moved with <em className="text-saffron-400 not-italic">Kerala-style</em> care.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            House shifting, villa and office relocation across the Eastern Province. Careful packing,
            expert carpenters and closed trucks — at one fixed, honest price.
          </p>
          <p className="rise rise-3 mt-2 text-white/60" lang="ar" dir="rtl">
            نقل عفش بالخبر · فك وتركيب · تغليف
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap gap-4">
            <a href="#quote" className="rounded-full bg-saffron-500 px-7 py-4 font-bold text-navy-950 shadow-lg shadow-saffron-500/20 transition hover:bg-saffron-400">
              Get a free quote
            </a>
            {business.whatsapp ? (
              <a href={whatsappHref()} className="flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-bold transition hover:bg-white/10">
                <MessageCircle className="size-5" /> WhatsApp us
              </a>
            ) : (
              <a href="#services" className="rounded-full border border-white/30 px-7 py-4 font-bold transition hover:bg-white/10">
                Our services
              </a>
            )}
          </div>
          <ul className="rise rise-4 mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-white/80">
            {['Free on-site survey', 'Trained, uniformed crew', 'Closed, covered trucks'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-saffron-400" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <div className="kasavu" />
      <section className="bg-navy-900 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-2 text-center">
              <p className="font-display text-3xl font-semibold text-saffron-400">{s.value}</p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="grain py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="What we do" title="Every kind of move, handled end to end" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="group rounded-2xl bg-white p-6 ring-1 ring-sand-200 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid size-12 place-items-center rounded-xl bg-sand-100 text-navy-800 transition group-hover:bg-saffron-500 group-hover:text-navy-950">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-900/70">{s.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Feature image="office.png" title="Offices moved over the weekend" text="Workstations, files and IT equipment labelled by department and reinstalled before Sunday morning." />
            <Feature image="carpentry.png" title="Carpenters on every crew" text="Wardrobes, beds and kitchens taken apart with every screw bagged and labelled — then rebuilt right." />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-sand-100 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div className="relative">
            <img
              src={imageUrl('packing.png', 1000)}
              alt="Mover wrapping glassware in packing paper"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute -right-3 -bottom-6 max-w-[15rem] rounded-2xl bg-navy-900 p-5 text-white shadow-xl sm:-right-6">
              <p className="font-display text-4xl font-semibold text-saffron-400">0</p>
              <p className="mt-1 text-sm text-white/80">surprise charges on moving day. The price we quote is the price you pay.</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-saffron-600 uppercase">Why families choose us</p>
            <h2 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              We pack your things like they're our own.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-900/75">
              Started by a team from Kerala who have lived and worked in the Eastern Province for years,
              we know what a move means — school runs, new leases, a family arriving from home. So we
              treat every cup, cupboard and carpet with patience.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                ['Experienced, background-checked staff', 'Speak Malayalam, Hindi, Arabic and English.'],
                ['Quality packing materials', 'Fresh cartons, bubble wrap, stretch film and blankets.'],
                ['On time, every time', 'We arrive in the slot you book and finish when we say.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <ShieldCheck className="mt-0.5 size-6 shrink-0 text-palm-600" />
                  <div>
                    <p className="font-bold">{t}</p>
                    <p className="text-navy-900/70">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="How it works" title="Four simple steps to your new address" />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-sand-200 bg-white p-7">
                <span className="absolute top-6 right-6 font-display text-5xl font-semibold text-sand-200">0{i + 1}</span>
                <s.icon className="size-8 text-saffron-600" />
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-navy-900/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-navy-900 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-saffron-400 uppercase">Areas we cover</p>
            <h2 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Based in Al Khobar. Moving the whole Eastern Province.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Local moves within the city, across the causeway region and long-distance relocations to
              anywhere in the Kingdom and the GCC.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/60">Local moves</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold text-white/60">Intercity & GCC</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {intercity.map((a) => (
                <span key={a} className="rounded-full bg-saffron-500/15 px-4 py-2 text-sm font-semibold text-saffron-400 ring-1 ring-saffron-400/30">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="grain py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Reviews" title="Trusted by families and businesses" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-2xl bg-white p-7 ring-1 ring-sand-200">
                <div className="flex gap-1 text-saffron-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-navy-900/80">“{r.text}”</blockquote>
                <figcaption className="mt-6 border-t border-sand-200 pt-4">
                  <p className="font-bold">{r.name}</p>
                  <p className="text-sm text-navy-900/60">{r.area}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="bg-sand-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-bold tracking-[0.2em] text-saffron-600 uppercase">Free quotation</p>
            <h2 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Tell us about your move.
            </h2>
            <p className="mt-5 text-lg text-navy-900/75">
              Share a few details and we'll call you back with a fixed price. Prefer to talk? Reach us
              any day of the week.
            </p>
            <div className="mt-8 space-y-3">
              {business.phone && (
                <a href={phoneHref()} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold ring-1 ring-sand-200">
                  <Phone className="size-5 text-saffron-600" /> {business.phone}
                </a>
              )}
              {business.whatsapp && (
                <a href={whatsappHref()} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold ring-1 ring-sand-200">
                  <MessageCircle className="size-5 text-palm-600" /> Chat on WhatsApp
                </a>
              )}
              <p className="flex items-center gap-3 rounded-2xl bg-white p-4 font-semibold ring-1 ring-sand-200">
                <CalendarCheck className="size-5 text-saffron-600" /> {business.hours}
              </p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeading eyebrow="FAQ" title="Questions before you move" />
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Mobile quick-action bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full bg-navy-950/95 p-2 shadow-2xl backdrop-blur md:hidden">
        <a href="#quote" className="flex-1 rounded-full bg-saffron-500 py-3 text-center text-sm font-bold text-navy-950">
          Free quote
        </a>
        {business.phone && (
          <a href={phoneHref()} aria-label="Call us" className="grid size-11 place-items-center rounded-full bg-white/10 text-white">
            <Phone className="size-5" />
          </a>
        )}
        {business.whatsapp && (
          <a href={whatsappHref()} aria-label="WhatsApp us" className="grid size-11 place-items-center rounded-full bg-palm-600 text-white">
            <MessageCircle className="size-5" />
          </a>
        )}
      </div>
    </div>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold tracking-[0.2em] text-saffron-600 uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">{title}</h2>
    </div>
  )
}

function Feature({ image, title, text }: { image: string; title: string; text: string }) {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950">
      <img src={imageUrl(image, 1000)} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
      <div className="flex min-h-80 flex-col justify-end p-8 text-white">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-2 max-w-md text-white/80">{text}</p>
      </div>
    </div>
  )
}
