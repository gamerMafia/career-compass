import type { Lang } from './quizData';

export type Stream12 = 'SCIENCE' | 'COMMERCE' | 'ARTS';

export type Track =
  // SCIENCE
  | 'ENGINEERING' | 'MEDICAL' | 'COMPUTER_AI' | 'RESEARCH' | 'DEFENCE' | 'PHARMACY'
  // COMMERCE
  | 'CA' | 'BBA_MBA' | 'BANKING_FINANCE' | 'ENTREPRENEUR' | 'DIGITAL_MARKETING' | 'ECONOMICS'
  // ARTS
  | 'LAW' | 'IAS_UPSC' | 'DESIGN' | 'JOURNALISM' | 'PSYCHOLOGY' | 'TEACHING';

export const TRACKS_BY_STREAM: Record<Stream12, Track[]> = {
  SCIENCE: ['ENGINEERING', 'MEDICAL', 'COMPUTER_AI', 'RESEARCH', 'DEFENCE', 'PHARMACY'],
  COMMERCE: ['CA', 'BBA_MBA', 'BANKING_FINANCE', 'ENTREPRENEUR', 'DIGITAL_MARKETING', 'ECONOMICS'],
  ARTS: ['LAW', 'IAS_UPSC', 'DESIGN', 'JOURNALISM', 'PSYCHOLOGY', 'TEACHING'],
};

export interface Q12Option {
  text: Record<Lang, string>;
  scores: Partial<Record<Track, number>>;
}
export interface Q12 {
  id: number;
  question: Record<Lang, string>;
  options: Q12Option[];
}

export interface TrackInfo {
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  why: Record<Lang, string>;
  parentGuidance: Record<Lang, string>;
  salary: string;
  demand: string;
  duration: string;
  skills: string[];
  roadmap: string[];
  topCareers: string[];
}

// =========================================================
// TRACK INFO
// =========================================================
export const TRACK_INFO: Record<Track, TrackInfo> = {
  ENGINEERING: {
    name: { en: 'Engineering (B.Tech)', hi: 'इंजीनियरिंग (B.Tech)', gu: 'એન્જિનિયરિંગ (B.Tech)', hinglish: 'Engineering (B.Tech)' },
    desc: { en: '4-year B.Tech in Mechanical, Civil, Electronics, etc. Crack JEE / GUJCET.', hi: '4-वर्षीय B.Tech। JEE / GUJCET।', gu: '4-વર્ષનો B.Tech. JEE / GUJCET.', hinglish: '4-saal ka B.Tech. JEE / GUJCET crack karo.' },
    why: { en: 'Your strong math + problem-solving + interest in how things work makes traditional engineering a great fit. Stable demand across India.', hi: 'आपकी मज़बूत गणित और समस्या-समाधान के लिए इंजीनियरिंग सबसे सही है।', gu: 'તમારી મજબૂત ગણિત અને પ્રોબ્લેમ સોલ્વિંગ માટે એન્જિનિયરિંગ યોગ્ય છે.', hinglish: 'Aapki strong maths aur problem-solving ke liye Engineering perfect hai.' },
    parentGuidance: { en: 'Encourage JEE/GUJCET prep early. Tier-2 govt colleges also give great results — don\'t over-spend on coaching.', hi: 'JEE/GUJCET की तैयारी जल्दी शुरू कराएँ। टियर-2 कॉलेज भी अच्छे हैं।', gu: 'JEE/GUJCET ની તૈયારી વહેલી શરૂ કરો. ટિયર-2 કોલેજ પણ સારી.', hinglish: 'JEE/GUJCET prep jaldi shuru karayein. Tier-2 colleges bhi achhe hain — coaching pe zyada kharcha mat karein.' },
    salary: '₹4L → ₹40L+', demand: 'Very High',
    duration: '4 years (B.Tech)',
    skills: ['Maths', 'Physics', 'CAD/Drawing', 'Programming basics', 'English'],
    roadmap: ['Year 1: JEE/GUJCET preparation alongside studies', 'Year 2-5: B.Tech with internships', 'Year 6: Job + GATE for M.Tech', 'Year 7+: Senior engineer / Manager / Higher studies'],
    topCareers: ['Mechanical Engineer', 'Civil Engineer', 'Electronics Engineer', 'Aerospace Engineer', 'Chemical Engineer'],
  },
  MEDICAL: {
    name: { en: 'Medical (MBBS / BDS / Allied)', hi: 'मेडिकल (MBBS / BDS)', gu: 'મેડિકલ (MBBS / BDS)', hinglish: 'Medical (MBBS / BDS / Allied)' },
    desc: { en: 'Crack NEET → 5.5 yr MBBS / 5 yr BDS / 4 yr BAMS / Nursing. Long but life-saving.', hi: 'NEET → 5.5 साल MBBS / BDS / BAMS।', gu: 'NEET → 5.5 વર્ષ MBBS / BDS.', hinglish: 'NEET crack karo → 5.5 saal MBBS / BDS / BAMS / Nursing.' },
    why: { en: 'Your Biology focus, empathy, and willingness to study long-term make medicine a strong, respected path.', hi: 'जीव विज्ञान में रुचि और सहानुभूति आपको मेडिकल के लिए उत्तम बनाती है।', gu: 'બાયોલોજીમાં રસ અને સહાનુભૂતિ તમને મેડિકલ માટે ઉત્તમ બનાવે છે.', hinglish: 'Aapki Biology mein interest aur empathy ke karan Medical aapke liye sahi hai.' },
    parentGuidance: { en: 'NEET requires consistent 2-year prep. Government colleges are affordable and prestigious — push for those before private.', hi: 'NEET के लिए 2-साल तैयारी ज़रूरी। सरकारी कॉलेज पहले कोशिश करें।', gu: 'NEET માટે 2-વર્ષની તૈયારી. પહેલા સરકારી કોલેજ ટ્રાય કરો.', hinglish: 'NEET ke liye consistent 2-saal prep chahiye. Pehle government college try karein, fir private.' },
    salary: '₹6L → ₹50L+', demand: 'Very High',
    duration: '5.5 years (MBBS) + PG',
    skills: ['Biology', 'Chemistry', 'Empathy', 'Stamina', 'English'],
    roadmap: ['Year 1: NEET prep + 12th', 'Year 2-6: MBBS / BDS', 'Year 7: Internship', 'Year 8+: PG (NEET-PG) → Specialist'],
    topCareers: ['MBBS Doctor', 'Dentist (BDS)', 'BAMS / BHMS', 'Nursing (B.Sc Nursing)', 'Pharmacist'],
  },
  COMPUTER_AI: {
    name: { en: 'Computer Science / AI / Cybersecurity', hi: 'कंप्यूटर साइंस / AI / साइबर', gu: 'કમ્પ્યુટર સાયન્સ / AI / સાયબર', hinglish: 'Computer Science / AI / Cybersecurity' },
    desc: { en: 'B.Tech CS / B.Sc IT / BCA → AI engineer, Cybersecurity, Software, Cloud. The hottest 2026 path.', hi: 'B.Tech CS / BCA → AI, साइबर, सॉफ्टवेयर।', gu: 'B.Tech CS / BCA → AI, સાયબર, સોફ્ટવેર.', hinglish: 'B.Tech CS / BCA → AI engineer, Cybersecurity, Software, Cloud.' },
    why: { en: 'Your strong logic + tech curiosity + interest in cybersecurity/AI make this the highest-growth path in India today.', hi: 'मज़बूत तर्क और तकनीकी जिज्ञासा आपको आज की सबसे बढ़ती फील्ड के लिए सही बनाती है।', gu: 'મજબૂત તર્ક અને ટેકનિકલ જિજ્ઞાસા આજની સૌથી વધતી ફીલ્ડ માટે યોગ્ય છે.', hinglish: 'Aapki strong logic, tech curiosity aur cybersecurity/AI mein interest aapko aaj ki sabse growing field ke liye perfect banata hai.' },
    parentGuidance: { en: 'Encourage your child to start coding NOW (Python). Build small projects — a GitHub portfolio matters more than college tier.', hi: 'अभी से Python सीखने दें। GitHub portfolio कॉलेज से ज़्यादा मायने रखता है।', gu: 'અત્યારથી Python શીખવા દો. GitHub portfolio કોલેજ કરતાં વધુ મહત્વનું છે.', hinglish: 'Bachhe ko abhi se Python coding karne dijiye. GitHub portfolio college tier se zyada important hai.' },
    salary: '₹5L → ₹50L+', demand: 'Very High',
    duration: '3-4 years (BCA / B.Tech CS)',
    skills: ['Python / C++', 'Linux', 'Networking basics', 'DSA', 'English'],
    roadmap: ['Year 1: Start coding (Python) + 12th', 'Year 2-5: BCA / B.Tech CS + side projects', 'Year 6: Job + AWS/Azure certifications', 'Year 7+: Senior dev / AI engineer / Security architect'],
    topCareers: ['AI / ML Engineer', 'Cybersecurity Analyst', 'Ethical Hacker', 'Full-Stack Developer', 'Cloud Engineer (AWS/Azure)'],
  },
  RESEARCH: {
    name: { en: 'Pure Science / Research', hi: 'शुद्ध विज्ञान / रिसर्च', gu: 'શુદ્ધ વિજ્ઞાન / રિસર્ચ', hinglish: 'Pure Science / Research' },
    desc: { en: 'B.Sc → M.Sc → PhD. ISRO, BARC, IIT research labs. For deep curiosity.', hi: 'B.Sc → M.Sc → PhD। ISRO, BARC में।', gu: 'B.Sc → M.Sc → PhD. ISRO, BARC.', hinglish: 'B.Sc → M.Sc → PhD. ISRO, BARC, IIT research labs.' },
    why: { en: 'Your love for understanding things deeply (not just applying them) makes pure science a great fit. Long path but very rewarding.', hi: 'गहराई से समझने की चाह आपको रिसर्च के लिए सही बनाती है।', gu: 'ઊંડાણથી સમજવાની ઇચ્છા તમને રિસર્ચ માટે યોગ્ય બનાવે છે.', hinglish: 'Aapki cheezon ko deeply samajhne ki ichha aapko Pure Science / Research ke liye sahi banati hai.' },
    parentGuidance: { en: 'Research is long but stable. KVPY, NTSE, INSPIRE scholarships ease the cost. Government research labs pay well.', hi: 'रिसर्च लंबा पर स्थिर है। KVPY/INSPIRE जैसी छात्रवृत्तियाँ हैं।', gu: 'રિસર્ચ લાંબું પણ સ્થિર છે. KVPY/INSPIRE સ્કોલરશીપ છે.', hinglish: 'Research lamba par stable hai. KVPY, INSPIRE jaisi scholarships milti hain. Govt research labs achhi salary deti hain.' },
    salary: '₹5L → ₹25L', demand: 'High (Government)',
    duration: '6-9 years (B.Sc + M.Sc + PhD)',
    skills: ['Strong fundamentals', 'Patience', 'Scientific writing', 'English', 'Maths'],
    roadmap: ['Year 1-3: B.Sc (Physics/Chem/Bio/Maths)', 'Year 4-5: M.Sc + GATE/NET', 'Year 6-9: PhD', 'Year 10+: Scientist / Professor'],
    topCareers: ['ISRO Scientist', 'BARC Researcher', 'Astrophysicist', 'Microbiologist', 'University Professor'],
  },
  DEFENCE: {
    name: { en: 'Defence (NDA / Navy / Air Force)', hi: 'रक्षा (NDA / नौसेना / वायुसेना)', gu: 'સંરક્ષણ (NDA / નેવી / એરફોર્સ)', hinglish: 'Defence (NDA / Navy / Air Force)' },
    desc: { en: 'NDA / NA after 12th → Indian Army, Navy, Air Force as commissioned officer.', hi: 'NDA → भारतीय सेना/नौसेना/वायुसेना में अधिकारी।', gu: 'NDA → ભારતીય સેના/નેવી/એરફોર્સમાં અધિકારી.', hinglish: 'NDA / NA → Indian Army, Navy, Air Force mein commissioned officer.' },
    why: { en: 'Your discipline, fitness, and desire to serve the nation make Defence a respected and stable lifelong path.', hi: 'अनुशासन और राष्ट्रसेवा की भावना रक्षा सेवा के लिए आदर्श है।', gu: 'શિસ્ત અને રાષ્ટ્રસેવાની ભાવના રક્ષા સેવા માટે આદર્શ છે.', hinglish: 'Aapki discipline, fitness aur desh seva ki bhavna Defence ke liye perfect hai.' },
    parentGuidance: { en: 'NDA exam is tough — encourage daily fitness and current affairs alongside academics. SSB interview tests personality.', hi: 'NDA परीक्षा कठिन है। फिटनेस और GK ज़रूरी।', gu: 'NDA પરીક્ષા કઠિન. ફિટનેસ અને GK જરૂરી.', hinglish: 'NDA exam tough hai. Daily fitness aur current affairs zaroori. SSB interview personality dekhta hai.' },
    salary: '₹7L → ₹25L+', demand: 'High',
    duration: '3 years (NDA) + 1 yr training',
    skills: ['Fitness', 'Discipline', 'GK', 'English', 'Leadership'],
    roadmap: ['Year 1: NDA written + 12th', 'Year 2: SSB interview + medical', 'Year 3-4: NDA training', 'Year 5+: Lieutenant → senior ranks'],
    topCareers: ['Army Officer', 'Navy Officer', 'Air Force Pilot', 'Merchant Navy', 'CAPF (CISF/BSF)'],
  },
  PHARMACY: {
    name: { en: 'Pharmacy (B.Pharm / D.Pharm)', hi: 'फार्मेसी (B.Pharm / D.Pharm)', gu: 'ફાર્મસી (B.Pharm / D.Pharm)', hinglish: 'Pharmacy (B.Pharm / D.Pharm)' },
    desc: { en: 'D.Pharm 2 yr OR B.Pharm 4 yr → Pharma industry / own medical store.', hi: 'D.Pharm 2 साल / B.Pharm 4 साल।', gu: 'D.Pharm 2 વર્ષ / B.Pharm 4 વર્ષ.', hinglish: 'D.Pharm 2 saal / B.Pharm 4 saal → Pharma industry ya apna medical store.' },
    why: { en: 'Your Biology + Chemistry strength + practical mindset fits Pharmacy. Gujarat is a pharma hub — jobs are everywhere.', hi: 'जीव और रसायन में मज़बूती फार्मेसी के लिए सही है। गुजरात फार्मा हब है।', gu: 'બાયોલોજી અને કેમિસ્ટ્રીમાં મજબૂતી ફાર્મસી માટે યોગ્ય. ગુજરાત ફાર્મા હબ છે.', hinglish: 'Aapki Bio + Chemistry mein strength Pharmacy ke liye sahi hai. Gujarat pharma hub hai — jobs har jagah hain.' },
    parentGuidance: { en: 'Pharmacy is shorter than MBBS and equally stable. Many own a medical store and earn well in 5-6 years.', hi: 'फार्मेसी MBBS से छोटा और स्थिर है।', gu: 'ફાર્મસી MBBS કરતાં ટૂંકી અને સ્થિર.', hinglish: 'Pharmacy MBBS se chhoti aur equally stable hai. Kayi log medical store khol ke 5-6 saal mein achha kamate hain.' },
    salary: '₹3L → ₹15L', demand: 'Very High',
    duration: '2 yr (D.Pharm) / 4 yr (B.Pharm)',
    skills: ['Chemistry', 'Biology', 'Customer service', 'Inventory', 'English'],
    roadmap: ['Year 1-2: D.Pharm OR Year 1-4: B.Pharm', 'Year 3: Industry job / open store', 'Year 4-6: Senior pharmacist or store growth', 'Year 7+: M.Pharm / pharma management'],
    topCareers: ['Hospital Pharmacist', 'Pharma R&D Associate', 'Medical Representative', 'Quality Control', 'Own Medical Store'],
  },

  CA: {
    name: { en: 'Chartered Accountant (CA)', hi: 'चार्टर्ड अकाउंटेंट (CA)', gu: 'ચાર્ટર્ડ એકાઉન્ટન્ટ (CA)', hinglish: 'Chartered Accountant (CA)' },
    desc: { en: 'CA Foundation → Inter → Final + 3-yr Articleship. Tough but very respected.', hi: 'CA Foundation → Inter → Final + 3 साल Articleship।', gu: 'CA Foundation → Inter → Final + 3 વર્ષ Articleship.', hinglish: 'CA Foundation → Inter → Final + 3 saal Articleship.' },
    why: { en: 'Your accounting accuracy + patience + analytical mind fit CA perfectly. Indian businesses always need good CAs.', hi: 'सटीक अकाउंट्स और धैर्य CA के लिए सही है।', gu: 'સચોટ એકાઉન્ટ્સ અને ધીરજ CA માટે યોગ્ય.', hinglish: 'Aapki accounting accuracy, patience aur analytical mindset CA ke liye perfect hai.' },
    parentGuidance: { en: 'CA is tough — many fail at first attempt. That\'s normal. Encourage steady study, not panic. ICAI material is enough.', hi: 'CA कठिन है — पहली बार में फेल होना सामान्य।', gu: 'CA કઠિન છે — પહેલીવાર ફેલ થવું સામાન્ય.', hinglish: 'CA tough hai — pehli baar fail hona normal hai. ICAI material kaafi hai, panic mat kijiye.' },
    salary: '₹8L → ₹50L', demand: 'Very High',
    duration: '4-5 years',
    skills: ['Accounts', 'Tax law', 'Excel', 'Tally', 'English'],
    roadmap: ['Year 1-2: 12th + CA Foundation', 'Year 3-4: CA Inter + Articleship start', 'Year 5: CA Final', 'Year 6+: Big-4 / own practice'],
    topCareers: ['Audit Manager (Big-4)', 'Tax Consultant', 'CFO', 'Forensic Accountant', 'Own CA Firm'],
  },
  BBA_MBA: {
    name: { en: 'BBA + MBA (Business Management)', hi: 'BBA + MBA', gu: 'BBA + MBA', hinglish: 'BBA + MBA (Business Management)' },
    desc: { en: '3 yr BBA → 2 yr MBA (CAT/MAT). Marketing, HR, Operations, Strategy.', hi: '3 साल BBA → 2 साल MBA।', gu: '3 વર્ષ BBA → 2 વર્ષ MBA.', hinglish: '3 saal BBA → 2 saal MBA (CAT/MAT). Marketing, HR, Operations.' },
    why: { en: 'Your leadership + people skills + business curiosity fit management. MBA from a good school multiplies your career.', hi: 'नेतृत्व और जनसंपर्क कौशल मैनेजमेंट के लिए सही है।', gu: 'નેતૃત્વ અને સંપર્ક કૌશલ્ય મેનેજમેન્ટ માટે યોગ્ય.', hinglish: 'Aapki leadership, people skills aur business curiosity Management ke liye perfect hai.' },
    parentGuidance: { en: 'A good MBA (IIM, MDI, top private) opens doors. Don\'t pay huge fees for unranked colleges.', hi: 'अच्छे MBA कॉलेज (IIM/टॉप) चुनें।', gu: 'સારી MBA કોલેજ (IIM/ટોપ) પસંદ કરો.', hinglish: 'Achhe MBA college (IIM, MDI, top private) chuniye. Unranked colleges mein bahut fees mat dijiye.' },
    salary: '₹5L → ₹40L+', demand: 'High',
    duration: '5 years (BBA + MBA)',
    skills: ['English', 'Public speaking', 'Excel', 'Analytics', 'Leadership'],
    roadmap: ['Year 1-3: BBA + internships + GMAT/CAT prep', 'Year 4-5: MBA', 'Year 6: Manager/Consultant role', 'Year 7+: Senior leadership'],
    topCareers: ['Marketing Manager', 'HR Head', 'Strategy Consultant', 'Operations Manager', 'Product Manager'],
  },
  BANKING_FINANCE: {
    name: { en: 'Banking & Finance', hi: 'बैंकिंग और वित्त', gu: 'બેન્કિંગ અને ફાઇનાન્સ', hinglish: 'Banking & Finance' },
    desc: { en: 'B.Com → IBPS / SBI PO / RBI Grade B. Stable government bank job + growth.', hi: 'B.Com → IBPS / SBI PO। स्थिर सरकारी बैंक नौकरी।', gu: 'B.Com → IBPS / SBI PO. સ્થિર બેન્ક નોકરી.', hinglish: 'B.Com → IBPS / SBI PO / RBI Grade B. Stable government bank job + growth.' },
    why: { en: 'Your numerical sense + reliability + interest in money management fit banking exams. Job security is excellent.', hi: 'गणित और जिम्मेदारी बैंकिंग के लिए सही है।', gu: 'ગણિત અને જવાબદારી બેન્કિંગ માટે યોગ્ય.', hinglish: 'Aapki numerical sense, reliability aur money management ki samajh Banking ke liye perfect hai.' },
    parentGuidance: { en: 'Bank exams reward consistent practice (quant, reasoning, English). 1-year focused prep usually clears it.', hi: 'बैंक परीक्षा में नियमित अभ्यास ज़रूरी।', gu: 'બેન્ક પરીક્ષામાં નિયમિત પ્રેક્ટિસ જરૂરી.', hinglish: 'Bank exams mein regular practice (quant, reasoning, English) zaroori. 1-saal focused prep se clear ho jaata hai.' },
    salary: '₹5L → ₹20L', demand: 'Very High',
    duration: '3 years (B.Com) + 1 yr exam prep',
    skills: ['Quant aptitude', 'Reasoning', 'English', 'GA', 'Excel'],
    roadmap: ['Year 1-3: B.Com + bank exam prep', 'Year 4: IBPS PO / SBI PO', 'Year 5-7: Officer → Manager', 'Year 8+: AGM / Branch Head'],
    topCareers: ['Bank PO (PSU)', 'RBI Grade B', 'Investment Banker', 'Insurance Officer', 'Mutual Fund Analyst'],
  },
  ENTREPRENEUR: {
    name: { en: 'Entrepreneurship / Family Business', hi: 'उद्यमिता / पारिवारिक व्यवसाय', gu: 'ઉદ્યોગસાહસિકતા / કૌટુંબિક વ્યવસાય', hinglish: 'Entrepreneurship / Family Business' },
    desc: { en: 'B.Com / BBA + start your own business or scale family business. Gujarat\'s strength.', hi: 'B.Com / BBA + अपना व्यवसाय।', gu: 'B.Com / BBA + પોતાનો વ્યવસાય.', hinglish: 'B.Com / BBA + apna business shuru karo ya family business scale karo.' },
    why: { en: 'Your risk-appetite, sales-skills, and Gujarati business mindset are the perfect ingredients for entrepreneurship.', hi: 'जोखिम लेने की क्षमता और गुजराती व्यापारिक सोच उद्यमिता के लिए सही है।', gu: 'જોખમ લેવાની ક્ષમતા અને ગુજરાતી વેપારી માનસિકતા ઉદ્યોગસાહસિકતા માટે યોગ્ય.', hinglish: 'Aapki risk-taking ability, sales skills aur Gujarati business mindset Entrepreneurship ke liye perfect hai.' },
    parentGuidance: { en: 'Encourage them to learn finance, marketing, and law basics. Mentorship matters more than degree.', hi: 'फ़ाइनेंस, मार्केटिंग और कानून सीखने दें।', gu: 'ફાઇનાન્સ, માર્કેટિંગ અને કાયદો શીખવા દો.', hinglish: 'Bachhe ko finance, marketing aur law basics seekhne dijiye. Mentorship degree se zyada matter karti hai.' },
    salary: '₹0 → ₹∞', demand: 'Growing',
    duration: 'Lifetime',
    skills: ['Sales', 'Finance', 'Hiring', 'Digital marketing', 'Risk-taking'],
    roadmap: ['Year 1-3: B.Com / BBA + side hustle', 'Year 4-5: Start small + reinvest', 'Year 6-8: Scale, hire, systemize', 'Year 9+: Multi-vertical owner'],
    topCareers: ['D2C Brand Owner', 'Trading Business', 'Manufacturing SME', 'Franchise Owner', 'Service Agency'],
  },
  DIGITAL_MARKETING: {
    name: { en: 'Digital Marketing & Growth', hi: 'डिजिटल मार्केटिंग', gu: 'ડિજિટલ માર્કેટિંગ', hinglish: 'Digital Marketing & Growth' },
    desc: { en: 'B.Com + Google/Meta certifications. Run ads, SEO, social — earn from anywhere.', hi: 'B.Com + Google/Meta सर्टिफिकेशन।', gu: 'B.Com + Google/Meta સર્ટિફિકેશન.', hinglish: 'B.Com + Google/Meta certifications. Ads, SEO, social media run karo.' },
    why: { en: 'Your creativity + numbers + comfort with social media is the modern marketer\'s sweet spot. Freelance from day one.', hi: 'रचनात्मकता और सोशल मीडिया की समझ डिजिटल मार्केटिंग के लिए सही है।', gu: 'સર્જનાત્મકતા અને સોશિયલ મીડિયાની સમજ ડિજિટલ માર્કેટિંગ માટે યોગ્ય.', hinglish: 'Aapki creativity, numbers aur social media samajh modern marketer ka perfect mix hai.' },
    parentGuidance: { en: 'Encourage real-world practice — let them run a small business\'s Instagram. Skill > degree in this field.', hi: 'असली प्रोजेक्ट करवाएँ। यहाँ कौशल डिग्री से ऊपर है।', gu: 'સાચા પ્રોજેક્ટ કરાવો. અહીં કૌશલ્ય ડિગ્રીથી મહત્વનું.', hinglish: 'Bachhe se real businesses ke Instagram chalwaiye. Yahan skill > degree.' },
    salary: '₹4L → ₹30L', demand: 'Very High',
    duration: '3 years + lifelong learning',
    skills: ['Meta/Google Ads', 'SEO', 'Copywriting', 'Analytics', 'Canva'],
    roadmap: ['Year 1-3: B.Com + Google/Meta certs + freelance', 'Year 4: Junior marketer', 'Year 5-7: Lead / Head of Growth', 'Year 8+: Own agency'],
    topCareers: ['Performance Marketer', 'SEO Specialist', 'Social Media Manager', 'Growth Hacker', 'Marketing Agency Owner'],
  },
  ECONOMICS: {
    name: { en: 'Economics Honours', hi: 'अर्थशास्त्र (Honours)', gu: 'અર્થશાસ્ત્ર (Honours)', hinglish: 'Economics Honours' },
    desc: { en: 'BA/B.Sc Economics → analyst, civil services, research, MBA.', hi: 'BA/B.Sc Economics → विश्लेषक/IAS/MBA।', gu: 'BA/B.Sc Economics → એનાલિસ્ટ / IAS / MBA.', hinglish: 'BA/B.Sc Economics → analyst, civil services, research, MBA.' },
    why: { en: 'Your love for numbers + interest in how the world works fits Economics. Opens doors to MBA, IAS, and research.', hi: 'गणित और दुनिया की समझ अर्थशास्त्र के लिए सही है।', gu: 'ગણિત અને દુનિયાની સમજ અર્થશાસ્ત્ર માટે યોગ્ય.', hinglish: 'Aapki numbers se prem aur duniya ki samajh Economics ke liye perfect hai.' },
    parentGuidance: { en: 'A strong Economics degree from DU/SRCC/Ashoka opens elite doors. It\'s not just B.Com — it\'s deeper.', hi: 'अच्छे कॉलेज (DU/SRCC) से अर्थशास्त्र विशेष द्वार खोलता है।', gu: 'સારી કોલેજ (DU/SRCC) થી ઇકોનોમિક્સ ખાસ દ્વાર ખોલે.', hinglish: 'Achhi college (DU, SRCC, Ashoka) se Economics elite doors kholti hai. B.Com se deeper hai.' },
    salary: '₹4L → ₹30L', demand: 'High',
    duration: '3 years',
    skills: ['Maths', 'Statistics', 'English', 'Research', 'Excel'],
    roadmap: ['Year 1-3: BA Economics Hons', 'Year 4: Analyst job / MA / civil services prep', 'Year 5-7: Senior analyst / Officer', 'Year 8+: PhD / Senior leadership'],
    topCareers: ['Economic Analyst', 'Policy Researcher', 'IAS / IES', 'Investment Analyst', 'Data Analyst'],
  },

  LAW: {
    name: { en: 'Law (BA-LLB / LLB)', hi: 'कानून (LLB)', gu: 'કાયદો (LLB)', hinglish: 'Law (BA-LLB / LLB)' },
    desc: { en: 'CLAT → 5-yr integrated BA-LLB at NLU, or 3-yr LLB after graduation.', hi: 'CLAT → 5 साल BA-LLB।', gu: 'CLAT → 5 વર્ષ BA-LLB.', hinglish: 'CLAT crack karo → 5-saal BA-LLB at NLU, ya 3-saal LLB after graduation.' },
    why: { en: 'Your strong language, debate, and reasoning skills make Law a top fit. Lawyers shape society and earn well.', hi: 'भाषा और तर्क-वितर्क कौशल कानून के लिए सही है।', gu: 'ભાષા અને તર્ક-વિતર્ક કૌશલ્ય કાયદા માટે યોગ્ય.', hinglish: 'Aapki strong language, debate aur reasoning skills Law ke liye perfect hain.' },
    parentGuidance: { en: 'Encourage daily reading (newspaper, opinion columns). NLUs (CLAT) give the best start, but state colleges also work.', hi: 'अख़बार पढ़ना ज़रूरी। NLU सबसे अच्छा।', gu: 'દૈનિક અખબાર વાંચન જરૂરી. NLU શ્રેષ્ઠ.', hinglish: 'Bachhe ko daily newspaper aur opinion columns padhne dijiye. NLU best hai par state colleges bhi kaam karte hain.' },
    salary: '₹5L → ₹50L+', demand: 'High',
    duration: '5 years (BA-LLB)',
    skills: ['English', 'Reading', 'Public speaking', 'Logical reasoning', 'GK'],
    roadmap: ['Year 1: CLAT prep + 12th', 'Year 2-6: BA-LLB at NLU', 'Year 7: Junior advocate / corporate firm', 'Year 8+: Senior counsel / partner / judge'],
    topCareers: ['Corporate Lawyer', 'Litigation Advocate', 'Civil Judge', 'Legal Consultant', 'Cyber Law Expert'],
  },
  IAS_UPSC: {
    name: { en: 'IAS / Civil Services (UPSC)', hi: 'IAS / सिविल सेवा', gu: 'IAS / સિવિલ સર્વિસીઝ', hinglish: 'IAS / Civil Services (UPSC)' },
    desc: { en: 'Any graduation → UPSC Civil Services. IAS, IPS, IFS — top govt service.', hi: 'कोई भी ग्रेजुएशन → UPSC।', gu: 'કોઈપણ ગ્રેજ્યુએશન → UPSC.', hinglish: 'Any graduation → UPSC Civil Services. IAS, IPS, IFS.' },
    why: { en: 'Your discipline, strong reading, and desire to serve nationally make UPSC a fit. Dream big, start prep early.', hi: 'अनुशासन और राष्ट्रसेवा UPSC के लिए सही है। जल्दी तैयारी शुरू करें।', gu: 'શિસ્ત અને રાષ્ટ્રસેવા UPSC માટે યોગ્ય. વહેલી તૈયારી શરૂ કરો.', hinglish: 'Aapki discipline, reading aur desh seva ki ichha UPSC ke liye perfect hai. Jaldi prep shuru karein.' },
    parentGuidance: { en: 'UPSC requires 2-3 years dedicated prep. Choose graduation that overlaps with optional subject. NCERT first, then advanced.', hi: 'UPSC के लिए 2-3 साल समर्पित तैयारी।', gu: 'UPSC માટે 2-3 વર્ષ સમર્પિત તૈયારી.', hinglish: 'UPSC ke liye 2-3 saal dedicated prep chahiye. Graduation aisa choose karein jo optional se overlap ho. Pehle NCERT.' },
    salary: '₹7L → ₹25L+ + perks', demand: 'High',
    duration: '3 yr UG + 2-3 yr UPSC prep',
    skills: ['English/Hindi', 'GS', 'CSAT', 'Essay writing', 'Current affairs'],
    roadmap: ['Year 1-3: BA + start NCERT prep', 'Year 4-5: Full-time UPSC prep + Prelims/Mains', 'Year 6: Interview + posting', 'Year 7+: District Magistrate → Secretary'],
    topCareers: ['IAS Officer', 'IPS Officer', 'IFS (Foreign Service)', 'Indian Revenue Service', 'State PCS'],
  },
  DESIGN: {
    name: { en: 'Design (NID / NIFT / UI-UX)', hi: 'डिज़ाइन (NID / NIFT)', gu: 'ડિઝાઇન (NID / NIFT)', hinglish: 'Design (NID / NIFT / UI-UX)' },
    desc: { en: 'NID/NIFT/UCEED entrance → 4-yr B.Des. Or self-taught UI/UX designer.', hi: 'NID/NIFT/UCEED → 4 साल B.Des।', gu: 'NID/NIFT/UCEED → 4 વર્ષ B.Des.', hinglish: 'NID/NIFT/UCEED entrance → 4-saal B.Des. Ya self-taught UI/UX designer.' },
    why: { en: 'Your creativity, visual sense, and empathy for users make design a brilliant fit — and modern UI/UX pays globally.', hi: 'रचनात्मकता और दृष्टिकोण डिज़ाइन के लिए सही है।', gu: 'સર્જનાત્મકતા અને દૃષ્ટિકોણ ડિઝાઇન માટે યોગ્ય.', hinglish: 'Aapki creativity, visual sense aur user empathy Design ke liye perfect hai. Modern UI/UX globally pays.' },
    parentGuidance: { en: 'Build a portfolio early — sketches, Figma designs, side projects. Portfolio matters more than the institute name.', hi: 'पोर्टफोलियो जल्दी बनाएँ। यह संस्थान से ज़्यादा मायने रखता है।', gu: 'પોર્ટફોલિયો વહેલો બનાવો.', hinglish: 'Bachhe ko portfolio jaldi banane dijiye — sketches, Figma, side projects. Portfolio institute se zyada important hai.' },
    salary: '₹5L → ₹35L', demand: 'Very High',
    duration: '4 years (B.Des)',
    skills: ['Sketching', 'Figma / Adobe', 'Empathy', 'Visual design', 'English'],
    roadmap: ['Year 1: NID/NIFT/UCEED prep + portfolio', 'Year 2-5: B.Des + freelance', 'Year 6: Junior designer at startup', 'Year 7+: Lead designer / own studio'],
    topCareers: ['UI/UX Designer', 'Product Designer', 'Fashion Designer', 'Animator', 'Brand Designer'],
  },
  JOURNALISM: {
    name: { en: 'Journalism & Media', hi: 'पत्रकारिता और मीडिया', gu: 'પત્રકારત્વ અને મીડિયા', hinglish: 'Journalism & Media' },
    desc: { en: 'BA Journalism / Mass Comm → reporter, anchor, content creator, documentary maker.', hi: 'BA पत्रकारिता → रिपोर्टर/एंकर।', gu: 'BA પત્રકારત્વ → રિપોર્ટર/એન્કર.', hinglish: 'BA Journalism / Mass Comm → reporter, anchor, content creator, documentary maker.' },
    why: { en: 'Your curiosity, communication, and storytelling instinct fit journalism. Modern media (YouTube, podcasts) is wide open.', hi: 'जिज्ञासा और कहानी कहने की कला पत्रकारिता के लिए सही है।', gu: 'જિજ્ઞાસા અને વાર્તા કહેવાની કળા પત્રકારત્વ માટે યોગ્ય.', hinglish: 'Aapki curiosity, communication aur storytelling Journalism ke liye perfect hai. Modern media (YouTube, podcasts) wide open hai.' },
    parentGuidance: { en: 'Encourage writing a blog or running a YouTube channel — even with 100 followers it builds the right skills.', hi: 'ब्लॉग या YouTube चैनल चलाने दें।', gu: 'બ્લોગ કે YouTube ચેનલ ચલાવવા દો.', hinglish: 'Bachhe ko blog ya YouTube channel chalane dijiye — 100 followers se bhi sahi skills build hote hain.' },
    salary: '₹3L → ₹25L', demand: 'Growing',
    duration: '3 years',
    skills: ['Writing', 'Video editing', 'Public speaking', 'Curiosity', 'English'],
    roadmap: ['Year 1-3: BA Journalism + blog/YouTube', 'Year 4: Junior reporter / desk', 'Year 5-7: Beat specialist', 'Year 8+: Editor / own channel'],
    topCareers: ['News Reporter', 'Anchor', 'Documentary Filmmaker', 'YouTuber / Podcaster', 'PR Specialist'],
  },
  PSYCHOLOGY: {
    name: { en: 'Psychology', hi: 'मनोविज्ञान', gu: 'મનોવિજ્ઞાન', hinglish: 'Psychology' },
    desc: { en: 'BA/B.Sc Psychology → MA → counsellor, clinical psychologist, HR.', hi: 'BA/B.Sc Psychology → MA → काउंसलर।', gu: 'BA/B.Sc Psychology → MA → કાઉન્સેલર.', hinglish: 'BA/B.Sc Psychology → MA → counsellor, clinical psychologist, HR.' },
    why: { en: 'Your empathy, listening skills, and curiosity about people fit Psychology. Mental health demand is exploding in India.', hi: 'सहानुभूति और लोगों की समझ मनोविज्ञान के लिए सही है।', gu: 'સહાનુભૂતિ અને લોકોની સમજ મનોવિજ્ઞાન માટે યોગ્ય.', hinglish: 'Aapki empathy, listening skills aur logon ke baare mein curiosity Psychology ke liye perfect hai.' },
    parentGuidance: { en: 'Psychology is now a high-respect profession in India. Encourage RCI registration for clinical practice.', hi: 'मनोविज्ञान अब सम्मानित पेशा है।', gu: 'મનોવિજ્ઞાન હવે માનનીય વ્યવસાય છે.', hinglish: 'Psychology ab India mein respect-wala profession hai. Clinical ke liye RCI registration karwana zaroori.' },
    salary: '₹3L → ₹20L', demand: 'High & Growing',
    duration: '5 years (BA + MA)',
    skills: ['Empathy', 'Listening', 'Research', 'English', 'Statistics'],
    roadmap: ['Year 1-3: BA Psychology', 'Year 4-5: MA + RCI registration (clinical)', 'Year 6: Junior counsellor / HR role', 'Year 7+: Senior clinical practice / own clinic'],
    topCareers: ['Clinical Psychologist', 'School Counsellor', 'Corporate HR', 'Therapist', 'Researcher'],
  },
  TEACHING: {
    name: { en: 'Teaching & Education (B.Ed)', hi: 'शिक्षण (B.Ed)', gu: 'શિક્ષણ (B.Ed)', hinglish: 'Teaching & Education (B.Ed)' },
    desc: { en: 'BA/B.Sc + B.Ed → school teacher; M.A.+NET → Assistant Professor.', hi: 'BA + B.Ed → शिक्षक; NET → प्रोफ़ेसर।', gu: 'BA + B.Ed → શિક્ષક; NET → પ્રોફેસર.', hinglish: 'BA/B.Sc + B.Ed → school teacher; MA+NET → Assistant Professor.' },
    why: { en: 'Your patience, communication, and love for explaining things fit teaching. Stable govt jobs (TET/HTAT) are abundant in Gujarat.', hi: 'धैर्य और समझाने की कला शिक्षण के लिए सही है। गुजरात में सरकारी नौकरी।', gu: 'ધીરજ અને સમજાવવાની કળા શિક્ષણ માટે યોગ્ય. ગુજરાતમાં સરકારી નોકરી.', hinglish: 'Aapki patience, communication aur explain karne ki kala Teaching ke liye perfect hai. Gujarat mein TET/HTAT govt jobs.' },
    parentGuidance: { en: 'Teaching is stable, dignified and gives long vacations. Govt teacher selection (TET) in Gujarat needs steady prep.', hi: 'शिक्षण स्थिर और सम्मानित है।', gu: 'શિક્ષણ સ્થિર અને માનનીય.', hinglish: 'Teaching stable aur dignified hai. Gujarat mein TET/HTAT prep zaroori.' },
    salary: '₹3L → ₹15L', demand: 'High',
    duration: '5 years (BA + B.Ed)',
    skills: ['Communication', 'Patience', 'Subject expertise', 'English', 'Classroom management'],
    roadmap: ['Year 1-3: BA / B.Sc', 'Year 4-5: B.Ed + TET / HTAT', 'Year 6: Govt school teacher', 'Year 7+: HOD / Principal / NET → Professor'],
    topCareers: ['Govt School Teacher', 'Private School Teacher', 'Asst. Professor', 'Coaching Instructor', 'Online Educator'],
  },
};

// =========================================================
// QUESTIONS PER STREAM (8 each)
// =========================================================
export const Q12_BANK: Record<Stream12, Q12[]> = {
  SCIENCE: [
    { id: 1001, question: { en: 'After 12th Science, what excites you most?', hi: '12वीं Science के बाद क्या सबसे रोमांचक?', gu: '12 Science પછી શું સૌથી રોમાંચક?', hinglish: '12th Science ke baad kya sabse exciting?' },
      options: [
        { text: { en: 'Designing machines, buildings, electronics', hi: 'मशीन/इमारत/इलेक्ट्रॉनिक्स डिज़ाइन', gu: 'મશીન/ઇમારત/ઇલેક્ટ્રોનિક્સ ડિઝાઇન', hinglish: 'Machines, buildings, electronics design' }, scores: { ENGINEERING: 4 } },
        { text: { en: 'Treating patients & saving lives', hi: 'मरीज़ों का इलाज', gu: 'દર્દીઓની સારવાર', hinglish: 'Patients ka ilaaj aur jaan bachana' }, scores: { MEDICAL: 4, PHARMACY: 1 } },
        { text: { en: 'Building software, AI, securing systems', hi: 'सॉफ्टवेयर, AI, सुरक्षा', gu: 'સોફ્ટવેર, AI, સુરક્ષા', hinglish: 'Software, AI, cybersecurity build karna' }, scores: { COMPUTER_AI: 4 } },
        { text: { en: 'Pure research / serving in defence', hi: 'रिसर्च / रक्षा सेवा', gu: 'રિસર્ચ / રક્ષા સેવા', hinglish: 'Research ya Defence service' }, scores: { RESEARCH: 3, DEFENCE: 3 } },
      ] },
    { id: 1002, question: { en: 'Which subject is your strongest in 11-12?', hi: '11-12 में सबसे मज़बूत विषय?', gu: '11-12 માં સૌથી મજબૂત વિષય?', hinglish: '11-12 mein sabse strong subject?' },
      options: [
        { text: { en: 'Physics + Maths', hi: 'भौतिकी + गणित', gu: 'ફિઝિક્સ + ગણિત', hinglish: 'Physics + Maths' }, scores: { ENGINEERING: 3, COMPUTER_AI: 3, DEFENCE: 1, RESEARCH: 2 } },
        { text: { en: 'Biology + Chemistry', hi: 'जीवविज्ञान + रसायन', gu: 'બાયોલોજી + કેમિસ્ટ્રી', hinglish: 'Biology + Chemistry' }, scores: { MEDICAL: 4, PHARMACY: 3, RESEARCH: 1 } },
        { text: { en: 'Computer Science', hi: 'कंप्यूटर साइंस', gu: 'કમ્પ્યુટર સાયન્સ', hinglish: 'Computer Science' }, scores: { COMPUTER_AI: 4, ENGINEERING: 2 } },
        { text: { en: 'All-rounder, no clear favourite', hi: 'सभी अच्छे, स्पष्ट पसंद नहीं', gu: 'બધામાં સારો', hinglish: 'Sab achhe hain, no clear favorite' }, scores: { ENGINEERING: 1, MEDICAL: 1, COMPUTER_AI: 1, DEFENCE: 1 } },
      ] },
    { id: 1003, question: { en: 'How many years are you ready to study?', hi: 'कितने साल पढ़ाई करने को तैयार?', gu: 'કેટલા વર્ષ અભ્યાસ કરવા તૈયાર?', hinglish: 'Kitne saal padhai karne ko ready ho?' },
      options: [
        { text: { en: '4-5 years (B.Tech / BCA)', hi: '4-5 साल', gu: '4-5 વર્ષ', hinglish: '4-5 saal (B.Tech / BCA)' }, scores: { ENGINEERING: 3, COMPUTER_AI: 3 } },
        { text: { en: '5-7 years (MBBS / B.Pharm + work)', hi: '5-7 साल', gu: '5-7 વર્ષ', hinglish: '5-7 saal (MBBS / B.Pharm)' }, scores: { MEDICAL: 4, PHARMACY: 2 } },
        { text: { en: '7+ years (research / specialisation)', hi: '7+ साल', gu: '7+ વર્ષ', hinglish: '7+ saal (research / specialisation)' }, scores: { RESEARCH: 4, MEDICAL: 1 } },
        { text: { en: '3 years + then exam (Defence / govt)', hi: '3 साल + परीक्षा', gu: '3 વર્ષ + પરીક્ષા', hinglish: '3 saal + then exam (Defence / govt)' }, scores: { DEFENCE: 3, PHARMACY: 1 } },
      ] },
    { id: 1004, question: { en: 'Cybersecurity & Ethical Hacking — your view?', hi: 'साइबर सुरक्षा और एथिकल हैकिंग पर आपकी राय?', gu: 'સાયબર સિક્યુરિટી અને એથિકલ હેકિંગ વિશે?', hinglish: 'Cybersecurity aur Ethical Hacking — aapki opinion?' },
      options: [
        { text: { en: 'My dream career — I want to be a white-hat hacker', hi: 'मेरा सपना — व्हाइट-हैट हैकर', gu: 'મારું સપનું — વ્હાઇટ-હેટ હેકર', hinglish: 'Mera dream — white-hat hacker banna hai' }, scores: { COMPUTER_AI: 5 } },
        { text: { en: 'Very interesting — would consider it', hi: 'बहुत दिलचस्प', gu: 'બહુ રસપ્રદ', hinglish: 'Bahut interesting — consider karunga' }, scores: { COMPUTER_AI: 3, ENGINEERING: 1 } },
        { text: { en: 'Cool but I prefer traditional engineering', hi: 'अच्छा पर पारंपरिक engineering पसंद', gu: 'સારું પણ પરંપરાગત engineering ગમે', hinglish: 'Cool par traditional engineering pasand' }, scores: { ENGINEERING: 3 } },
        { text: { en: 'Not for me', hi: 'मेरे लिए नहीं', gu: 'મારા માટે નહીં', hinglish: 'Mere liye nahi' }, scores: { MEDICAL: 1, PHARMACY: 1, RESEARCH: 1, DEFENCE: 1 } },
      ] },
    { id: 1005, question: { en: 'AI tools — how do you see them in your career?', hi: 'AI tools को आप अपने करियर में कैसे देखते हैं?', gu: 'AI tools તમારી કરિયરમાં કેવી રીતે જુઓ?', hinglish: 'AI tools ko aap apne career mein kaise dekhte ho?' },
      options: [
        { text: { en: 'I want to build AI / ML models', hi: 'AI/ML मॉडल बनाना है', gu: 'AI/ML મોડેલ બનાવવા', hinglish: 'AI / ML models banana hai' }, scores: { COMPUTER_AI: 5, RESEARCH: 1 } },
        { text: { en: 'AI in healthcare / drug discovery', hi: 'स्वास्थ्य/दवा में AI', gu: 'હેલ્થકેર/દવામાં AI', hinglish: 'Healthcare / drug discovery mein AI' }, scores: { MEDICAL: 2, PHARMACY: 2, RESEARCH: 2 } },
        { text: { en: 'AI in defence / aerospace', hi: 'रक्षा/एयरोस्पेस में AI', gu: 'સંરક્ષણ/એરોસ્પેસમાં AI', hinglish: 'Defence / aerospace mein AI' }, scores: { DEFENCE: 3, ENGINEERING: 2 } },
        { text: { en: 'I will use them as tools, not build them', hi: 'उपयोग करूँगा, बनाऊँगा नहीं', gu: 'વાપરીશ, બનાવીશ નહીં', hinglish: 'Use karunga, banaunga nahi' }, scores: { ENGINEERING: 1, MEDICAL: 1, PHARMACY: 1 } },
      ] },
    { id: 1006, question: { en: 'Your ideal work environment is:', hi: 'आपका आदर्श कार्य वातावरण?', gu: 'તમારું આદર્શ કાર્ય વાતાવરણ?', hinglish: 'Aapka ideal work environment?' },
      options: [
        { text: { en: 'Office + computer + global team', hi: 'ऑफिस + कंप्यूटर + global team', gu: 'ઓફિસ + કમ્પ્યુટર + global team', hinglish: 'Office + computer + global team' }, scores: { COMPUTER_AI: 4, ENGINEERING: 1 } },
        { text: { en: 'Hospital / clinic / patients', hi: 'अस्पताल/मरीज़', gu: 'હોસ્પિટલ/દર્દી', hinglish: 'Hospital / clinic / patients' }, scores: { MEDICAL: 4, PHARMACY: 2 } },
        { text: { en: 'Lab / research center', hi: 'प्रयोगशाला', gu: 'લેબ', hinglish: 'Lab / research center' }, scores: { RESEARCH: 4, PHARMACY: 1 } },
        { text: { en: 'Outdoor / disciplined / uniform', hi: 'बाहर/अनुशासित/वर्दी', gu: 'બહાર/શિસ્તબદ્ધ/વર્દી', hinglish: 'Outdoor / disciplined / uniform' }, scores: { DEFENCE: 4 } },
      ] },
    { id: 1007, question: { en: 'How comfortable are you with long, intense exam prep (NEET / JEE / NDA)?', hi: 'लंबी कठिन परीक्षा तैयारी में कितना सहज?', gu: 'લાંબી તૈયારીમાં કેટલા સહજ?', hinglish: 'Lambi tough exam prep (NEET/JEE/NDA) mein kitne comfortable?' },
      options: [
        { text: { en: 'Very — I love structured competition', hi: 'बहुत — competition पसंद', gu: 'ઘણું — competition ગમે', hinglish: 'Bahut — structured competition pasand' }, scores: { ENGINEERING: 3, MEDICAL: 3, DEFENCE: 2 } },
        { text: { en: 'Okay — for the right goal I will work hard', hi: 'ठीक — सही लक्ष्य के लिए', gu: 'ઠીક — સાચા લક્ષ્ય માટે', hinglish: 'Theek — sahi goal ke liye karunga' }, scores: { ENGINEERING: 1, MEDICAL: 1, COMPUTER_AI: 2, PHARMACY: 1 } },
        { text: { en: 'I prefer skill-building over exams', hi: 'परीक्षा से कौशल पसंद', gu: 'પરીક્ષા કરતા કૌશલ્ય ગમે', hinglish: 'Exams se skills pasand' }, scores: { COMPUTER_AI: 4, PHARMACY: 1 } },
        { text: { en: 'I want a stable, less-exam-stress path', hi: 'कम परीक्षा तनाव वाला रास्ता', gu: 'ઓછો પરીક્ષા તાણ', hinglish: 'Less exam stress wala rasta' }, scores: { PHARMACY: 4, RESEARCH: 1 } },
      ] },
    { id: 1008, question: { en: 'Family-business angle: Gujarat is a pharma hub. Interested?', hi: 'गुजरात फार्मा हब है। रुचि?', gu: 'ગુજરાત ફાર્મા હબ છે. રસ?', hinglish: 'Gujarat pharma hub hai. Interest?' },
      options: [
        { text: { en: 'Yes — pharma / chemistry industry feels right', hi: 'हाँ — फार्मा/रसायन', gu: 'હા — ફાર્મા/કેમિસ્ટ્રી', hinglish: 'Haan — pharma / chemistry industry sahi lage' }, scores: { PHARMACY: 5, RESEARCH: 1 } },
        { text: { en: 'I prefer hospital practice over industry', hi: 'अस्पताल पसंद', gu: 'હોસ્પિટલ ગમે', hinglish: 'Hospital practice pasand industry se' }, scores: { MEDICAL: 3 } },
        { text: { en: 'IT industry > pharma for me', hi: 'IT > फार्मा', gu: 'IT > ફાર્મા', hinglish: 'IT > pharma mere liye' }, scores: { COMPUTER_AI: 3, ENGINEERING: 1 } },
        { text: { en: 'I want govt service / defence', hi: 'सरकारी सेवा/रक्षा', gu: 'સરકારી/રક્ષા', hinglish: 'Govt service / defence' }, scores: { DEFENCE: 3, RESEARCH: 1 } },
      ] },
  ],
  COMMERCE: [
    { id: 2001, question: { en: 'After 12th Commerce, what feels most exciting?', hi: '12वीं Commerce के बाद क्या रोमांचक?', gu: '12 Commerce પછી શું રોમાંચક?', hinglish: '12th Commerce ke baad kya exciting?' },
      options: [
        { text: { en: 'Mastering accounts, tax, audit (CA)', hi: 'अकाउंट्स/टैक्स/ऑडिट (CA)', gu: 'એકાઉન્ટ્સ/ટેક્સ/ઓડિટ (CA)', hinglish: 'Accounts, tax, audit (CA)' }, scores: { CA: 5 } },
        { text: { en: 'Leading teams & strategy (BBA → MBA)', hi: 'टीम लीडर/स्ट्रैटेजी (MBA)', gu: 'ટીમ લીડર/સ્ટ્રેટેજી (MBA)', hinglish: 'Team leadership / strategy (MBA)' }, scores: { BBA_MBA: 4 } },
        { text: { en: 'Stable govt bank job (IBPS / SBI)', hi: 'सरकारी बैंक नौकरी', gu: 'સરકારી બેન્ક નોકરી', hinglish: 'Stable govt bank job (IBPS/SBI)' }, scores: { BANKING_FINANCE: 4 } },
        { text: { en: 'Starting / scaling my own business', hi: 'अपना व्यवसाय', gu: 'પોતાનો વ્યવસાય', hinglish: 'Apna business shuru karna' }, scores: { ENTREPRENEUR: 4 } },
      ] },
    { id: 2002, question: { en: 'Which excites you more?', hi: 'क्या ज्यादा रोमांचक?', gu: 'શું વધુ રોમાંચક?', hinglish: 'Kya zyada exciting?' },
      options: [
        { text: { en: 'Numbers + spreadsheets + analysis', hi: 'संख्याएँ + स्प्रेडशीट', gu: 'નંબર + સ્પ્રેડશીટ', hinglish: 'Numbers + spreadsheets' }, scores: { CA: 3, BANKING_FINANCE: 3, ECONOMICS: 3 } },
        { text: { en: 'People + sales + persuasion', hi: 'लोग + बिक्री', gu: 'લોકો + સેલ્સ', hinglish: 'People + sales + persuasion' }, scores: { BBA_MBA: 3, ENTREPRENEUR: 3, DIGITAL_MARKETING: 2 } },
        { text: { en: 'Creativity + content + visuals', hi: 'रचनात्मकता + कंटेंट', gu: 'સર્જનાત્મકતા + કન્ટેન્ટ', hinglish: 'Creativity + content + visuals' }, scores: { DIGITAL_MARKETING: 4 } },
        { text: { en: 'Theory + economy + policy', hi: 'अर्थशास्त्र + नीति', gu: 'અર્થશાસ્ત્ર + નીતિ', hinglish: 'Economy + policy theory' }, scores: { ECONOMICS: 4 } },
      ] },
    { id: 2003, question: { en: 'How comfortable are you with maths in commerce?', hi: 'Commerce में गणित कितना सहज?', gu: 'Commerce માં ગણિત કેટલું સહજ?', hinglish: 'Commerce maths kitna comfortable?' },
      options: [
        { text: { en: 'Strong — I love it', hi: 'मज़बूत', gu: 'મજબૂત', hinglish: 'Strong — pasand hai' }, scores: { CA: 3, ECONOMICS: 3, BANKING_FINANCE: 2 } },
        { text: { en: 'Decent', hi: 'ठीक-ठाक', gu: 'ઠીકઠીક', hinglish: 'Decent' }, scores: { BBA_MBA: 2, BANKING_FINANCE: 2, ENTREPRENEUR: 1 } },
        { text: { en: 'Weak — I prefer non-math streams', hi: 'कमज़ोर', gu: 'કમજોર', hinglish: 'Weak — non-math pasand' }, scores: { DIGITAL_MARKETING: 3, BBA_MBA: 1 } },
        { text: { en: 'Mixed — some topics yes, others no', hi: 'मिश्रित', gu: 'મિશ્ર', hinglish: 'Mixed' }, scores: { BBA_MBA: 1, ENTREPRENEUR: 1 } },
      ] },
    { id: 2004, question: { en: 'Digital marketing & online business — your interest?', hi: 'डिजिटल मार्केटिंग में रुचि?', gu: 'ડિજિટલ માર્કેટિંગમાં રસ?', hinglish: 'Digital marketing mein interest?' },
      options: [
        { text: { en: 'Huge — I already run an Insta page', hi: 'बहुत — पहले से Insta page चला रहा हूँ', gu: 'ઘણો — પહેલેથી Insta ચલાવું', hinglish: 'Bahut — already Insta page chalata hoon' }, scores: { DIGITAL_MARKETING: 5, ENTREPRENEUR: 2 } },
        { text: { en: 'Yes — want to learn ads & SEO', hi: 'हाँ — ads/SEO सीखना है', gu: 'હા — ads/SEO શીખવા', hinglish: 'Haan — ads/SEO seekhna hai' }, scores: { DIGITAL_MARKETING: 4 } },
        { text: { en: 'Indifferent — prefer traditional jobs', hi: 'पारंपरिक नौकरी पसंद', gu: 'પરંપરાગત નોકરી', hinglish: 'Traditional jobs pasand' }, scores: { CA: 2, BANKING_FINANCE: 2 } },
        { text: { en: 'Useful for my own business', hi: 'अपने व्यवसाय के लिए उपयोगी', gu: 'મારા વ્યવસાય માટે ઉપયોગી', hinglish: 'Apne business ke liye useful' }, scores: { ENTREPRENEUR: 3, DIGITAL_MARKETING: 2 } },
      ] },
    { id: 2005, question: { en: 'Risk vs stability — your preference?', hi: 'जोखिम बनाम स्थिरता?', gu: 'જોખમ વિ. સ્થિરતા?', hinglish: 'Risk vs stability — preference?' },
      options: [
        { text: { en: 'High risk, high reward (entrepreneurship)', hi: 'अधिक जोखिम, अधिक इनाम', gu: 'વધુ જોખમ, વધુ ઈનામ', hinglish: 'High risk, high reward' }, scores: { ENTREPRENEUR: 4, DIGITAL_MARKETING: 1 } },
        { text: { en: 'Stable govt salary (banking)', hi: 'स्थिर सरकारी वेतन', gu: 'સ્થિર સરકારી પગાર', hinglish: 'Stable govt salary (banking)' }, scores: { BANKING_FINANCE: 4 } },
        { text: { en: 'Predictable + respected (CA)', hi: 'सम्मानित + पूर्वानुमानित', gu: 'આદર + અનુમાનિત', hinglish: 'Predictable + respected (CA)' }, scores: { CA: 4 } },
        { text: { en: 'Corporate growth (MBA)', hi: 'कॉर्पोरेट ग्रोथ (MBA)', gu: 'કોર્પોરેટ ગ્રોથ (MBA)', hinglish: 'Corporate growth (MBA)' }, scores: { BBA_MBA: 4 } },
      ] },
    { id: 2006, question: { en: 'Family business in Gujarat — your view?', hi: 'गुजरात पारिवारिक व्यवसाय?', gu: 'ગુજરાત કુટુંબ વ્યવસાય?', hinglish: 'Gujarat family business — view?' },
      options: [
        { text: { en: 'I want to scale & modernize it', hi: 'बढ़ाना और आधुनिक बनाना है', gu: 'વધારવો અને આધુનિક કરવો', hinglish: 'Scale aur modernize karna hai' }, scores: { ENTREPRENEUR: 4, DIGITAL_MARKETING: 2, BBA_MBA: 2 } },
        { text: { en: 'I will help with finances/audits', hi: 'फ़ाइनेंस/ऑडिट में मदद', gu: 'ફાઇનાન્સ/ઓડિટમાં મદદ', hinglish: 'Finance/audit mein madad karunga' }, scores: { CA: 3, BANKING_FINANCE: 1 } },
        { text: { en: 'Not interested — corporate path', hi: 'नहीं — कॉर्पोरेट', gu: 'ના — કોર્પોરેટ', hinglish: 'Nahi — corporate path' }, scores: { BBA_MBA: 3, BANKING_FINANCE: 1 } },
        { text: { en: 'Want govt job stability', hi: 'सरकारी नौकरी', gu: 'સરકારી નોકરી', hinglish: 'Govt job stability chahiye' }, scores: { BANKING_FINANCE: 3, ECONOMICS: 1 } },
      ] },
    { id: 2007, question: { en: 'How do you feel about UPSC / civil services?', hi: 'UPSC के बारे में?', gu: 'UPSC વિશે?', hinglish: 'UPSC / civil services ke baare mein?' },
      options: [
        { text: { en: 'Want to attempt it (IES/IRS for commerce)', hi: 'कोशिश करना है (IES/IRS)', gu: 'પ્રયત્ન કરવો છે', hinglish: 'Attempt karna hai (IES/IRS)' }, scores: { ECONOMICS: 4, BANKING_FINANCE: 1 } },
        { text: { en: 'Maybe alongside CA / MBA', hi: 'शायद CA/MBA के साथ', gu: 'કદાચ CA/MBA સાથે', hinglish: 'Maybe CA/MBA ke saath' }, scores: { CA: 1, BBA_MBA: 1, ECONOMICS: 1 } },
        { text: { en: 'No — I want private sector growth', hi: 'नहीं — निजी क्षेत्र', gu: 'ના — પ્રાઇવેટ સેક્ટર', hinglish: 'Nahi — private sector growth' }, scores: { BBA_MBA: 2, ENTREPRENEUR: 2, DIGITAL_MARKETING: 1 } },
        { text: { en: 'No — I prefer skill-based career', hi: 'कौशल आधारित करियर', gu: 'કૌશલ્ય-આધારિત કરિયર', hinglish: 'Skill-based career chahiye' }, scores: { DIGITAL_MARKETING: 3, ENTREPRENEUR: 1 } },
      ] },
    { id: 2008, question: { en: 'How comfortable are you with English communication?', hi: 'अंग्रेज़ी संचार में कितना सहज?', gu: 'ઇંગ્લિશ સંચારમાં કેટલા સહજ?', hinglish: 'English communication kitna comfortable?' },
      options: [
        { text: { en: 'Very confident — even in interviews', hi: 'बहुत आत्मविश्वासी', gu: 'બહુ આત્મવિશ્વાસી', hinglish: 'Bahut confident — interviews mein bhi' }, scores: { BBA_MBA: 3, DIGITAL_MARKETING: 2, ECONOMICS: 1 } },
        { text: { en: 'Decent — improving', hi: 'ठीक — सुधार रहा हूँ', gu: 'ઠીક — સુધારી રહ્યો', hinglish: 'Decent — improve kar raha hoon' }, scores: { CA: 1, BANKING_FINANCE: 1, ENTREPRENEUR: 1 } },
        { text: { en: 'Weak — I prefer Hindi/Gujarati workplaces', hi: 'कमज़ोर — हिंदी/गुजराती पसंद', gu: 'કમજોર — હિન્દી/ગુજરાતી ગમે', hinglish: 'Weak — Hindi/Gujarati workplace pasand' }, scores: { ENTREPRENEUR: 2, BANKING_FINANCE: 1 } },
        { text: { en: 'Want to learn — career-defining', hi: 'सीखना चाहता हूँ', gu: 'શીખવા માંગુ', hinglish: 'Seekhna chahta hoon' }, scores: { BBA_MBA: 1, BANKING_FINANCE: 1 } },
      ] },
  ],
  ARTS: [
    { id: 3001, question: { en: 'After 12th Arts, what excites you most?', hi: '12वीं Arts के बाद क्या रोमांचक?', gu: '12 Arts પછી શું રોમાંચક?', hinglish: '12th Arts ke baad kya exciting?' },
      options: [
        { text: { en: 'Fight cases, justice, courts (Law)', hi: 'कानून/न्याय', gu: 'કાયદો/ન્યાય', hinglish: 'Cases, justice, courts (Law)' }, scores: { LAW: 5 } },
        { text: { en: 'Become an IAS / IPS officer', hi: 'IAS/IPS अधिकारी', gu: 'IAS/IPS અધિકારી', hinglish: 'IAS/IPS officer' }, scores: { IAS_UPSC: 5 } },
        { text: { en: 'Design beautiful things (UI/UX, fashion)', hi: 'डिज़ाइन', gu: 'ડિઝાઇન', hinglish: 'Design (UI/UX, fashion)' }, scores: { DESIGN: 5 } },
        { text: { en: 'Tell stories — journalism, content, film', hi: 'कहानी कहना', gu: 'વાર્તા કહેવી', hinglish: 'Stories sunana — journalism, content, film' }, scores: { JOURNALISM: 5 } },
      ] },
    { id: 3002, question: { en: 'Helping people emotionally / understanding minds — your interest?', hi: 'भावनात्मक मदद/मनोविज्ञान?', gu: 'ભાવનાત્મક મદદ/મનોવિજ્ઞાન?', hinglish: 'Emotional help / minds samajhna?' },
      options: [
        { text: { en: 'Yes — Psychology is my calling', hi: 'हाँ — मनोविज्ञान', gu: 'હા — મનોવિજ્ઞાન', hinglish: 'Haan — Psychology mera calling hai' }, scores: { PSYCHOLOGY: 5 } },
        { text: { en: 'Somewhat — fits with social work', hi: 'कुछ हद तक', gu: 'કેટલીક હદ સુધી', hinglish: 'Kuch had tak — social work ke saath' }, scores: { PSYCHOLOGY: 2, IAS_UPSC: 1, TEACHING: 1 } },
        { text: { en: 'Not really — I prefer logic/argument', hi: 'नहीं — तर्क पसंद', gu: 'ના — તર્ક ગમે', hinglish: 'Nahi — logic/argument pasand' }, scores: { LAW: 2, IAS_UPSC: 1 } },
        { text: { en: 'I prefer creative expression', hi: 'रचनात्मक अभिव्यक्ति', gu: 'સર્જનાત્મક અભિવ્યક્તિ', hinglish: 'Creative expression pasand' }, scores: { DESIGN: 2, JOURNALISM: 2 } },
      ] },
    { id: 3003, question: { en: 'How comfortable are you with public speaking?', hi: 'सार्वजनिक भाषण में कितना सहज?', gu: 'જાહેર વક્તવ્યમાં કેટલા સહજ?', hinglish: 'Public speaking kitna comfortable?' },
      options: [
        { text: { en: 'Very — I love debates / stage', hi: 'बहुत — मंच पसंद', gu: 'ઘણું — સ્ટેજ ગમે', hinglish: 'Bahut — debates aur stage pasand' }, scores: { LAW: 3, IAS_UPSC: 2, JOURNALISM: 3, TEACHING: 2 } },
        { text: { en: 'Decent — improving', hi: 'ठीक', gu: 'ઠીક', hinglish: 'Decent — improving' }, scores: { TEACHING: 2, PSYCHOLOGY: 1 } },
        { text: { en: 'Prefer writing over speaking', hi: 'बोलने से लिखना', gu: 'બોલવા કરતાં લખવું', hinglish: 'Bolne se likhna pasand' }, scores: { JOURNALISM: 2, IAS_UPSC: 2 } },
        { text: { en: 'Quiet, behind-the-scenes', hi: 'चुप, पर्दे के पीछे', gu: 'શાંત, પડદા પાછળ', hinglish: 'Chup, behind-the-scenes' }, scores: { DESIGN: 3, PSYCHOLOGY: 2 } },
      ] },
    { id: 3004, question: { en: 'Do you enjoy reading newspapers / current affairs daily?', hi: 'अख़बार/समसामयिक रोज़ पढ़ना?', gu: 'દૈનિક અખબાર/કરન્ટ અફેર્સ?', hinglish: 'Daily newspaper / current affairs padhna pasand?' },
      options: [
        { text: { en: 'Religiously — I read 2+ papers', hi: '2+ अख़बार', gu: '2+ અખબાર', hinglish: 'Religiously — 2+ papers padhta hoon' }, scores: { IAS_UPSC: 4, LAW: 3, JOURNALISM: 3 } },
        { text: { en: 'Sometimes', hi: 'कभी-कभी', gu: 'ક્યારેક', hinglish: 'Kabhi-kabhi' }, scores: { LAW: 1, JOURNALISM: 2, TEACHING: 1 } },
        { text: { en: 'Rarely — I read books / fiction more', hi: 'कम — किताबें ज़्यादा', gu: 'ઓછું — પુસ્તકો વધુ', hinglish: 'Rarely — books / fiction zyada' }, scores: { TEACHING: 2, DESIGN: 1, PSYCHOLOGY: 1 } },
        { text: { en: 'I get news from Instagram / YouTube', hi: 'Insta/YouTube से', gu: 'Insta/YouTube થી', hinglish: 'Insta/YouTube se news' }, scores: { JOURNALISM: 1, DESIGN: 1 } },
      ] },
    { id: 3005, question: { en: 'Creativity vs structure — your style?', hi: 'रचनात्मकता बनाम संरचना?', gu: 'સર્જનાત્મકતા વિ. માળખું?', hinglish: 'Creativity vs structure — style?' },
      options: [
        { text: { en: 'Highly creative — visual, hands-on', hi: 'बहुत रचनात्मक', gu: 'ખૂબ સર્જનાત્મક', hinglish: 'Highly creative — visual, hands-on' }, scores: { DESIGN: 5 } },
        { text: { en: 'Structured & analytical', hi: 'संरचित और विश्लेषणात्मक', gu: 'માળખાગત', hinglish: 'Structured aur analytical' }, scores: { LAW: 3, IAS_UPSC: 3, PSYCHOLOGY: 1 } },
        { text: { en: 'Mix — depends on the task', hi: 'मिश्रित', gu: 'મિશ્ર', hinglish: 'Mix — depends on task' }, scores: { JOURNALISM: 3, TEACHING: 2 } },
        { text: { en: 'Empathetic — I read people well', hi: 'सहानुभूतिशील', gu: 'સહાનુભૂતિશીલ', hinglish: 'Empathetic — logon ko padh leta hoon' }, scores: { PSYCHOLOGY: 4, TEACHING: 1 } },
      ] },
    { id: 3006, question: { en: 'Modern Arts careers (UI/UX, content, design law) — interested?', hi: 'आधुनिक Arts करियर?', gu: 'આધુનિક Arts કરિયર?', hinglish: 'Modern Arts careers (UI/UX, content, design law) — interest?' },
      options: [
        { text: { en: 'Very — I want to design apps', hi: 'बहुत — एप डिज़ाइन', gu: 'ઘણું — એપ ડિઝાઇન', hinglish: 'Bahut — apps design karna hai' }, scores: { DESIGN: 5 } },
        { text: { en: 'I want to be a journalist / YouTuber', hi: 'पत्रकार / YouTuber', gu: 'પત્રકાર / YouTuber', hinglish: 'Journalist / YouTuber banna hai' }, scores: { JOURNALISM: 5 } },
        { text: { en: 'I prefer traditional law / govt service', hi: 'पारंपरिक कानून/सरकारी', gu: 'પરંપરાગત કાયદો/સરકારી', hinglish: 'Traditional law / govt pasand' }, scores: { LAW: 3, IAS_UPSC: 3 } },
        { text: { en: 'Cyber law / digital legal field interests me', hi: 'साइबर कानून', gu: 'સાયબર કાયદો', hinglish: 'Cyber law / digital legal field interesting' }, scores: { LAW: 4 } },
      ] },
    { id: 3007, question: { en: 'How do you feel about teaching / mentoring?', hi: 'शिक्षण/मार्गदर्शन?', gu: 'શિક્ષણ/માર્ગદર્શન?', hinglish: 'Teaching / mentoring?' },
      options: [
        { text: { en: 'I love explaining things to others', hi: 'दूसरों को समझाना पसंद', gu: 'બીજાને સમજાવવું ગમે', hinglish: 'Doosron ko explain karna pasand' }, scores: { TEACHING: 5, PSYCHOLOGY: 1 } },
        { text: { en: 'Maybe later, after gaining experience', hi: 'बाद में', gu: 'પછી', hinglish: 'Baad mein, experience ke baad' }, scores: { TEACHING: 2, IAS_UPSC: 1, JOURNALISM: 1 } },
        { text: { en: 'Not really — I prefer creative work', hi: 'नहीं — रचनात्मक काम', gu: 'ના — સર્જનાત્મક કામ', hinglish: 'Nahi — creative kaam pasand' }, scores: { DESIGN: 2, JOURNALISM: 2 } },
        { text: { en: 'Indifferent', hi: 'तटस्थ', gu: 'તટસ્થ', hinglish: 'Indifferent' }, scores: { LAW: 1, IAS_UPSC: 1 } },
      ] },
    { id: 3008, question: { en: 'Long study path: 5 years for Law / Design or 3 years for govt prep?', hi: 'लंबी पढ़ाई या तेज़ सरकारी तैयारी?', gu: 'લાંબી પઢાઈ કે ઝડપી સરકારી તૈયારી?', hinglish: 'Lambi padhai (Law/Design 5 yr) ya jaldi govt prep?' },
      options: [
        { text: { en: '5-yr Law / Design — I am committed', hi: '5 साल — Law/Design', gu: '5 વર્ષ — Law/Design', hinglish: '5-saal Law / Design — committed hoon' }, scores: { LAW: 4, DESIGN: 4 } },
        { text: { en: 'BA + 2-3 yr UPSC prep', hi: 'BA + UPSC तैयारी', gu: 'BA + UPSC તૈયારી', hinglish: 'BA + UPSC prep' }, scores: { IAS_UPSC: 4, ECONOMICS: 1 } },
        { text: { en: 'BA + B.Ed for stable teaching', hi: 'BA + B.Ed', gu: 'BA + B.Ed', hinglish: 'BA + B.Ed for stable teaching' }, scores: { TEACHING: 4 } },
        { text: { en: 'Skill-based path (content, design portfolio)', hi: 'कौशल आधारित', gu: 'કૌશલ્ય આધારિત', hinglish: 'Skill-based (content, design portfolio)' }, scores: { JOURNALISM: 3, DESIGN: 3 } },
      ] },
    { id: 3009, question: { en: 'Cybersecurity & ethical hacking from Arts side (cyber law)?', hi: 'साइबर कानून?', gu: 'સાયબર કાયદો?', hinglish: 'Cyber law / cybersecurity from Arts side?' },
      options: [
        { text: { en: 'Yes — cyber law is my interest', hi: 'हाँ', gu: 'હા', hinglish: 'Haan — cyber law interest hai' }, scores: { LAW: 4, IAS_UPSC: 1 } },
        { text: { en: 'Interesting but I prefer creative side', hi: 'रचनात्मक पक्ष', gu: 'સર્જનાત્મક પક્ષ', hinglish: 'Creative side pasand' }, scores: { DESIGN: 2, JOURNALISM: 2 } },
        { text: { en: 'I want to research it academically', hi: 'अकादमिक रिसर्च', gu: 'શૈક્ષણિક રિસર્ચ', hinglish: 'Academically research karna hai' }, scores: { PSYCHOLOGY: 1, TEACHING: 1, IAS_UPSC: 1 } },
        { text: { en: 'Not interested', hi: 'रुचि नहीं', gu: 'રસ નથી', hinglish: 'Interest nahi' }, scores: { TEACHING: 1, PSYCHOLOGY: 1 } },
      ] },
  ],
};

// =========================================================
// SCORING + RECOMMENDATION (Class 12)
// =========================================================
export interface Score12 {
  tracks: Partial<Record<Track, number>>;
  trackPercents: Partial<Record<Track, number>>;
  best: Track;
  ranked: { track: Track; percent: number }[];
  confidence: number;
}

export function scoreAnswers12(stream: Stream12, answers: Record<number, number>): Score12 {
  const tracks: Partial<Record<Track, number>> = {};
  for (const t of TRACKS_BY_STREAM[stream]) tracks[t] = 0;
  for (const q of Q12_BANK[stream]) {
    const idx = answers[q.id];
    if (idx === undefined) continue;
    const opt = q.options[idx];
    if (!opt) continue;
    for (const [track, val] of Object.entries(opt.scores)) {
      tracks[track as Track] = (tracks[track as Track] ?? 0) + (val ?? 0);
    }
  }
  const total = Object.values(tracks).reduce((s, v) => (s ?? 0) + (v ?? 0), 0) || 1;
  const trackPercents: Partial<Record<Track, number>> = {};
  for (const [t, v] of Object.entries(tracks)) {
    trackPercents[t as Track] = Math.round(((v ?? 0) / (total as number)) * 100);
  }
  const ranked = Object.entries(trackPercents)
    .map(([track, percent]) => ({ track: track as Track, percent: percent as number }))
    .sort((a, b) => b.percent - a.percent);
  const best = ranked[0].track;
  const confidence = Math.min(100, Math.max(45, ranked[0].percent + (ranked[0].percent - (ranked[1]?.percent ?? 0))));
  return { tracks, trackPercents, best, ranked, confidence };
}

export interface Recommendation12 {
  level: 12;
  stream: Stream12;
  best: Track;
  bestName: string;
  confidence: number;
  why: string;
  desc: string;
  topCareers: string[];
  skills: string[];
  roadmap: string[];
  parentGuidance: string;
  salary: string;
  demand: string;
  duration: string;
}

export function recommend12(stream: Stream12, score: Score12, lang: Lang): Recommendation12 {
  const info = TRACK_INFO[score.best];
  return {
    level: 12,
    stream,
    best: score.best,
    bestName: info.name[lang],
    confidence: score.confidence,
    why: info.why[lang],
    desc: info.desc[lang],
    topCareers: info.topCareers,
    skills: info.skills,
    roadmap: info.roadmap,
    parentGuidance: info.parentGuidance[lang],
    salary: info.salary,
    demand: info.demand,
    duration: info.duration,
  };
}
