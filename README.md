# Career Compass — AI Career Guidance for Class 10 (Gujarat / India)

A production-ready Next.js 15 web app that helps Class 10 students choose between **Science, Commerce, Arts, Diploma Engineering, and ITI** — in **English, Hindi, Gujarati, and Hinglish**.

## ✨ What's inside

- **Next.js 15** App Router + TypeScript + TailwindCSS
- **next-intl** with 4 locales (`en`, `hi`, `gu`, `hinglish`) and per-locale URLs
- **Multilingual quiz** (15 weighted questions across interest / aptitude / personality)
- **Automatic scoring** — weighted stream matching + 8-axis aptitude profile + confidence
- **AI recommendation engine** — OpenAI integration (optional). Falls back to a high-quality rule-based recommender so the app works **without an API key**.
- **Beautiful result dashboard** — Recharts radar + horizontal stream-match bars
- **Parent counseling page** — strengths, salary potential, growth, do's & don'ts in their language
- **Modern careers explorer** — 25 careers (traditional + 2026-ready) with filters
- **PDF report download** — jsPDF
- **Admin dashboard** stub
- **Prisma schema** ready for PostgreSQL
- Mobile-first, animated, glassy modern UI

## 🚀 Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). It will redirect to `/en`. Switch language from the navbar.

## 🤖 Enable AI (optional)

Add to `.env.local`:

```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
```

The `/api/recommend` route will then call OpenAI with a localized counselor prompt and return JSON in the student's chosen language. Without a key, the app uses the built-in rule-based engine — **no errors, no degraded UX**.

## 🗄️ Database (optional)

The MVP stores results in `localStorage`. To move to PostgreSQL:

1. Set `DATABASE_URL` in `.env.local`
2. `npx prisma migrate dev`
3. Replace the `localStorage.setItem('cc_result', …)` line in `app/[locale]/quiz/page.tsx` with a `POST` to a new `/api/results` route that uses Prisma.

## 🔐 Auth (optional)

Schema and routes are designed for **Clerk**. Add Clerk middleware and wrap pages in `<ClerkProvider>` when ready.

## 📁 Structure

```
app/
  [locale]/
    page.tsx          # Landing
    quiz/             # Quiz engine
    result/           # Dashboard with charts + PDF
    parent/           # Parent counseling
    careers/          # Career explorer
    about/ contact/ admin/
  api/recommend/      # AI + rule-based recommendation
lib/
  quizData.ts         # Multilingual question bank
  scoring.ts          # Weighted scoring engine
  recommendation.ts   # AI prompts + rule-based fallback
  careers.ts          # 25 careers + parent dos/don'ts
  pdf.ts              # jsPDF report
messages/             # en / hi / gu / hinglish
prisma/schema.prisma
```

## 🎨 Customisation for a school

- **White-label**: edit `tailwind.config.ts` colors and the `Compass` logo in `Navbar.tsx`.
- **Add questions**: extend `lib/quizData.ts` (each option has stream + aptitude weights).
- **Add careers**: extend `lib/careers.ts`.
- **More languages**: add a file to `messages/` and register the locale in `i18n.ts`.

## 💼 Business model (built into the design)

- **Free** — students get the full quiz + AI report + PDF
- **School Premium** — bulk onboarding, school-wide analytics, white-label
- **Counselor Pro** — multi-school dashboards for ed-counselors

## 🚢 Deploy

```bash
vercel
```

Set the same env vars on Vercel. Done.

## ⚠️ Notes

- jsPDF default fonts don't ship Devanagari/Gujarati glyphs. The PDF prints localized data with a Latin fallback note. To get full-script PDFs, embed a Noto Sans Devanagari/Gujarati font with `doc.addFileToVFS()`.
- The "AI" badge on the result page tells the student whether the report came from the OpenAI counselor or the rule-based fallback.

Built with ❤️ for every student in Gujarat.
