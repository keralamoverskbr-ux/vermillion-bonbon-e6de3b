import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { areas, extras, homeSizes, moveTypes } from '@/data/business'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-navy-950 placeholder:text-navy-900/40 outline-none transition focus:border-saffron-500 focus:ring-4 focus:ring-saffron-400/25'
const label = 'mb-1.5 block text-sm font-semibold text-navy-900'

export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [moveType, setMoveType] = useState<string>(moveTypes[0])
  const [picked, setPicked] = useState<string[]>([])

  const toggle = (x: string) =>
    setPicked((p) => (p.includes(x) ? p.filter((v) => v !== x) : [...p, x]))

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    data.set('move-type', moveType)
    data.set('extras', picked.join(', ') || 'None')
    try {
      // Post to the static skeleton so Netlify Forms (not the SSR handler) receives it.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-sand-200">
        <CheckCircle2 className="size-14 text-palm-600" />
        <h3 className="mt-4 font-display text-3xl font-semibold">Request received — shukran!</h3>
        <p className="mt-3 max-w-md text-navy-900/70">
          Our team will call you back shortly to confirm details and arrange a free survey of your
          home or office.
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setPicked([])
          }}
          className="mt-6 text-sm font-bold text-saffron-600 underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-sand-200 sm:p-9"
    >
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <fieldset>
        <legend className={label}>What are you moving?</legend>
        <div className="flex flex-wrap gap-2">
          {moveTypes.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setMoveType(t)}
              aria-pressed={moveType === t}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                moveType === t
                  ? 'border-navy-900 bg-navy-900 text-white'
                  : 'border-sand-300 bg-sand-50 text-navy-900 hover:border-navy-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Mobile / WhatsApp</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="+966 5X XXX XXXX" />
        </div>
        <div>
          <label className={label} htmlFor="from">Moving from</label>
          <input id="from" name="from" list="area-list" required className={field} placeholder="e.g. Al Khobar, Al Rakah" />
        </div>
        <div>
          <label className={label} htmlFor="to">Moving to</label>
          <input id="to" name="to" list="area-list" required className={field} placeholder="e.g. Dammam, Al Faisaliyah" />
        </div>
        <datalist id="area-list">
          {areas.map((a) => (
            <option key={a} value={a} />
          ))}
        </datalist>
        <div>
          <label className={label} htmlFor="size">Size of move</label>
          <select id="size" name="size" className={field} defaultValue={homeSizes[1]}>
            {homeSizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="date">Preferred date</label>
          <input id="date" name="date" type="date" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="email">Email <span className="font-normal text-navy-900/50">(optional)</span></label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={label}>Extra services</legend>
        <div className="flex flex-wrap gap-2">
          {extras.map((x) => {
            const on = picked.includes(x)
            return (
              <button
                type="button"
                key={x}
                onClick={() => toggle(x)}
                aria-pressed={on}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
                  on
                    ? 'border-saffron-500 bg-saffron-400/20 text-navy-950'
                    : 'border-sand-300 text-navy-900/80 hover:border-saffron-500'
                }`}
              >
                {on ? '✓ ' : '+ '}
                {x}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <label className={label} htmlFor="message">Anything we should know?</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={field}
          placeholder="Floor number, lift availability, heavy items like a piano or safe…"
        />
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Something went wrong sending your request. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 py-4 font-bold text-white transition hover:bg-navy-800 disabled:opacity-70"
      >
        {status === 'sending' ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
        {status === 'sending' ? 'Sending…' : 'Get my free quote'}
      </button>
      <p className="mt-3 text-center text-xs text-navy-900/60">
        No obligation. We usually reply within 30 minutes during working hours.
      </p>
    </form>
  )
}
