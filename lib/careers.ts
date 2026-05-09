import type { Stream, Lang } from './quizData';

export interface Career {
  name: string;
  stream: Stream;
  modern?: boolean;
  salary: string;
  demand: 'High' | 'Very High' | 'Medium' | 'Growing';
  skills: string[];
  desc: Record<Lang, string>;
}

export const careers: Career[] = [
  // SCIENCE
  { name: 'AI / Machine Learning Engineer', stream: 'SCIENCE', modern: true, salary: '₹6L – ₹40L', demand: 'Very High', skills: ['Python', 'Math', 'PyTorch', 'Statistics'],
    desc: { en: 'Build intelligent systems that learn from data.', hi: 'डेटा से सीखने वाले स्मार्ट सिस्टम बनाएँ।', gu: 'ડેટામાંથી શીખનારી સ્માર્ટ સિસ્ટમ બનાવો.', hinglish: 'Data se seekhne wale smart systems banao.' } },
  { name: 'Doctor (MBBS / BDS / BAMS)', stream: 'SCIENCE', salary: '₹8L – ₹50L+', demand: 'Very High', skills: ['Biology', 'Empathy', 'Long-term study'],
    desc: { en: 'Heal patients and save lives.', hi: 'मरीज़ों का इलाज और जीवन बचाना।', gu: 'દર્દીઓની સારવાર અને જીવન બચાવો.', hinglish: 'Patients ka ilaaj aur jaan bachao.' } },
  { name: 'Software Engineer', stream: 'SCIENCE', modern: true, salary: '₹5L – ₹35L', demand: 'Very High', skills: ['Coding', 'Problem solving', 'Algorithms'],
    desc: { en: 'Build apps and websites used by millions.', hi: 'लाखों लोगों द्वारा उपयोग किए जाने वाले ऐप्स बनाएँ।', gu: 'લાખો લોકો વાપરે એવી એપ્સ બનાવો.', hinglish: 'Lakhon log use karein aisi apps banao.' } },
  { name: 'Cybersecurity Analyst', stream: 'SCIENCE', modern: true, salary: '₹6L – ₹30L', demand: 'Very High', skills: ['Networking', 'Linux', 'Ethical Hacking'],
    desc: { en: 'Protect companies from digital attacks.', hi: 'कंपनियों को साइबर हमलों से बचाएँ।', gu: 'કંપનીઓને સાયબર હુમલાઓથી બચાવો.', hinglish: 'Companies ko cyber attacks se bachao.' } },
  { name: 'Research Scientist', stream: 'SCIENCE', salary: '₹6L – ₹25L', demand: 'High', skills: ['Curiosity', 'Patience', 'Writing'],
    desc: { en: 'Discover new things — biology, physics, space.', hi: 'नई खोज करें — जीव विज्ञान, भौतिकी, अंतरिक्ष।', gu: 'નવી શોધો કરો — બાયોલોજી, ફિઝિક્સ, સ્પેસ.', hinglish: 'Naye discoveries karo — biology, physics, space.' } },

  // COMMERCE
  { name: 'Chartered Accountant (CA)', stream: 'COMMERCE', salary: '₹8L – ₹50L', demand: 'Very High', skills: ['Accounts', 'Tax', 'Audit'],
    desc: { en: 'Trusted financial expert for businesses.', hi: 'व्यवसायों के लिए वित्तीय विशेषज्ञ।', gu: 'વ્યવસાય માટે નાણાકીય નિષ્ણાત.', hinglish: 'Businesses ke liye finance expert.' } },
  { name: 'Stock Market Analyst', stream: 'COMMERCE', modern: true, salary: '₹5L – ₹40L', demand: 'High', skills: ['Finance', 'Excel', 'Analysis'],
    desc: { en: 'Predict markets and guide investors.', hi: 'बाज़ारों का अनुमान लगाएँ।', gu: 'બજારોની આગાહી કરો.', hinglish: 'Markets ki bhavishyavani karo.' } },
  { name: 'Digital Marketing Specialist', stream: 'COMMERCE', modern: true, salary: '₹4L – ₹25L', demand: 'Very High', skills: ['SEO', 'Ads', 'Analytics'],
    desc: { en: 'Grow brands online — ads, social, SEO.', hi: 'ऑनलाइन ब्रांड बढ़ाएँ।', gu: 'ઓનલાઇન બ્રાન્ડ વધારો.', hinglish: 'Brands ko online grow karo.' } },
  { name: 'Banker / Financial Advisor', stream: 'COMMERCE', salary: '₹4L – ₹20L', demand: 'High', skills: ['Math', 'Communication', 'Trust'],
    desc: { en: 'Help people manage money smartly.', hi: 'लोगों को पैसा संभालने में मदद।', gu: 'લોકોને પૈસા સંભાળવામાં મદદ.', hinglish: 'Logon ko paisa manage karne mein madad.' } },
  { name: 'Entrepreneur', stream: 'COMMERCE', salary: '₹0 – ₹∞', demand: 'Growing', skills: ['Risk-taking', 'Leadership', 'Sales'],
    desc: { en: 'Start your own business and scale it.', hi: 'अपना व्यवसाय शुरू करें।', gu: 'તમારો પોતાનો વ્યવસાય શરૂ કરો.', hinglish: 'Apna business shuru karo.' } },

  // ARTS
  { name: 'Lawyer (LLB)', stream: 'ARTS', salary: '₹5L – ₹50L+', demand: 'High', skills: ['Reading', 'Logic', 'Speaking'],
    desc: { en: 'Fight for justice in courts.', hi: 'अदालत में न्याय की लड़ाई।', gu: 'કોર્ટમાં ન્યાય માટે લડત.', hinglish: 'Court mein justice ke liye ladai.' } },
  { name: 'IAS / IPS Officer', stream: 'ARTS', salary: '₹7L – ₹25L', demand: 'High', skills: ['GK', 'Discipline', 'Leadership'],
    desc: { en: 'Serve the nation in administration.', hi: 'प्रशासन में राष्ट्रसेवा।', gu: 'વહીવટમાં રાષ્ટ્રસેવા.', hinglish: 'Administration mein desh seva.' } },
  { name: 'UI/UX Designer', stream: 'ARTS', modern: true, salary: '₹5L – ₹30L', demand: 'Very High', skills: ['Figma', 'Empathy', 'Visual design'],
    desc: { en: 'Design beautiful, easy-to-use apps.', hi: 'सुंदर, उपयोग में आसान ऐप्स डिज़ाइन।', gu: 'સુંદર અને સરળ એપ્સ ડિઝાઇન.', hinglish: 'Sundar aur easy apps design karo.' } },
  { name: 'Content Creator / YouTuber', stream: 'ARTS', modern: true, salary: '₹2L – ₹∞', demand: 'Growing', skills: ['Camera', 'Editing', 'Storytelling'],
    desc: { en: 'Build an audience and earn from content.', hi: 'दर्शक बनाएँ और कंटेंट से कमाएँ।', gu: 'દર્શકો બનાવો અને કન્ટેન્ટથી કમાઓ.', hinglish: 'Audience banao aur content se kamao.' } },
  { name: 'Journalist / Media', stream: 'ARTS', salary: '₹3L – ₹20L', demand: 'Medium', skills: ['Writing', 'Curiosity', 'Communication'],
    desc: { en: 'Report stories that matter.', hi: 'महत्वपूर्ण कहानियाँ रिपोर्ट करें।', gu: 'મહત્વની વાર્તાઓ રિપોર્ટ કરો.', hinglish: 'Important kahaniyan report karo.' } },

  // DIPLOMA
  { name: 'Junior Mechanical Engineer', stream: 'DIPLOMA', salary: '₹2.5L – ₹8L', demand: 'High', skills: ['Drawing', 'Workshop', 'Maintenance'],
    desc: { en: 'Run and maintain machines in factories.', hi: 'फ़ैक्टरियों में मशीन चलाएँ और रखरखाव करें।', gu: 'ફેક્ટરીમાં મશીન ચલાવો અને જાળવણી કરો.', hinglish: 'Factory mein machines chalao aur maintain karo.' } },
  { name: 'Diploma Civil Engineer', stream: 'DIPLOMA', salary: '₹3L – ₹10L', demand: 'High', skills: ['AutoCAD', 'Site work', 'Estimation'],
    desc: { en: 'Build roads, bridges, and buildings.', hi: 'सड़कें, पुल और इमारतें बनाएँ।', gu: 'રસ્તાઓ, બ્રિજ અને ઇમારતો બનાવો.', hinglish: 'Roads, bridges aur buildings banao.' } },
  { name: 'Diploma Computer Engineer', stream: 'DIPLOMA', modern: true, salary: '₹3L – ₹12L', demand: 'Very High', skills: ['Coding', 'Networking', 'Hardware'],
    desc: { en: 'Work in IT after just 3 years.', hi: 'सिर्फ़ 3 साल बाद IT में काम।', gu: 'માત્ર 3 વર્ષ બાદ IT માં કામ.', hinglish: 'Sirf 3 saal baad IT mein kaam.' } },
  { name: 'EV Technician (Diploma)', stream: 'DIPLOMA', modern: true, salary: '₹3L – ₹10L', demand: 'Very High', skills: ['Electronics', 'Batteries', 'Motors'],
    desc: { en: 'Future of mobility — electric vehicles.', hi: 'भविष्य की मोबिलिटी — इलेक्ट्रिक वाहन।', gu: 'ભવિષ્યની મોબિલિટી — ઈલેક્ટ્રિક વાહનો.', hinglish: 'Future ki mobility — electric vehicles.' } },
  { name: 'Robotics Diploma Engineer', stream: 'DIPLOMA', modern: true, salary: '₹3.5L – ₹12L', demand: 'Growing', skills: ['Mechatronics', 'Programming', 'Sensors'],
    desc: { en: 'Build and maintain industrial robots.', hi: 'औद्योगिक रोबोट बनाएँ।', gu: 'ઉદ્યોગિક રોબોટ બનાવો.', hinglish: 'Industrial robots banao.' } },

  // ITI
  { name: 'ITI Electrician', stream: 'ITI', salary: '₹2L – ₹6L', demand: 'Very High', skills: ['Wiring', 'Safety', 'Tools'],
    desc: { en: 'Highly demanded in every city and factory.', hi: 'हर शहर और फ़ैक्टरी में ज़रूरत।', gu: 'દરેક શહેર અને ફેક્ટરીમાં માંગ.', hinglish: 'Har city aur factory mein zaroori.' } },
  { name: 'ITI Fitter / Mechanic', stream: 'ITI', salary: '₹2L – ₹6L', demand: 'High', skills: ['Tools', 'Precision', 'Workshop'],
    desc: { en: 'Hands-on work in production lines.', hi: 'उत्पादन लाइन में हाथ से काम।', gu: 'પ્રોડક્શન લાઇનમાં હાથેથી કામ.', hinglish: 'Production line mein hands-on kaam.' } },
  { name: 'ITI EV / Solar Technician', stream: 'ITI', modern: true, salary: '₹2.5L – ₹8L', demand: 'Very High', skills: ['Electronics', 'Solar panels', 'Batteries'],
    desc: { en: 'Green energy is hiring everywhere.', hi: 'हरित ऊर्जा हर जगह नौकरी।', gu: 'ગ્રીન એનર્જી દરેક જગ્યાએ ભરતી.', hinglish: 'Green energy mein har jagah hiring.' } },
  { name: 'ITI Welder', stream: 'ITI', salary: '₹2L – ₹7L', demand: 'High', skills: ['Welding', 'Safety', 'Steady hand'],
    desc: { en: 'Skilled welders earn well in Gulf and India.', hi: 'कुशल वेल्डर अच्छा कमाते हैं।', gu: 'કુશળ વેલ્ડર સારું કમાય.', hinglish: 'Skilled welders achha kamate hain.' } },
  { name: 'ITI Plumber / AC Technician', stream: 'ITI', salary: '₹2L – ₹6L', demand: 'High', skills: ['Tools', 'Customer service', 'Diagnosis'],
    desc: { en: 'Start own service business after 1-2 years.', hi: '1-2 साल में अपना व्यवसाय।', gu: '1-2 વર્ષમાં પોતાનો વ્યવસાય.', hinglish: '1-2 saal mein apna business.' } },
];

export const streamMeta: Record<Stream, { duration: Record<Lang, string>; growth: Record<Lang, string>; salary: string; demand: string }> = {
  SCIENCE: {
    duration: { en: '4-7 years (12th + Graduation)', hi: '4-7 वर्ष (12वीं + ग्रेजुएशन)', gu: '4-7 વર્ષ (12 + ગ્રેજ્યુએશન)', hinglish: '4-7 saal (12th + Graduation)' },
    growth: { en: 'Excellent — research, IT, healthcare', hi: 'उत्कृष्ट — रिसर्च, IT, स्वास्थ्य', gu: 'ઉત્તમ — રિસર્ચ, IT, હેલ્થકેર', hinglish: 'Excellent — research, IT, healthcare' },
    salary: '₹4L → ₹40L+',
    demand: 'Very High',
  },
  COMMERCE: {
    duration: { en: '3-5 years (12th + B.Com / CA)', hi: '3-5 वर्ष', gu: '3-5 વર્ષ', hinglish: '3-5 saal' },
    growth: { en: 'Strong — finance, business, fintech', hi: 'मज़बूत — फ़ाइनेंस, बिज़नेस', gu: 'મજબૂત — ફાઇનાન્સ, બિઝનેસ', hinglish: 'Strong — finance, business, fintech' },
    salary: '₹3L → ₹30L+',
    demand: 'Very High',
  },
  ARTS: {
    duration: { en: '3-5 years (12th + BA / Law)', hi: '3-5 वर्ष', gu: '3-5 વર્ષ', hinglish: '3-5 saal' },
    growth: { en: 'Diverse — law, design, civil services, media', hi: 'विविध — कानून, डिज़ाइन, IAS, मीडिया', gu: 'વિવિધ — કાયદો, ડિઝાઇન, IAS, મીડિયા', hinglish: 'Diverse — law, design, civil services, media' },
    salary: '₹3L → ₹50L+',
    demand: 'High',
  },
  DIPLOMA: {
    duration: { en: '3 years only — direct after 10th', hi: 'सिर्फ़ 3 साल', gu: 'માત્ર 3 વર્ષ', hinglish: 'Sirf 3 saal' },
    growth: { en: 'Quick job + lateral entry to Engineering', hi: 'जल्दी नौकरी + इंजीनियरिंग में प्रवेश', gu: 'જલ્દી નોકરી + એન્જિનિયરિંગમાં પ્રવેશ', hinglish: 'Jaldi job + Engineering mein lateral entry' },
    salary: '₹2.5L → ₹12L+',
    demand: 'Very High',
  },
  ITI: {
    duration: { en: '1-2 years — start earning fast', hi: '1-2 वर्ष — जल्दी कमाई', gu: '1-2 વર્ષ — જલ્દી કમાણી', hinglish: '1-2 saal — jaldi kamai' },
    growth: { en: 'Fastest job + Gulf/EV opportunities', hi: 'सबसे जल्दी नौकरी + Gulf/EV अवसर', gu: 'સૌથી ઝડપી નોકરી + Gulf/EV તકો', hinglish: 'Fastest job + Gulf/EV opportunities' },
    salary: '₹2L → ₹8L+',
    demand: 'Very High',
  },
};

export const parentDosDonts: Record<Lang, { dos: string[]; donts: string[] }> = {
  en: {
    dos: [
      'Listen to your child\'s interests without judgement.',
      'Respect Diploma & ITI as equal paths to Science.',
      'Visit colleges and meet career counsellors together.',
      'Encourage practical skills alongside studies.',
      'Celebrate effort, not just marks.',
    ],
    donts: [
      'Don\'t compare with neighbours\' children.',
      'Don\'t force a stream based on your dream.',
      'Don\'t treat Arts as a "lesser" choice.',
      'Don\'t panic over one bad exam.',
      'Don\'t hide family financial reality from the child.',
    ],
  },
  hi: {
    dos: [
      'बच्चे की रुचि बिना जजमेंट के सुनें।',
      'Diploma और ITI को विज्ञान के बराबर सम्मान दें।',
      'साथ में कॉलेज और काउंसलर से मिलें।',
      'पढ़ाई के साथ practical skills को बढ़ावा दें।',
      'मेहनत की प्रशंसा करें, सिर्फ़ अंकों की नहीं।',
    ],
    donts: [
      'पड़ोसी के बच्चों से तुलना न करें।',
      'अपने सपने थोपें नहीं।',
      'Arts को कमतर न समझें।',
      'एक खराब परीक्षा पर घबराएँ नहीं।',
      'परिवार की आर्थिक स्थिति बच्चे से न छुपाएँ।',
    ],
  },
  gu: {
    dos: [
      'બાળકની રુચિને નિર્ણય લીધા વગર સાંભળો.',
      'Diploma અને ITI ને વિજ્ઞાન જેટલું જ માન આપો.',
      'સાથે મળીને કોલેજ અને કાઉન્સેલરને મળો.',
      'અભ્યાસ સાથે પ્રાયોગિક કૌશલ્યને પ્રોત્સાહન આપો.',
      'ફક્ત માર્ક્સ નહીં, મહેનતની પ્રશંસા કરો.',
    ],
    donts: [
      'પાડોશીના બાળકો સાથે સરખામણી ન કરો.',
      'તમારા સપના થોપો નહીં.',
      'આર્ટસને ઓછી પસંદગી ન માનો.',
      'એક ખરાબ પરીક્ષા પર ગભરાશો નહીં.',
      'કુટુંબની આર્થિક સ્થિતિ બાળકથી છુપાવો નહીં.',
    ],
  },
  hinglish: {
    dos: [
      'Bachhe ki interest bina judge kiye suniye.',
      'Diploma aur ITI ko Science ke barabar respect dijiye.',
      'College aur counselor se saath milkar miliye.',
      'Padhai ke saath practical skills ko encourage kijiye.',
      'Sirf marks nahi, mehnat ki tareef kijiye.',
    ],
    donts: [
      'Padosi ke bachhon se comparison mat kijiye.',
      'Apne sapne mat thopiye.',
      'Arts ko kam mat samjhiye.',
      'Ek kharab exam pe ghabraiye mat.',
      'Family ki financial reality bachhe se mat chhupaiye.',
    ],
  },
};
