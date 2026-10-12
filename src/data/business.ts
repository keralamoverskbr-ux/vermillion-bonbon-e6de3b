// Single source of truth for business details shown across the site.
// Set `phone` / `whatsapp` to real numbers (international format, digits only
// for whatsapp, e.g. "9665XXXXXXXX") to enable the call and WhatsApp buttons.
export const business = {
  name: 'Kerala Movers and Packers',
  shortName: 'Kerala Movers',
  city: 'Al Khobar',
  region: 'Eastern Province, Saudi Arabia',
  phone: '' as string,
  whatsapp: '' as string,
  email: '' as string,
  hours: 'Open 7 days · 7:00 AM – 11:00 PM',
}

export const areas = [
  'Al Khobar',
  'Dammam',
  'Dhahran',
  'Qatif',
  'Saihat',
  'Jubail',
  'Ras Tanura',
  'Abqaiq',
  'Al Hofuf',
  'Half Moon Bay',
]

export const intercity = ['Riyadh', 'Jeddah', 'Makkah', 'Madinah', 'Bahrain', 'Kuwait', 'Qatar', 'UAE']

export const moveTypes = [
  'Apartment / flat',
  'Villa',
  'Office',
  'Single items',
  'Intercity / GCC',
] as const

export const homeSizes = ['Studio / 1 room', '2 bedrooms', '3 bedrooms', '4+ bedrooms', 'Not sure'] as const

export const extras = [
  'Packing & wrapping',
  'Furniture dismantling',
  'AC removal & fitting',
  'Curtains & TV mounting',
  'Short-term storage',
] as const

export function imageUrl(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`
}

export function phoneHref() {
  return business.phone ? `tel:${business.phone.replace(/\s/g, '')}` : '#quote'
}

export function whatsappHref(text = 'Hello Kerala Movers, I would like a moving quote.') {
  return business.whatsapp
    ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`
    : '#quote'
}
