'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Heart, Coffee, Sparkles, X, IndianRupee, Check, Copy, ArrowLeft, QrCode, Smartphone } from 'lucide-react';

const PRESETS = [49, 99, 199, 499];

type AppKey = 'gpay' | 'phonepe' | 'paytm' | 'cred' | 'bhim' | 'other';

interface UpiApp {
  key: AppKey;
  name: string;
  color: string;
  // Returns deep link for the chosen amount.
  link: (params: { upi: string; name: string; amount: number; note: string }) => string;
}

const APPS: UpiApp[] = [
  {
    key: 'gpay',
    name: 'Google Pay',
    color: 'from-blue-500 to-green-500',
    link: ({ upi, name, amount, note }) =>
      `tez://upi/pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`,
  },
  {
    key: 'phonepe',
    name: 'PhonePe',
    color: 'from-purple-600 to-purple-800',
    link: ({ upi, name, amount, note }) =>
      `phonepe://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`,
  },
  {
    key: 'paytm',
    name: 'Paytm',
    color: 'from-blue-400 to-cyan-500',
    link: ({ upi, name, amount, note }) =>
      `paytmmp://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`,
  },
  {
    key: 'cred',
    name: 'CRED',
    color: 'from-slate-800 to-black',
    link: ({ upi, name, amount, note }) =>
      `cred://upi/pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`,
  },
  {
    key: 'bhim',
    name: 'BHIM',
    color: 'from-orange-500 to-red-500',
    link: ({ upi, name, amount, note }) =>
      `upi://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`,
  },
  {
    key: 'other',
    name: 'Other UPI',
    color: 'from-slate-400 to-slate-600',
    link: ({ upi, name, amount, note }) =>
      `upi://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`,
  },
];

function buildUpiUri(upi: string, name: string, amount: number, note: string) {
  return `upi://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
}

function qrUrl(data: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(data)}`;
}

export default function TipJar({ persistent = false }: { persistent?: boolean }) {
  const t = useTranslations('tip');
  const [dismissed, setDismissed] = useState(false);
  const [custom, setCustom] = useState('');
  const [thanks, setThanks] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const upiId = process.env.NEXT_PUBLIC_TIP_UPI_ID;
  const upiName = process.env.NEXT_PUBLIC_TIP_NAME ?? 'Career Compass';
  const note = 'Tip for Career Compass';

  const closeOrReset = () => persistent ? (setAmount(null), setThanks(false), setCustom('')) : setDismissed(true);

  if (dismissed && !persistent) return null;

  const pick = (n: number) => {
    if (n <= 0) return;
    setAmount(n);
  };

  const openApp = (app: UpiApp) => {
    if (!upiId || !amount) return;
    window.location.href = app.link({ upi: upiId, name: upiName, amount, note });
    setTimeout(() => setThanks(true), 1500);
  };

  const copy = async () => {
    if (!upiId) return;
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  // ---------- Thanks state ----------
  if (thanks) {
    return (
      <div className="my-10 max-w-2xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 p-8 text-center print:hidden">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center mb-3">
          <Check size={28} />
        </div>
        <h3 className="font-bold text-xl text-emerald-900">{t('thanks')}</h3>
        <p className="text-emerald-700 text-sm mt-1">{t('thanksSub')}</p>
        <button onClick={closeOrReset} className="mt-4 text-xs text-emerald-700 underline">
          {persistent ? 'Send another tip' : 'Close'}
        </button>
      </div>
    );
  }

  // ---------- Payment screen (after amount picked) ----------
  if (amount && upiId) {
    const upi = buildUpiUri(upiId, upiName, amount, note);
    return (
      <div className="my-10 max-w-2xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 md:p-8 relative shadow-sm print:hidden">
        <button
          onClick={() => setAmount(null)}
          className="absolute top-3 left-3 px-2 py-1 rounded-lg hover:bg-slate-100 text-slate-500 inline-flex items-center gap-1 text-xs"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <button
          onClick={closeOrReset}
          className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400"
        >
          <X size={16} />
        </button>

        <div className="text-center mb-5 mt-4">
          <div className="text-xs text-slate-500 uppercase tracking-wider">Tip amount</div>
          <div className="text-4xl font-extrabold gradient-text">₹{amount}</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* QR code */}
          <div className="text-center">
            <div className="inline-block p-3 bg-white border-2 border-slate-200 rounded-2xl shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrUrl(upi)} alt="UPI QR" width={240} height={240} />
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 mt-3">
              <QrCode size={12} /> Scan with any UPI app
            </div>
          </div>

          {/* App buttons */}
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-2">
              <Smartphone size={12} /> Or open directly on phone
            </div>
            <div className="grid grid-cols-2 gap-2">
              {APPS.map((app) => (
                <button
                  key={app.key}
                  onClick={() => openApp(app)}
                  className={`px-3 py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-br ${app.color} hover:opacity-90 active:scale-95 transition`}
                >
                  {app.name}
                </button>
              ))}
            </div>

            <button
              onClick={copy}
              className="mt-3 w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 hover:border-brand-500 text-sm font-medium inline-flex items-center justify-center gap-2"
            >
              {copied ? <><Check size={14} className="text-emerald-600" /> Copied!</> : <><Copy size={14} /> {upiId}</>}
            </button>

            <button
              onClick={() => setThanks(true)}
              className="mt-2 w-full text-xs text-slate-500 hover:text-emerald-600 underline py-1"
            >
              I've sent the tip ✓
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Initial preset selector ----------
  return (
    <div className="my-10 max-w-2xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 md:p-8 relative shadow-sm print:hidden">
      {!persistent && (
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      )}

      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center">
          <Heart size={22} fill="currentColor" />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight">{t('title')}</h3>
          <p className="text-xs text-slate-500">{t('optional')}</p>
        </div>
      </div>

      <p className="text-slate-700 text-sm mb-5">{t('body')}</p>

      <div className="grid grid-cols-4 gap-2 mb-3">
        {PRESETS.map((amt) => (
          <button
            key={amt}
            onClick={() => pick(amt)}
            className="px-3 py-3 rounded-xl border-2 border-slate-200 hover:border-brand-500 hover:bg-brand-50 font-semibold transition flex flex-col items-center gap-0.5"
          >
            <span className="text-xs text-slate-500">₹</span>
            <span>{amt}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <IndianRupee size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="number"
            min={1}
            placeholder={t('custom')}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 outline-none text-sm"
          />
        </div>
        <button
          onClick={() => {
            const n = parseInt(custom, 10);
            if (n > 0) pick(n);
          }}
          disabled={!custom || parseInt(custom, 10) <= 0}
          className="px-5 rounded-xl bg-brand-600 text-white font-semibold text-sm disabled:opacity-40 hover:bg-brand-700 inline-flex items-center gap-1"
        >
          <Coffee size={14} /> {t('send')}
        </button>
      </div>

      {!persistent && (
        <button
          onClick={() => setDismissed(true)}
          className="text-xs text-slate-500 hover:text-slate-800 underline"
        >
          {t('skip')}
        </button>
      )}

      {!upiId && (
        <p className="mt-3 text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5 inline-block">
          <Sparkles size={10} className="inline mr-1" />
          Set <code>NEXT_PUBLIC_TIP_UPI_ID</code> in <code>.env.local</code> to receive UPI tips.
        </p>
      )}
    </div>
  );
}
