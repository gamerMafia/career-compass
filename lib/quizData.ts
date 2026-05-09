export type Stream = 'SCIENCE' | 'COMMERCE' | 'ARTS' | 'DIPLOMA' | 'ITI';

export type Aptitude =
  | 'logical'
  | 'numerical'
  | 'verbal'
  | 'creative'
  | 'practical'
  | 'social'
  | 'technical'
  | 'leadership';

export type Lang = 'en' | 'hi' | 'gu' | 'hinglish';

export interface QuizOption {
  text: Record<Lang, string>;
  scores: Partial<Record<Stream, number>>;
  aptitude?: Partial<Record<Aptitude, number>>;
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: Record<Lang, string>;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: 'interest',
    question: {
      en: 'Which subject do you enjoy most in school?',
      hi: 'स्कूल में आपको कौन सा विषय सबसे ज्यादा पसंद है?',
      gu: 'શાળામાં તમને કયો વિષય સૌથી વધુ ગમે છે?',
      hinglish: 'School mein aapko kaunsa subject sabse zyada pasand hai?',
    },
    options: [
      {
        text: { en: 'Maths & Science', hi: 'गणित और विज्ञान', gu: 'ગણિત અને વિજ્ઞાન', hinglish: 'Maths aur Science' },
        scores: { SCIENCE: 4, DIPLOMA: 3, COMMERCE: 1 },
        aptitude: { logical: 2, numerical: 2 },
      },
      {
        text: { en: 'Accounts & Business Studies', hi: 'अकाउंट्स और बिज़नेस', gu: 'એકાઉન્ટ્સ અને બિઝનેસ', hinglish: 'Accounts aur Business' },
        scores: { COMMERCE: 4, ARTS: 1 },
        aptitude: { numerical: 2, logical: 1 },
      },
      {
        text: { en: 'History, Politics, Languages', hi: 'इतिहास, राजनीति, भाषाएँ', gu: 'ઇતિહાસ, રાજનીતિ, ભાષાઓ', hinglish: 'History, Politics, Languages' },
        scores: { ARTS: 4, COMMERCE: 1 },
        aptitude: { verbal: 2, social: 1 },
      },
      {
        text: { en: 'Workshop / Hands-on subjects', hi: 'वर्कशॉप / प्रायोगिक विषय', gu: 'વર્કશોપ / પ્રાયોગિક વિષયો', hinglish: 'Workshop / Practical subjects' },
        scores: { DIPLOMA: 4, ITI: 4, SCIENCE: 1 },
        aptitude: { practical: 2, technical: 2 },
      },
    ],
  },
  {
    id: 2,
    category: 'learning',
    question: {
      en: 'How do you learn best?',
      hi: 'आप सबसे अच्छा कैसे सीखते हैं?',
      gu: 'તમે સૌથી સારી રીતે કેવી રીતે શીખો છો?',
      hinglish: 'Aap sabse achha kaise seekhte ho?',
    },
    options: [
      {
        text: { en: 'Reading theory & solving problems', hi: 'सिद्धांत पढ़कर और सवाल हल करके', gu: 'સિદ્ધાંત વાંચીને અને પ્રશ્નો ઉકેલીને', hinglish: 'Theory padh kar aur problems solve karke' },
        scores: { SCIENCE: 3, COMMERCE: 2 },
        aptitude: { logical: 2 },
      },
      {
        text: { en: 'Doing things with my hands', hi: 'अपने हाथों से काम करके', gu: 'મારા હાથોથી કામ કરીને', hinglish: 'Apne haathon se kaam karke' },
        scores: { ITI: 4, DIPLOMA: 3 },
        aptitude: { practical: 3 },
      },
      {
        text: { en: 'Discussion, debate, group work', hi: 'चर्चा, बहस, समूह कार्य', gu: 'ચર્ચા, વાદવિવાદ, ગ્રુપ વર્ક', hinglish: 'Discussion, debate, group work' },
        scores: { ARTS: 3, COMMERCE: 2 },
        aptitude: { verbal: 2, social: 2 },
      },
      {
        text: { en: 'Watching videos & visual examples', hi: 'वीडियो और दृश्य उदाहरणों से', gu: 'વિડિઓ અને દૃશ્ય ઉદાહરણોથી', hinglish: 'Videos aur visual examples se' },
        scores: { ARTS: 2, SCIENCE: 1, DIPLOMA: 1 },
        aptitude: { creative: 2 },
      },
    ],
  },
  {
    id: 3,
    category: 'goal',
    question: {
      en: 'When do you want to start earning?',
      hi: 'आप कब कमाना शुरू करना चाहते हैं?',
      gu: 'તમે ક્યારે કમાવાનું શરૂ કરવા માંગો છો?',
      hinglish: 'Aap kab kamana shuru karna chahte ho?',
    },
    options: [
      {
        text: { en: 'After 1-2 years (ASAP)', hi: '1-2 साल बाद (जल्दी)', gu: '1-2 વર્ષ પછી (જલ્દી)', hinglish: '1-2 saal mein (jaldi)' },
        scores: { ITI: 5, DIPLOMA: 3 },
      },
      {
        text: { en: 'After 3 years (Diploma)', hi: '3 साल बाद (Diploma)', gu: '3 વર્ષ પછી (Diploma)', hinglish: '3 saal baad (Diploma)' },
        scores: { DIPLOMA: 5, ITI: 2 },
      },
      {
        text: { en: 'After graduation (5-6 years)', hi: 'स्नातक के बाद (5-6 साल)', gu: 'સ્નાતક પછી (5-6 વર્ષ)', hinglish: 'Graduation ke baad (5-6 saal)' },
        scores: { SCIENCE: 3, COMMERCE: 4, ARTS: 3 },
      },
      {
        text: { en: 'Long-term study is fine (7+ years)', hi: 'लंबी पढ़ाई ठीक है (7+ साल)', gu: 'લાંબી પઢાઈ સારી છે (7+ વર્ષ)', hinglish: 'Lambi padhai theek hai (7+ saal)' },
        scores: { SCIENCE: 5, COMMERCE: 2, ARTS: 2 },
      },
    ],
  },
  {
    id: 4,
    category: 'aptitude-numerical',
    question: {
      en: 'A shopkeeper buys an item for ₹400 and sells it for ₹500. What is his profit %?',
      hi: 'एक दुकानदार ₹400 में सामान खरीदता है और ₹500 में बेचता है। लाभ प्रतिशत?',
      gu: 'એક દુકાનદાર ₹400 માં વસ્તુ ખરીદી ₹500 માં વેચે છે. નફો %?',
      hinglish: 'Ek shopkeeper ₹400 mein cheez kharidta hai aur ₹500 mein bechta hai. Profit %?',
    },
    options: [
      { text: { en: '20%', hi: '20%', gu: '20%', hinglish: '20%' }, scores: {}, aptitude: {} },
      { text: { en: '25%', hi: '25%', gu: '25%', hinglish: '25%' }, scores: { COMMERCE: 2, SCIENCE: 1 }, aptitude: { numerical: 3 } },
      { text: { en: '15%', hi: '15%', gu: '15%', hinglish: '15%' }, scores: {}, aptitude: {} },
      { text: { en: 'Not sure', hi: 'पता नहीं', gu: 'ખબર નથી', hinglish: 'Pata nahi' }, scores: { ARTS: 1, ITI: 1 }, aptitude: {} },
    ],
  },
  {
    id: 5,
    category: 'aptitude-logical',
    question: {
      en: 'If all roses are flowers and some flowers fade quickly, which is true?',
      hi: 'यदि सभी गुलाब फूल हैं और कुछ फूल जल्दी मुरझाते हैं, तो सही क्या है?',
      gu: 'જો બધા ગુલાબ ફૂલ છે અને કેટલાક ફૂલ જલ્દી કરમાય છે, તો સાચું શું?',
      hinglish: 'Agar sab roses flowers hain aur kuch flowers jaldi murjhate hain, sahi kya?',
    },
    options: [
      { text: { en: 'All roses fade quickly', hi: 'सभी गुलाब जल्दी मुरझाते हैं', gu: 'બધા ગુલાબ જલ્દી કરમાય', hinglish: 'Sab roses jaldi murjhate hain' }, scores: {}, aptitude: {} },
      { text: { en: 'Some roses may fade quickly', hi: 'कुछ गुलाब जल्दी मुरझा सकते हैं', gu: 'કેટલાક ગુલાબ જલ્દી કરમાય શકે', hinglish: 'Kuch roses jaldi murjha sakte hain' }, scores: { SCIENCE: 2, DIPLOMA: 1 }, aptitude: { logical: 3 } },
      { text: { en: 'No roses fade quickly', hi: 'कोई गुलाब नहीं मुरझाता', gu: 'કોઈ ગુલાબ કરમાતો નથી', hinglish: 'Koi rose nahi murjhata' }, scores: {}, aptitude: {} },
      { text: { en: 'Cannot say', hi: 'नहीं कह सकते', gu: 'કહી શકાય નહીં', hinglish: 'Keh nahi sakte' }, scores: { ARTS: 1 }, aptitude: { logical: 1 } },
    ],
  },
  {
    id: 6,
    category: 'personality',
    question: {
      en: 'In a group project, you naturally take the role of:',
      hi: 'समूह प्रोजेक्ट में आप स्वाभाविक रूप से क्या भूमिका लेते हैं?',
      gu: 'ગ્રુપ પ્રોજેક્ટમાં તમે કુદરતી રીતે કઈ ભૂમિકા લો?',
      hinglish: 'Group project mein aap naturally kya role lete ho?',
    },
    options: [
      { text: { en: 'The leader who organises everyone', hi: 'सबको व्यवस्थित करने वाला नेता', gu: 'બધાને વ્યવસ્થિત કરનાર નેતા', hinglish: 'Leader jo sabko organise kare' }, scores: { COMMERCE: 2, ARTS: 2 }, aptitude: { leadership: 3, social: 1 } },
      { text: { en: 'The thinker who solves problems', hi: 'समस्या हल करने वाला विचारक', gu: 'સમસ્યા ઉકેલનાર વિચારક', hinglish: 'Problem solve karne wala thinker' }, scores: { SCIENCE: 3, DIPLOMA: 1 }, aptitude: { logical: 2 } },
      { text: { en: 'The hands-on builder', hi: 'व्यावहारिक निर्माता', gu: 'પ્રાયોગિક નિર્માતા', hinglish: 'Hands-on builder' }, scores: { DIPLOMA: 2, ITI: 3 }, aptitude: { practical: 3, technical: 1 } },
      { text: { en: 'The creative idea-giver', hi: 'रचनात्मक विचार देने वाला', gu: 'સર્જનાત્મક વિચાર આપનાર', hinglish: 'Creative ideas dene wala' }, scores: { ARTS: 3 }, aptitude: { creative: 3 } },
    ],
  },
  {
    id: 7,
    category: 'interest',
    question: {
      en: 'On a free Sunday, you would prefer to:',
      hi: 'खाली रविवार को आप क्या करना पसंद करेंगे?',
      gu: 'ફ્રી રવિવારે તમે શું કરવાનું પસંદ કરશો?',
      hinglish: 'Khaali Sunday ko aap kya karna pasand karoge?',
    },
    options: [
      { text: { en: 'Solve a science puzzle / experiment', hi: 'विज्ञान पहेली / प्रयोग', gu: 'વિજ્ઞાન કોયડો / પ્રયોગ', hinglish: 'Science puzzle / experiment' }, scores: { SCIENCE: 3 }, aptitude: { logical: 2 } },
      { text: { en: 'Repair / build something', hi: 'कुछ ठीक / बनाना', gu: 'કંઇક રિપેર / બનાવવું', hinglish: 'Kuch repair / banana' }, scores: { ITI: 3, DIPLOMA: 2 }, aptitude: { practical: 3, technical: 2 } },
      { text: { en: 'Read, write, or paint', hi: 'पढ़ना, लिखना, चित्रकारी', gu: 'વાંચવું, લખવું, ચિત્રકારી', hinglish: 'Padhna, likhna, painting' }, scores: { ARTS: 3 }, aptitude: { creative: 2, verbal: 1 } },
      { text: { en: 'Track stocks / play business games', hi: 'शेयर बाजार / बिज़नेस गेम', gu: 'સ્ટોક્સ / બિઝનેસ ગેમ', hinglish: 'Stocks / business games' }, scores: { COMMERCE: 3 }, aptitude: { numerical: 2 } },
    ],
  },
  {
    id: 8,
    category: 'practical',
    question: {
      en: 'Family cannot afford long college fees. What feels right?',
      hi: 'परिवार लंबी कॉलेज फीस वहन नहीं कर सकता। क्या सही लगता है?',
      gu: 'કુટુંબ લાંબી કોલેજ ફી પોસાય તેમ નથી. શું યોગ્ય લાગે?',
      hinglish: 'Family lambi college fees afford nahi kar sakti. Kya sahi lage?',
    },
    options: [
      { text: { en: 'ITI — quick job, low fee', hi: 'ITI — जल्दी नौकरी, कम फीस', gu: 'ITI — જલ્દી નોકરી, ઓછી ફી', hinglish: 'ITI — jaldi job, kam fees' }, scores: { ITI: 5 } },
      { text: { en: 'Diploma — good salary in 3 yrs', hi: 'Diploma — 3 साल में अच्छी सैलरी', gu: 'Diploma — 3 વર્ષમાં સારી સેલેરી', hinglish: 'Diploma — 3 saal mein achhi salary' }, scores: { DIPLOMA: 5 } },
      { text: { en: 'Commerce + part-time work', hi: 'Commerce + पार्ट-टाइम काम', gu: 'Commerce + પાર્ટ-ટાઇમ કામ', hinglish: 'Commerce + part-time kaam' }, scores: { COMMERCE: 3, ARTS: 1 } },
      { text: { en: 'Try for scholarships and continue', hi: 'छात्रवृत्ति की कोशिश और जारी रखें', gu: 'સ્કોલરશીપ માટે પ્રયત્ન કરો', hinglish: 'Scholarship try karo aur continue' }, scores: { SCIENCE: 3, ARTS: 2 } },
    ],
  },
  {
    id: 9,
    category: 'aptitude-technical',
    question: {
      en: 'A friend\'s mobile is not charging. You would:',
      hi: 'दोस्त का मोबाइल चार्ज नहीं हो रहा। आप क्या करेंगे?',
      gu: 'મિત્રનો મોબાઇલ ચાર્જ નથી થતો. તમે શું કરશો?',
      hinglish: 'Dost ka mobile charge nahi ho raha. Aap kya karoge?',
    },
    options: [
      { text: { en: 'Open it and try to fix it', hi: 'खोलकर खुद ठीक करूँगा', gu: 'ખોલીને જાતે રિપેર કરીશ', hinglish: 'Khol ke khud fix karunga' }, scores: { ITI: 3, DIPLOMA: 3 }, aptitude: { technical: 3, practical: 2 } },
      { text: { en: 'Search YouTube and try', hi: 'YouTube देखकर कोशिश', gu: 'YouTube જોઈને ટ્રાય', hinglish: 'YouTube dekh ke try karunga' }, scores: { SCIENCE: 2, DIPLOMA: 2 }, aptitude: { technical: 2, logical: 1 } },
      { text: { en: 'Take it to a repair shop', hi: 'दुकान पर ले जाऊँगा', gu: 'દુકાને લઈ જઈશ', hinglish: 'Shop pe le jaunga' }, scores: { COMMERCE: 1, ARTS: 1 } },
      { text: { en: 'Buy a new charger online', hi: 'नया चार्जर ऑनलाइन', gu: 'નવો ચાર્જર ઓનલાઇન', hinglish: 'Naya charger online' }, scores: { COMMERCE: 1 } },
    ],
  },
  {
    id: 10,
    category: 'personality',
    question: {
      en: 'Your dream career environment is:',
      hi: 'आपका सपनों का करियर माहौल कैसा है?',
      gu: 'તમારું સપનાનું કરિયર વાતાવરણ કેવું?',
      hinglish: 'Aapka dream career environment kaisa?',
    },
    options: [
      { text: { en: 'Lab / hospital / research center', hi: 'लैब / अस्पताल / रिसर्च', gu: 'લેબ / હોસ્પિટલ / રિસર્ચ', hinglish: 'Lab / hospital / research' }, scores: { SCIENCE: 4 } },
      { text: { en: 'Office / bank / company', hi: 'ऑफ़िस / बैंक / कंपनी', gu: 'ઓફિસ / બેન્ક / કંપની', hinglish: 'Office / bank / company' }, scores: { COMMERCE: 4 } },
      { text: { en: 'Studio / court / classroom', hi: 'स्टूडियो / कोर्ट / क्लासरूम', gu: 'સ્ટુડિયો / કોર્ટ / ક્લાસરૂમ', hinglish: 'Studio / court / classroom' }, scores: { ARTS: 4 } },
      { text: { en: 'Factory / site / workshop', hi: 'फ़ैक्टरी / साइट / वर्कशॉप', gu: 'ફેક્ટરી / સાઇટ / વર્કશોપ', hinglish: 'Factory / site / workshop' }, scores: { DIPLOMA: 3, ITI: 4 } },
    ],
  },
  {
    id: 11,
    category: 'creativity',
    question: {
      en: 'How often do you come up with new ideas?',
      hi: 'आप कितनी बार नए विचार लाते हैं?',
      gu: 'તમે કેટલી વાર નવા વિચાર લાવો?',
      hinglish: 'Aap kitni baar naye ideas laate ho?',
    },
    options: [
      { text: { en: 'Constantly', hi: 'लगातार', gu: 'સતત', hinglish: 'Hamesha' }, scores: { ARTS: 3, COMMERCE: 1 }, aptitude: { creative: 3 } },
      { text: { en: 'Often', hi: 'अक्सर', gu: 'વારંવાર', hinglish: 'Aksar' }, scores: { ARTS: 2, SCIENCE: 1 }, aptitude: { creative: 2 } },
      { text: { en: 'Sometimes', hi: 'कभी-कभी', gu: 'ક્યારેક', hinglish: 'Kabhi-kabhi' }, scores: { COMMERCE: 1, DIPLOMA: 1 }, aptitude: { creative: 1 } },
      { text: { en: 'Rarely — I prefer following plans', hi: 'कम — योजना का पालन', gu: 'ઓછી — પ્લાન અનુસરું', hinglish: 'Rarely — plan follow karta hoon' }, scores: { DIPLOMA: 2, ITI: 2 }, aptitude: { practical: 2 } },
    ],
  },
  {
    id: 12,
    category: 'social',
    question: {
      en: 'Helping others gives me energy.',
      hi: 'दूसरों की मदद करने से मुझे ऊर्जा मिलती है।',
      gu: 'બીજાને મદદ કરવાથી મને ઊર્જા મળે છે.',
      hinglish: 'Doosron ki madad karne se mujhe energy milti hai.',
    },
    options: [
      { text: { en: 'Strongly agree', hi: 'पूरी तरह सहमत', gu: 'સંપૂર્ણ સહમત', hinglish: 'Bilkul sahi' }, scores: { ARTS: 3, SCIENCE: 2 }, aptitude: { social: 3 } },
      { text: { en: 'Agree', hi: 'सहमत', gu: 'સહમત', hinglish: 'Sahmat' }, scores: { ARTS: 2, COMMERCE: 1 }, aptitude: { social: 2 } },
      { text: { en: 'Neutral', hi: 'तटस्थ', gu: 'તટસ્થ', hinglish: 'Neutral' }, scores: {}, aptitude: { social: 1 } },
      { text: { en: 'Disagree', hi: 'असहमत', gu: 'અસહમત', hinglish: 'Asahmat' }, scores: { DIPLOMA: 1, ITI: 1 }, aptitude: {} },
    ],
  },
  {
    id: 13,
    category: 'aptitude-verbal',
    question: {
      en: 'Choose the word closest in meaning to "diligent":',
      hi: '"diligent" के सबसे करीब शब्द चुनें:',
      gu: '"diligent" ની સૌથી નજીકનો શબ્દ:',
      hinglish: '"diligent" ke sabse kareeb word:',
    },
    options: [
      { text: { en: 'Lazy', hi: 'आलसी', gu: 'આળસુ', hinglish: 'Aalsi' }, scores: {}, aptitude: {} },
      { text: { en: 'Hard-working', hi: 'मेहनती', gu: 'મહેનતુ', hinglish: 'Mehnati' }, scores: { ARTS: 1, COMMERCE: 1, SCIENCE: 1 }, aptitude: { verbal: 3 } },
      { text: { en: 'Friendly', hi: 'मित्रवत्', gu: 'મિત્રતાપૂર્ણ', hinglish: 'Friendly' }, scores: {}, aptitude: { verbal: 1 } },
      { text: { en: 'Careless', hi: 'लापरवाह', gu: 'બેદરકાર', hinglish: 'Lapharwah' }, scores: {}, aptitude: {} },
    ],
  },
  {
    id: 14,
    category: 'goal',
    question: {
      en: 'Which of these excites you most?',
      hi: 'इनमें से कौन सा आपको सबसे ज्यादा उत्साहित करता है?',
      gu: 'આમાંથી તમને સૌથી વધુ શું ઉત્સાહિત કરે?',
      hinglish: 'Inme se kaunsa aapko sabse zyada excite karta hai?',
    },
    options: [
      { text: { en: 'Becoming a Doctor / Engineer / Scientist', hi: 'डॉक्टर / इंजीनियर / वैज्ञानिक', gu: 'ડોક્ટર / એન્જિનિયર / વૈજ્ઞાનિક', hinglish: 'Doctor / Engineer / Scientist' }, scores: { SCIENCE: 4 } },
      { text: { en: 'Becoming a CA / Banker / Entrepreneur', hi: 'CA / बैंकर / उद्यमी', gu: 'CA / બેન્કર / ઉદ્યોગસાહસિક', hinglish: 'CA / Banker / Entrepreneur' }, scores: { COMMERCE: 4 } },
      { text: { en: 'Becoming a Lawyer / Designer / IAS', hi: 'वकील / डिज़ाइनर / IAS', gu: 'વકીલ / ડિઝાઇનર / IAS', hinglish: 'Lawyer / Designer / IAS' }, scores: { ARTS: 4 } },
      { text: { en: 'Becoming a Junior Engineer / Skilled Technician', hi: 'जूनियर इंजीनियर / कुशल तकनीशियन', gu: 'જુનિયર એન્જિનિયર / કુશળ ટેકનિશિયન', hinglish: 'Junior Engineer / Skilled Technician' }, scores: { DIPLOMA: 4, ITI: 3 } },
    ],
  },
  {
    id: 15,
    category: 'personality',
    question: {
      en: 'Long classroom theory makes me feel:',
      hi: 'लंबी क्लासरूम थ्योरी मुझे महसूस कराती है:',
      gu: 'લાંબી ક્લાસરૂમ થિયરી મને કેવું લાગે:',
      hinglish: 'Lambi classroom theory mujhe kaisa lagti hai:',
    },
    options: [
      { text: { en: 'Curious and engaged', hi: 'जिज्ञासु और जुड़ा हुआ', gu: 'જિજ્ઞાસુ અને જોડાયેલો', hinglish: 'Curious aur engaged' }, scores: { SCIENCE: 3, COMMERCE: 2, ARTS: 2 } },
      { text: { en: 'Okay if it\'s interesting', hi: 'दिलचस्प हो तो ठीक', gu: 'રસપ્રદ હોય તો ઠીક', hinglish: 'Interesting ho to theek' }, scores: { COMMERCE: 1, ARTS: 1 } },
      { text: { en: 'Bored — I want to do, not listen', hi: 'बोर — मैं करना चाहता हूँ', gu: 'કંટાળો — હું કરવા માંગુ છું', hinglish: 'Bore — main karna chahta hoon' }, scores: { DIPLOMA: 3, ITI: 4 }, aptitude: { practical: 2 } },
      { text: { en: 'Sleepy', hi: 'नींद आती है', gu: 'નિંદ્રા આવે', hinglish: 'Neend aati hai' }, scores: { ITI: 2, DIPLOMA: 1 } },
    ],
  },
  {
    id: 16,
    category: 'tech-interest',
    question: {
      en: 'How interesting do you find cybersecurity & ethical hacking?',
      hi: 'साइबर सुरक्षा और एथिकल हैकिंग आपको कितनी दिलचस्प लगती है?',
      gu: 'સાયબર સિક્યુરિટી અને એથિકલ હેકિંગ તમને કેટલું રસપ્રદ લાગે છે?',
      hinglish: 'Cybersecurity aur ethical hacking aapko kitni interesting lagti hai?',
    },
    options: [
      { text: { en: 'Very — I love the idea of catching hackers', hi: 'बहुत — हैकर्स पकड़ना पसंद', gu: 'ઘણું — હેકર્સ પકડવા ગમે', hinglish: 'Bahut — hackers pakadna pasand hai' }, scores: { SCIENCE: 4, DIPLOMA: 3 }, aptitude: { logical: 2, technical: 3 } },
      { text: { en: 'Curious but I don\'t know much yet', hi: 'जिज्ञासु पर ज्ञान कम', gu: 'જિજ્ઞાસુ પણ જાણકારી ઓછી', hinglish: 'Curious hoon par knowledge kam hai' }, scores: { SCIENCE: 2, DIPLOMA: 2, ITI: 1 }, aptitude: { logical: 1, technical: 1 } },
      { text: { en: 'Sounds cool but too technical for me', hi: 'दिलचस्प पर बहुत तकनीकी', gu: 'રસપ્રદ પણ બહુ ટેકનિકલ', hinglish: 'Cool hai par bahut technical' }, scores: { COMMERCE: 1, ARTS: 1 } },
      { text: { en: 'Not interested', hi: 'रुचि नहीं', gu: 'રસ નથી', hinglish: 'Interest nahi' }, scores: {} },
    ],
  },
  {
    id: 17,
    category: 'tech-aptitude',
    question: {
      en: 'A website was hacked because users had weak passwords. The smartest fix is:',
      hi: 'कमज़ोर पासवर्ड से वेबसाइट हैक हुई। सबसे समझदार उपाय?',
      gu: 'કમજોર પાસવર્ડથી વેબસાઇટ હેક થઈ. સૌથી સ્માર્ટ ઉપાય?',
      hinglish: 'Weak passwords ki wajah se website hack hui. Sabse smart solution?',
    },
    options: [
      { text: { en: 'Force strong passwords + 2-factor authentication', hi: 'मज़बूत पासवर्ड + 2-factor', gu: 'મજબૂત પાસવર્ડ + 2-factor', hinglish: 'Strong passwords + 2-factor authentication' }, scores: { SCIENCE: 3, DIPLOMA: 3 }, aptitude: { logical: 3, technical: 3 } },
      { text: { en: 'Block all users for 24 hours', hi: 'सभी users को 24 घंटे ब्लॉक', gu: 'બધા યુઝર્સને 24 કલાક બ્લોક', hinglish: 'Sabhi users ko 24 ghante block' }, scores: {} },
      { text: { en: 'Change website colours', hi: 'वेबसाइट के रंग बदलें', gu: 'વેબસાઇટના રંગ બદલો', hinglish: 'Website ke colours badlein' }, scores: {} },
      { text: { en: 'Send the hackers an angry email', hi: 'हैकर्स को गुस्से वाला ईमेल', gu: 'હેકરને ગુસ્સાવાળો ઈમેલ', hinglish: 'Hackers ko angry email bhejein' }, scores: {} },
    ],
  },
  {
    id: 18,
    category: 'tech-interest',
    question: {
      en: 'Have you ever tried writing code (even a small program)?',
      hi: 'क्या आपने कभी कोडिंग की है (छोटा प्रोग्राम भी)?',
      gu: 'શું તમે ક્યારેય કોડિંગ કરી છે (નાનો પ્રોગ્રામ પણ)?',
      hinglish: 'Aapne kabhi coding ki hai (chhota program bhi)?',
    },
    options: [
      { text: { en: 'Yes — I enjoy it and want to do more', hi: 'हाँ — और करना है', gu: 'હા — અને કરવું છે', hinglish: 'Haan — aur karna hai' }, scores: { SCIENCE: 4, DIPLOMA: 3 }, aptitude: { logical: 3, technical: 3 } },
      { text: { en: 'Tried Scratch / HTML once', hi: 'Scratch / HTML कोशिश की', gu: 'Scratch / HTML ટ્રાય કર્યું', hinglish: 'Scratch / HTML try kiya hai' }, scores: { SCIENCE: 2, DIPLOMA: 2, ARTS: 1 }, aptitude: { logical: 2, technical: 1 } },
      { text: { en: 'Never but I\'m curious', hi: 'कभी नहीं पर जिज्ञासु', gu: 'ક્યારેય નહીં પણ જિજ્ઞાસુ', hinglish: 'Kabhi nahi par curious hoon' }, scores: { SCIENCE: 1, DIPLOMA: 1 } },
      { text: { en: 'Not interested in coding', hi: 'कोडिंग में रुचि नहीं', gu: 'કોડિંગમાં રસ નથી', hinglish: 'Coding mein interest nahi' }, scores: { COMMERCE: 1, ARTS: 1, ITI: 1 } },
    ],
  },
  {
    id: 19,
    category: 'tech-interest',
    question: {
      en: 'AI tools like ChatGPT excite me because:',
      hi: 'AI tools जैसे ChatGPT मुझे रोमांचित करते हैं क्योंकि:',
      gu: 'AI tools જેવા ChatGPT મને ઉત્સાહિત કરે કારણ કે:',
      hinglish: 'AI tools jaise ChatGPT mujhe excite karte hain kyunki:',
    },
    options: [
      { text: { en: 'I want to BUILD them (engineer them)', hi: 'मैं इन्हें बनाना चाहता हूँ', gu: 'હું એને બનાવવા માંગુ', hinglish: 'Main inhe banana chahta hoon' }, scores: { SCIENCE: 4, DIPLOMA: 2 }, aptitude: { logical: 2, technical: 3, creative: 1 } },
      { text: { en: 'I want to USE them to grow my business', hi: 'व्यवसाय बढ़ाने के लिए', gu: 'વ્યવસાય માટે વાપરવા', hinglish: 'Business grow karne ke liye' }, scores: { COMMERCE: 4 }, aptitude: { numerical: 1 } },
      { text: { en: 'I want to use them creatively (content, design)', hi: 'रचनात्मक उपयोग', gu: 'સર્જનાત્મક ઉપયોગ', hinglish: 'Creative use ke liye' }, scores: { ARTS: 4 }, aptitude: { creative: 3 } },
      { text: { en: 'I find them overhyped', hi: 'इन्हें ज़्यादा हाइप दी जा रही', gu: 'એને વધારે હાઇપ આપી છે', hinglish: 'Inhe overhype kiya gaya hai' }, scores: { ITI: 1 } },
    ],
  },
  {
    id: 20,
    category: 'tech-aptitude',
    question: {
      en: 'You see a strange email saying "Click here to claim ₹10,000". You:',
      hi: 'अजीब ईमेल आया "₹10,000 पाने के लिए क्लिक करें"। आप:',
      gu: 'વિચિત્ર ઈમેલ આવ્યો "₹10,000 માટે ક્લિક કરો". તમે:',
      hinglish: 'Ajeeb email aaya "₹10,000 ke liye click karo". Aap:',
    },
    options: [
      { text: { en: 'Recognize it as phishing and report it', hi: 'फिशिंग पहचानकर रिपोर्ट करूँ', gu: 'ફિશિંગ ઓળખીને રિપોર્ટ કરું', hinglish: 'Phishing samajh ke report karunga' }, scores: { SCIENCE: 3, DIPLOMA: 3, COMMERCE: 1 }, aptitude: { logical: 3, technical: 3 } },
      { text: { en: 'Ignore and delete', hi: 'अनदेखा करके हटा दूँ', gu: 'અવગણીને ડિલીટ', hinglish: 'Ignore karke delete' }, scores: { COMMERCE: 1, ARTS: 1, ITI: 1 }, aptitude: { logical: 1 } },
      { text: { en: 'Click to check (curious)', hi: 'जिज्ञासावश क्लिक', gu: 'જિજ્ઞાસાથી ક્લિક', hinglish: 'Curious hoke click' }, scores: {} },
      { text: { en: 'Forward to friends', hi: 'दोस्तों को forward', gu: 'મિત્રોને ફોરવર્ડ', hinglish: 'Doston ko forward' }, scores: {} },
    ],
  },
  {
    id: 21,
    category: 'tech-interest',
    question: {
      en: 'Which one would you most love to learn?',
      hi: 'इनमें से क्या सीखना सबसे ज्यादा पसंद होगा?',
      gu: 'આમાંથી શું શીખવું સૌથી વધુ ગમશે?',
      hinglish: 'Inme se kya seekhna sabse zyada pasand hoga?',
    },
    options: [
      { text: { en: 'Build mobile apps / websites', hi: 'मोबाइल एप / वेबसाइट बनाना', gu: 'મોબાઇલ એપ / વેબસાઇટ બનાવવી', hinglish: 'Mobile apps / websites banana' }, scores: { SCIENCE: 3, DIPLOMA: 4 }, aptitude: { technical: 3, logical: 2 } },
      { text: { en: 'Penetration testing / Ethical Hacking', hi: 'पेनेट्रेशन टेस्टिंग / एथिकल हैकिंग', gu: 'પેનિટ્રેશન ટેસ્ટિંગ / એથિકલ હેકિંગ', hinglish: 'Pen-testing / Ethical Hacking' }, scores: { SCIENCE: 4, DIPLOMA: 3 }, aptitude: { logical: 3, technical: 3 } },
      { text: { en: 'AI / Data Science with Python', hi: 'AI / Data Science Python से', gu: 'AI / Data Science Python થી', hinglish: 'AI / Data Science Python se' }, scores: { SCIENCE: 4 }, aptitude: { logical: 3, numerical: 2, technical: 2 } },
      { text: { en: 'Robotics / EV / Hardware', hi: 'रोबोटिक्स / EV / हार्डवेयर', gu: 'રોબોટિક્સ / EV / હાર્ડવેર', hinglish: 'Robotics / EV / Hardware' }, scores: { DIPLOMA: 4, ITI: 3 }, aptitude: { practical: 2, technical: 3 } },
    ],
  },
  {
    id: 22,
    category: 'tech-aptitude',
    question: {
      en: 'Which describes your relationship with computers?',
      hi: 'कंप्यूटर के साथ आपका रिश्ता?',
      gu: 'કમ્પ્યુટર સાથે તમારો સંબંધ?',
      hinglish: 'Computer ke saath aapka rishta?',
    },
    options: [
      { text: { en: 'I install Linux for fun & customise everything', hi: 'मज़े के लिए Linux इंस्टॉल करता हूँ', gu: 'મજા માટે Linux ઇન્સ્ટોલ કરું', hinglish: 'Maze ke liye Linux install karta hoon' }, scores: { SCIENCE: 3, DIPLOMA: 4 }, aptitude: { technical: 4, logical: 2 } },
      { text: { en: 'Comfortable user — I figure things out', hi: 'सहज user — खुद हल कर लेता हूँ', gu: 'સરળ યુઝર — જાતે હલ કરું', hinglish: 'Comfortable user — khud figure out kar leta hoon' }, scores: { SCIENCE: 2, DIPLOMA: 2, COMMERCE: 1 }, aptitude: { technical: 2, logical: 1 } },
      { text: { en: 'Use it mainly for school / social media', hi: 'मुख्य रूप से पढ़ाई/सोशल मीडिया', gu: 'મુખ્યત્વે અભ્યાસ/સોશિયલ', hinglish: 'School aur social media ke liye' }, scores: { ARTS: 1, COMMERCE: 1 } },
      { text: { en: 'I prefer tools / hands-on machines over computers', hi: 'मुझे कंप्यूटर से ज़्यादा मशीनें पसंद', gu: 'મને કમ્પ્યુટરથી વધુ મશીનો ગમે', hinglish: 'Mujhe machines computer se zyada pasand' }, scores: { ITI: 4, DIPLOMA: 1 }, aptitude: { practical: 3 } },
    ],
  },
  {
    id: 23,
    category: 'tech-interest',
    question: {
      en: 'You hear about data privacy and online safety. You feel:',
      hi: 'डेटा गोपनीयता और ऑनलाइन सुरक्षा सुनकर आप महसूस करते हैं:',
      gu: 'ડેટા પ્રાઇવસી અને ઓનલાઇન સુરક્ષા વિશે તમને લાગે:',
      hinglish: 'Data privacy aur online safety sun ke aap feel karte ho:',
    },
    options: [
      { text: { en: 'Strongly important — I want to protect people', hi: 'बहुत ज़रूरी — लोगों की रक्षा करना है', gu: 'બહુ જરૂરી — લોકોની સુરક્ષા', hinglish: 'Bahut zaroori — logon ko protect karna hai' }, scores: { SCIENCE: 4, ARTS: 1, DIPLOMA: 2 }, aptitude: { social: 1, technical: 2, logical: 2 } },
      { text: { en: 'Important — I want to learn the legal side', hi: 'ज़रूरी — कानूनी पक्ष सीखना है', gu: 'જરૂરી — કાયદાનો પક્ષ', hinglish: 'Zaroori — legal side seekhna hai' }, scores: { ARTS: 4, COMMERCE: 1 }, aptitude: { verbal: 2, social: 2 } },
      { text: { en: 'Important — I want to build secure systems', hi: 'सुरक्षित सिस्टम बनाना है', gu: 'સુરક્ષિત સિસ્ટમ બનાવવી', hinglish: 'Secure systems banana hai' }, scores: { SCIENCE: 3, DIPLOMA: 4 }, aptitude: { technical: 3, logical: 3 } },
      { text: { en: 'Don\'t think about it much', hi: 'ज़्यादा नहीं सोचता', gu: 'એટલું વિચારતો નથી', hinglish: 'Zyada nahi sochta' }, scores: { ITI: 1 } },
    ],
  },
  {
    id: 24,
    category: 'tech-interest',
    question: {
      en: 'A small business asks you to help. Which problem would you choose?',
      hi: 'छोटा व्यवसाय मदद माँगे। आप कौन सी समस्या चुनेंगे?',
      gu: 'નાનો બિઝનેસ મદદ માંગે. તમે કઈ સમસ્યા પસંદ કરશો?',
      hinglish: 'Chhota business madad maange. Kaunsa problem choose karoge?',
    },
    options: [
      { text: { en: 'Build their website + automate their work', hi: 'वेबसाइट + ऑटोमेशन', gu: 'વેબસાઇટ + ઓટોમેશન', hinglish: 'Website + automation' }, scores: { SCIENCE: 3, DIPLOMA: 3 }, aptitude: { technical: 3, logical: 2 } },
      { text: { en: 'Run their digital marketing + ads', hi: 'डिजिटल मार्केटिंग + ads', gu: 'ડિજિટલ માર્કેટિંગ + ads', hinglish: 'Digital marketing + ads' }, scores: { COMMERCE: 3, ARTS: 2 }, aptitude: { creative: 2, social: 1 } },
      { text: { en: 'Design their brand + logo', hi: 'ब्रांड + लोगो डिज़ाइन', gu: 'બ્રાન્ડ + લોગો ડિઝાઇન', hinglish: 'Brand + logo design' }, scores: { ARTS: 4 }, aptitude: { creative: 3 } },
      { text: { en: 'Fix their machines / equipment', hi: 'मशीन / उपकरण ठीक करना', gu: 'મશીન / સાધનો રિપેર', hinglish: 'Machines / equipment fix karna' }, scores: { ITI: 4, DIPLOMA: 2 }, aptitude: { practical: 3, technical: 2 } },
    ],
  },
];
