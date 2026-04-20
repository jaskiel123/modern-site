# autoaipl.com

Landing page AutoAI Systems — oferta Audytu Procesów AI (997 zł netto).

## Stack

- Single-file HTML + inline CSS (bez frameworka, bez build stepu)
- Hostowane na Vercel jako statyczne pliki
- Fonty: Google Fonts (Inter + Space Grotesk)

## Struktura

- `index.html` — landing główny
- `regulamin.html` — regulamin usługi
- `prywatnosc.html` — polityka prywatności (RODO)
- `polityka-zwrotow.html` — polityka zwrotów + gwarancja 10h
- `vercel.json` — konfiguracja Vercel (cleanUrls + security headers)

## Deployment

1. Push do repo → Vercel deploy automatycznie
2. Brak build commanda — pliki są serwowane bezpośrednio
3. `cleanUrls: true` — linki `/regulamin` zamiast `/regulamin.html`

## Edycja

Link Stripe: znajdź `id="stripe-cta"` w `index.html` i podmień `href="#"` na URL Stripe Payment Link.
