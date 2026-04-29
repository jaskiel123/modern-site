# /agencje — Landing real estate

Landing dla agencji nieruchomości 5-50 osób (vertical Track #1, sprint 29.04-12.05). Subpath `/agencje` na autoaipl.com (ten sam Vercel deploy).

## URL po deployu

- **Live:** https://autoaipl.com/agencje
- **OG:** https://autoaipl.com/agencje (Open Graph)

## Co Rafał musi zrobić PRZED launch reklam

### 1. Formspree setup (5 minut, free tier 50 submissions/mc)

1. Załóż konto na https://formspree.io (Twoim emailem)
2. Stwórz nowy formularz "agencje-leads"
3. Skopiuj form ID (format: `xpzelnpa`)
4. **Edit `index.html` linia ~1099:** podmień `REPLACE_WITH_FORMSPREE_ID` na swój form ID
5. (Opcjonalnie premium $10/mc) → ustaw Slack notification w panelu Formspree na #leady channel

### 2. Slack webhook bez Formspree (alternatywa, fully free)

Jeśli wolisz bez Formspree — w Slack workspace:
1. Apps → Add new "Incoming Webhook" → wybierz #leady channel → skopiuj URL
2. Zamień form action na własny endpoint Cloudflare Workers (5 min do napisania)
3. Lub użyj Web3Forms (free 250/mc, generic form-to-email): https://web3forms.com

### 3. Test form end-to-end (przed reklamami)

```
1. Otwórz https://autoaipl.com/agencje
2. Zjedź do form (#audyt)
3. Wypełnij testowy lead
4. Kliknij "Umów 15-min diagnozę leadów"
5. Sprawdź: redirect na /agencje/dziekuje (NIE Formspree default page)
6. Sprawdź czy mail przyszedł na rafal@autoaipl.com
```

**Uwaga o thank-you page:** form ma hidden field `_next` → po submit Formspree przekierowuje na `https://autoaipl.com/agencje/dziekuje` (własna strona, on-brand, expectation management). NIE używamy default thank-you Formspree (off-brand, brak conversion tracking).

### 4. Deploy

Push do repo `autoaipl-com` → Vercel deploy automatyczny. Vercel `cleanUrls: true` więc `autoaipl.com/agencje` = `agencje/index.html`.

## Struktura sekcji

1. **Hero** — CORE messaging + AD C honest sub-headline
2. **Cred bar** — 200+ wdrożeń / <60s response / 30-45 dni follow-up
3. **Problem** — 3 bóle real estate (lead wieczorem / odpowiedź następnego dnia / brak follow-upu)
4. **Jak działa system** — 6 modułów (Lead Capture / AI Qualification / Pierwsza odpowiedź / Brief / Follow-up / Listing+Dashboard)
5. **Pakiety** — 3 pakiety (Starter 10-15k / Growth 20-35k / Multi-Office 40-80k+) — Pakiet 4 MRR retainer **NIE NA LANDING** (post-call upsell)
6. **Z kim pracujesz** — Rafał + bullety (Hiszpania self-experienced demo case mentioned)
7. **Dla kogo / nie dla kogo** — qualification filter
8. **Czego system NIE robi** — uczynić się karalnym (4 granice + finalna szczerość)
9. **FAQ** — 7 pytań real estate specific (CRM / RODO / leads/mc / klient pozna AI / human-in-loop / wdrożenie / cena audytu)
10. **Final CTA — formularz 9 pól** (imię, biuro, email, telefon **opcjonalnie**, leady/mc dropdown, ile osób obsługuje, źródła, CRM dropdown, problem) + AJAX submit z manual JS redirect na `/agencje/dziekuje.html` (zob. dół `index.html`)
11. **Thank-you page** (`dziekuje.html`) — on-brand, 3-step expectation (mail z kalendarzem 24h / co przygotować / bez nachalnej sprzedaży) + fallback mail kontakt + linki YT
12. **Footer page /agencje** (1 plik):
    - `prywatnosc.html` — RODO compliance: 9 pól form + odbiorcy danych (Formspree/Google/Vercel/biuro rachunkowe/kancelarie) + okres przechowywania + prawa RODO + bezpieczeństwo. **Bez wymieniania konkretnych dostawców AI/hostingu** (te lecą do indywidualnej umowy z klientem). **Bez "Specyfikacji" i "hypercare"** — to są umowne terminy, nie webowy ballast.
    - **Regulamin USUNIĘTY (decyzja 30.04):** statyczny landing B2B z formularzem kontaktowym nie wymaga regulaminu prawnie. Szczegóły wdrożenia (pakiety/fazy/milestones/własność IP/SLA) lecą do indywidualnej umowy z klientem, nie na stronę.
    - **Polityka rezygnacji USUNIĘTA (decyzja 30.04):** warunki rozwiązania umowy = umowa, nie footer. Regulamin był zbyt szczegółowy = odstraszał klientów konkretami które są przedmiotem negocjacji.
13. **Footer linki** = absolute paths `/agencje/prywatnosc.html` (1 link) — Vercel `trailingSlash: false` + relative paths = bug który wyrzuca leadów na stary content w root domeny. Absolute paths zawsze trafiają w cel.

## Anti-features (czego NIE robić)

- NIE dodawać Pakiet 4 MRR/Retainer do `#pakiety` — to jest post-call upsell
- NIE dodawać booking link (Calendly etc) — flow to: form → 24h response → manual scheduling
- NIE dodawać darmowego lead magnetu (PDF, checklist) — landing ma jeden CTA: form audytu
- NIE dodawać testimoniali do moment kiedy NIE MASZ realnych testymoniali real estate (faking = trust killer)

## Connection do reklam

- **YT Demand Gen** kreacja CTA = "Sprawdź audyt" → klik → landing → form
- **TikTok Lead Gen** = Instant Form (4 pyt., per OFFER linia 1167+) → osobny landing path lub bezpośrednio
- **Conversion event:** form submit (mierzymy w Google Ads + GA4)

## Spain Track #2 (T+30, fallback)

Gdy Track #1 (PL) ma 3+ płatnych klientów lub Tydzień 4 daje sygnał — kopia tego landingu pod `/agencias` (ES) lub osobna domena. Pricing × 2 (PLN→EUR multiplier).
