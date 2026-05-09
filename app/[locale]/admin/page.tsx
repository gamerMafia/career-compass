import { setRequestLocale } from 'next-intl/server';
import { quizQuestions } from '@/lib/quizData';
import { careers } from '@/lib/careers';
import { Lock, FileQuestion, Briefcase, GraduationCap, BarChart3 } from 'lucide-react';

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 mb-6 text-sm">
        <Lock size={16} /> Demo admin view — connect Clerk + Prisma to make it real.
      </div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {[
          { Icon: FileQuestion, label: 'Quiz Questions', value: quizQuestions.length },
          { Icon: Briefcase, label: 'Careers', value: careers.length },
          { Icon: GraduationCap, label: 'Schools', value: 12 },
          { Icon: BarChart3, label: 'Reports Generated', value: '1.2k' },
        ].map((c) => (
          <div key={c.label} className="bg-white rounded-2xl p-5 border border-slate-200">
            <c.Icon className="text-brand-600 mb-2" />
            <div className="text-2xl font-bold">{c.value}</div>
            <div className="text-sm text-slate-500">{c.label}</div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold mb-4">Recent Questions</h2>
          <ul className="space-y-2 text-sm">
            {quizQuestions.slice(0, 6).map((q) => (
              <li key={q.id} className="flex justify-between border-b border-slate-100 py-2">
                <span className="truncate pr-3">{q.question.en}</span>
                <span className="text-xs text-slate-500">{q.category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold mb-4">Top Careers</h2>
          <ul className="space-y-2 text-sm">
            {careers.slice(0, 6).map((c) => (
              <li key={c.name} className="flex justify-between border-b border-slate-100 py-2">
                <span className="truncate pr-3">{c.name}</span>
                <span className="text-xs text-slate-500">{c.stream}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
