import type { Stream, Lang } from './quizData';
import type { ScoreResult } from './scoring';
import { careers, streamMeta } from './careers';

export interface Recommendation {
  best: Stream;
  confidence: number;
  why: string;
  topCareers: string[];
  skills: string[];
  roadmap: string[];
  parentGuidance: string;
  growth: string;
  duration: string;
  salary: string;
  demand: string;
  source: 'ai' | 'rule-based';
}

const ruleText: Record<Stream, Record<Lang, { why: string; skills: string[]; roadmap: string[]; parent: string }>> = {
  SCIENCE: {
    en: {
      why: 'Your strong logical and analytical thinking, combined with curiosity for how things work, makes Science (PCM/PCB) a natural fit. You enjoy theory and problem-solving.',
      skills: ['Mathematics & Physics fundamentals', 'Coding (Python or C++)', 'Scientific writing', 'Lab experimentation', 'English communication'],
      roadmap: ['Year 1-2: Class 11-12 with PCM/PCB + JEE/NEET prep', 'Year 3-4: B.Tech / MBBS / B.Sc.', 'Year 5: Internships & specialization', 'Year 6+: Job, Masters, or research'],
      parent: 'Science is a long but rewarding path. Support your child with focused study time, good food, and emotional balance — coaching alone is not the answer.',
    },
    hi: { why: 'आपकी तार्किक सोच और चीज़ों को समझने की जिज्ञासा Science के लिए एकदम सही है। आपको थ्योरी और problem-solving पसंद है।', skills: ['गणित और भौतिकी', 'Coding (Python/C++)', 'वैज्ञानिक लेखन', 'प्रयोगशाला कौशल', 'अंग्रेज़ी संचार'], roadmap: ['साल 1-2: 11-12 PCM/PCB + JEE/NEET तैयारी', 'साल 3-4: B.Tech / MBBS / B.Sc.', 'साल 5: इंटर्नशिप', 'साल 6+: नौकरी/मास्टर्स'], parent: 'Science लंबा लेकिन फ़ायदेमंद रास्ता है। बच्चे को focus, अच्छा खाना और भावनात्मक संतुलन दें।' },
    gu: { why: 'તમારી તાર્કિક વિચારસરણી અને જિજ્ઞાસા Science માટે ઉત્તમ છે. તમને થિયરી અને પ્રોબ્લેમ સોલ્વિંગ ગમે છે.', skills: ['ગણિત અને ફિઝિક્સ', 'કોડિંગ (Python/C++)', 'વૈજ્ઞાનિક લેખન', 'લેબ કૌશલ્ય', 'ઇંગ્લિશ સંચાર'], roadmap: ['વર્ષ 1-2: 11-12 PCM/PCB + JEE/NEET', 'વર્ષ 3-4: B.Tech / MBBS / B.Sc.', 'વર્ષ 5: ઇન્ટર્નશિપ', 'વર્ષ 6+: નોકરી/માસ્ટર્સ'], parent: 'Science લાંબો પણ ફાયદાકારક રસ્તો છે. બાળકને focus, સારું ભોજન અને ભાવનાત્મક સંતુલન આપો.' },
    hinglish: { why: 'Aapki strong logical thinking aur curiosity ke karan Science (PCM/PCB) aapke liye perfect hai. Aapko theory aur problem-solving pasand hai.', skills: ['Maths aur Physics fundamentals', 'Coding (Python/C++)', 'Scientific writing', 'Lab skills', 'English communication'], roadmap: ['Saal 1-2: 11-12 PCM/PCB + JEE/NEET prep', 'Saal 3-4: B.Tech / MBBS / B.Sc.', 'Saal 5: Internship', 'Saal 6+: Job ya Masters'], parent: 'Science lamba par rewarding rasta hai. Bachhe ko focus, achha khana aur emotional support dijiye — sirf coaching kaafi nahi.' },
  },
  COMMERCE: {
    en: { why: 'You have a great mix of numerical aptitude and people skills. Commerce opens doors to CA, banking, finance, and entrepreneurship — all very high-demand in India.', skills: ['Accounts & Tally', 'Excel & financial modelling', 'English & business communication', 'Basic data analytics', 'Digital marketing basics'], roadmap: ['Year 1-2: 11-12 Commerce + CA Foundation', 'Year 3-5: B.Com / CA Inter & Final', 'Year 6: Articleship / first job', 'Year 7+: Senior role or own firm'], parent: 'Commerce is practical and earns well. Encourage internships and Tally/Excel courses early.' },
    hi: { why: 'आपके पास संख्यात्मक योग्यता और लोगों से जुड़ने का अच्छा मेल है। Commerce CA, बैंकिंग, फ़ाइनेंस के दरवाज़े खोलता है।', skills: ['अकाउंट्स और Tally', 'Excel', 'अंग्रेज़ी संचार', 'Data analytics', 'Digital marketing'], roadmap: ['साल 1-2: 11-12 Commerce + CA Foundation', 'साल 3-5: B.Com / CA', 'साल 6: Articleship', 'साल 7+: Senior भूमिका'], parent: 'Commerce व्यावहारिक है और अच्छी कमाई देता है। Internship और Tally course शुरू करवाएँ।' },
    gu: { why: 'તમારી સંખ્યાત્મક ક્ષમતા અને લોકો સાથે જોડાવાની ક્ષમતા Commerce માટે ઉત્તમ છે.', skills: ['એકાઉન્ટ્સ અને Tally', 'Excel', 'ઇંગ્લિશ', 'Data analytics', 'Digital marketing'], roadmap: ['વર્ષ 1-2: 11-12 Commerce + CA Foundation', 'વર્ષ 3-5: B.Com / CA', 'વર્ષ 6: Articleship', 'વર્ષ 7+: સિનિયર ભૂમિકા'], parent: 'Commerce વ્યવહારુ અને કમાણી આપે છે. Internship અને Tally course વહેલા કરાવો.' },
    hinglish: { why: 'Aapke paas numerical aptitude aur logon se judne ki ability ka achha mix hai. Commerce se CA, banking, finance ke darwaze khulte hain.', skills: ['Accounts aur Tally', 'Excel', 'English communication', 'Data analytics basics', 'Digital marketing'], roadmap: ['Saal 1-2: 11-12 Commerce + CA Foundation', 'Saal 3-5: B.Com / CA', 'Saal 6: Articleship', 'Saal 7+: Senior role ya apna firm'], parent: 'Commerce practical hai aur achhi kamai deti hai. Bachhe ko internship aur Tally jaldi karwaiye.' },
  },
  ARTS: {
    en: { why: 'Your creativity, communication, and social awareness make Arts/Humanities a strong fit. Modern Arts careers like UI/UX, content, law, and IAS pay very well.', skills: ['Strong English & one Indian language', 'Creative writing or design tools (Figma)', 'General Knowledge & current affairs', 'Public speaking', 'Critical thinking'], roadmap: ['Year 1-2: 11-12 Arts (any combination)', 'Year 3-5: BA / LLB / Design', 'Year 6+: UPSC / Master\'s / job in design or media'], parent: 'Arts is not "low" — modern Arts opens doors to UPSC, law, design, and creative industries. Support reading and exposure.' },
    hi: { why: 'आपकी रचनात्मकता और संचार कौशल Arts के लिए बढ़िया है। आधुनिक Arts करियर — UI/UX, कानून, IAS — बहुत अच्छा कमाते हैं।', skills: ['मज़बूत अंग्रेज़ी', 'रचनात्मक लेखन/Figma', 'GK', 'सार्वजनिक भाषण', 'आलोचनात्मक सोच'], roadmap: ['साल 1-2: 11-12 Arts', 'साल 3-5: BA / LLB / Design', 'साल 6+: UPSC / Master\'s / नौकरी'], parent: 'Arts कम नहीं है — आधुनिक Arts UPSC, कानून, डिज़ाइन के रास्ते खोलता है।' },
    gu: { why: 'તમારી સર્જનાત્મકતા અને સંચાર કૌશલ્ય Arts માટે ઉત્તમ છે.', skills: ['મજબૂત ઇંગ્લિશ', 'સર્જનાત્મક લેખન/Figma', 'GK', 'જાહેર વક્તવ્ય', 'આલોચનાત્મક વિચારસરણી'], roadmap: ['વર્ષ 1-2: 11-12 Arts', 'વર્ષ 3-5: BA / LLB / Design', 'વર્ષ 6+: UPSC / Master\'s / નોકરી'], parent: 'Arts ઓછું નથી — આધુનિક Arts UPSC, કાયદો, ડિઝાઇનના રસ્તા ખોલે છે.' },
    hinglish: { why: 'Aapki creativity aur communication skills Arts ke liye perfect hain. Modern Arts careers (UI/UX, law, IAS) bahut achhi salary dete hain.', skills: ['Strong English aur ek Indian language', 'Creative writing ya Figma', 'GK aur current affairs', 'Public speaking', 'Critical thinking'], roadmap: ['Saal 1-2: 11-12 Arts', 'Saal 3-5: BA / LLB / Design', 'Saal 6+: UPSC / Master\'s / job'], parent: 'Arts kam nahi hai — modern Arts se UPSC, law, design ke darwaze khulte hain. Bachhe ko reading aur exposure dijiye.' },
  },
  DIPLOMA: {
    en: { why: 'You are practical, hands-on, and want to start earning fast. Diploma Engineering is the smartest path — only 3 years, real skills, and direct job + lateral entry to B.Tech later.', skills: ['Engineering drawing / AutoCAD', 'Workshop & tools', 'Basic coding (for Computer Diploma)', 'English & report writing', 'Internship discipline'], roadmap: ['Year 1: Diploma 1st year — fundamentals', 'Year 2: Specialisation (Mech/Civil/Comp/EV)', 'Year 3: Internship + campus placement', 'Year 4-6: Job + optional B.Tech lateral entry'], parent: 'Diploma is NOT a backup — it is a smart shortcut. In Gujarat especially, Diploma engineers are in huge demand. Encourage your child fully.' },
    hi: { why: 'आप व्यावहारिक हैं और जल्दी कमाना चाहते हैं। Diploma Engineering सबसे समझदार रास्ता है — सिर्फ़ 3 साल और सीधी नौकरी।', skills: ['Engineering drawing / AutoCAD', 'Workshop tools', 'Basic coding', 'अंग्रेज़ी', 'Internship'], roadmap: ['साल 1: Diploma fundamentals', 'साल 2: Specialisation', 'साल 3: Internship + placement', 'साल 4-6: नौकरी + lateral B.Tech'], parent: 'Diploma backup नहीं — यह smart shortcut है। गुजरात में Diploma इंजीनियरों की भारी माँग है।' },
    gu: { why: 'તમે વ્યવહારુ છો અને જલ્દી કમાવા માંગો છો. Diploma Engineering સૌથી સ્માર્ટ રસ્તો છે — માત્ર 3 વર્ષ.', skills: ['AutoCAD', 'Workshop tools', 'Basic coding', 'ઇંગ્લિશ', 'Internship'], roadmap: ['વર્ષ 1: Diploma fundamentals', 'વર્ષ 2: Specialisation', 'વર્ષ 3: Internship + placement', 'વર્ષ 4-6: નોકરી + lateral B.Tech'], parent: 'Diploma backup નથી — એ smart shortcut છે. ગુજરાતમાં Diploma એન્જિનિયરોની માંગ ખૂબ છે.' },
    hinglish: { why: 'Aap practical ho aur jaldi earn karna chahte ho. Diploma Engineering sabse smart rasta hai — sirf 3 saal aur direct job.', skills: ['Engineering drawing / AutoCAD', 'Workshop tools', 'Basic coding', 'English', 'Internship discipline'], roadmap: ['Saal 1: Diploma fundamentals', 'Saal 2: Specialisation (Mech/Civil/Comp/EV)', 'Saal 3: Internship + campus placement', 'Saal 4-6: Job + optional B.Tech lateral entry'], parent: 'Diploma backup nahi hai — yeh smart shortcut hai. Gujarat mein diploma engineers ki bahut demand hai. Bachhe ko poora support dijiye.' },
  },
  ITI: {
    en: { why: 'You are a hands-on learner who wants real skills and quick income. ITI gives you a job-ready trade in just 1-2 years — and modern ITI trades like EV and Solar are the future.', skills: ['Trade-specific tool mastery', 'Workplace safety', 'Customer service', 'Basic English & Hindi', 'Entrepreneurship basics'], roadmap: ['Year 1-2: ITI in chosen trade', 'Year 2-3: Apprenticeship / first job', 'Year 4-5: Senior technician or own service', 'Year 6+: Supervisor / Gulf opportunity / business'], parent: 'ITI students often earn before their 11-12 friends. EV and solar trades are booming. Treat ITI with full respect — it can lead to a great life.' },
    hi: { why: 'आप hands-on सीखने वाले हैं और जल्दी कमाई चाहते हैं। ITI सिर्फ़ 1-2 साल में नौकरी देता है। EV और Solar जैसे आधुनिक trades भविष्य हैं।', skills: ['ट्रेड के टूल', 'कार्यस्थल सुरक्षा', 'ग्राहक सेवा', 'अंग्रेज़ी', 'Entrepreneurship'], roadmap: ['साल 1-2: ITI', 'साल 2-3: Apprenticeship/नौकरी', 'साल 4-5: सीनियर तकनीशियन', 'साल 6+: Supervisor / Gulf / व्यवसाय'], parent: 'ITI छात्र अक्सर 11-12 वालों से पहले कमाते हैं। EV/Solar बूम पर हैं। ITI को पूरा सम्मान दें।' },
    gu: { why: 'તમે hands-on શીખનાર છો અને જલ્દી કમાવા માંગો છો. ITI માત્ર 1-2 વર્ષમાં નોકરી આપે છે. EV/Solar trades ભવિષ્ય છે.', skills: ['ટ્રેડ ટૂલ્સ', 'સલામતી', 'કસ્ટમર સર્વિસ', 'ઇંગ્લિશ', 'ઉદ્યોગસાહસિકતા'], roadmap: ['વર્ષ 1-2: ITI', 'વર્ષ 2-3: Apprenticeship/નોકરી', 'વર્ષ 4-5: સિનિયર ટેકનિશિયન', 'વર્ષ 6+: Supervisor / Gulf / વ્યવસાય'], parent: 'ITI વિદ્યાર્થીઓ ઘણીવાર 11-12 ના મિત્રો પહેલા કમાય છે. EV/Solar boom પર છે. ITI ને પૂરો માન આપો.' },
    hinglish: { why: 'Aap hands-on learner ho aur jaldi income chahte ho. ITI sirf 1-2 saal mein job-ready bana deta hai. EV aur Solar jaise modern trades future hain.', skills: ['Trade-specific tools', 'Workplace safety', 'Customer service', 'Basic English aur Hindi', 'Entrepreneurship basics'], roadmap: ['Saal 1-2: ITI in chosen trade', 'Saal 2-3: Apprenticeship / first job', 'Saal 4-5: Senior technician ya apna service', 'Saal 6+: Supervisor / Gulf opportunity / business'], parent: 'ITI students often 11-12 ke friends se pehle kamate hain. EV aur solar trades booming hain. ITI ko poora respect dijiye — yeh great zindagi de sakta hai.' },
  },
};

export function ruleBasedRecommendation(score: ScoreResult, lang: Lang): Recommendation {
  const t = ruleText[score.best][lang];
  const topCareers = careers.filter((c) => c.stream === score.best).slice(0, 5).map((c) => c.name);
  const meta = streamMeta[score.best];
  return {
    best: score.best,
    confidence: score.confidence,
    why: t.why,
    topCareers,
    skills: t.skills,
    roadmap: t.roadmap,
    parentGuidance: t.parent,
    growth: meta.growth[lang],
    duration: meta.duration[lang],
    salary: meta.salary,
    demand: meta.demand,
    source: 'rule-based',
  };
}

const langLabel: Record<Lang, string> = {
  en: 'English',
  hi: 'Hindi (Devanagari script)',
  gu: 'Gujarati (Gujarati script)',
  hinglish: 'Hinglish (Roman-script Hindi like "Aapko science lena chahiye")',
};

export function buildAIPrompt(score: ScoreResult, lang: Lang): { system: string; user: string } {
  const system = `You are an expert Indian education and career counselor specialising in pathways for Class 10 students in Gujarat, India.

You MUST reply ONLY in ${langLabel[lang]}. Never mix languages.

Your tone:
- Friendly, motivating, easy to understand
- Treat all 5 paths (Science, Commerce, Arts, Diploma Engineering, ITI) as equally respectable
- Be specific to the Indian / Gujarat context
- Speak directly to the student

Return ONLY valid JSON matching this exact shape:
{
  "why": "2-3 sentences explaining why this stream fits the student",
  "topCareers": ["5 career names"],
  "skills": ["5 specific skills to start learning now"],
  "roadmap": ["4 steps spanning ~5 years, each starting with the time period"],
  "parentGuidance": "2-3 sentences directly addressed to the student's parents"
}`;

  const user = `Quiz scoring result:
- Best fit stream: ${score.best}
- Stream match %: ${JSON.stringify(score.streamPercents)}
- Aptitude profile: ${JSON.stringify(score.aptitudes)}
- Confidence: ${score.confidence}%

Generate the JSON now.`;

  return { system, user };
}
