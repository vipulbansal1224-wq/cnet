export interface ITArticle {
  id: string;
  category: 'it-gyan' | 'tips-tricks' | 'software' | 'internet' | 'quiz-facts';
  categoryLabel: string;
  title: string;
  titleHindi: string;
  image: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const itArticles: ITArticle[] = [
  {
    id: 'super-computer',
    category: 'it-gyan',
    categoryLabel: 'IT ज्ञान',
    title: 'Supercomputers: Everything You Need to Know',
    titleHindi: 'सुपर कम्प्यूटर के बारे में जाने - कार्यप्रणाली और उपयोग',
    image: '/images/news_supercomputer.jpg',
    readTime: '4 min read',
    date: 'Updated Nov 2024',
    author: 'C-NET Technical Faculty',
    summary: 'सुपर कंप्यूटर सामान्य कंप्यूटरों की तुलना में लाखों गुना तेज गति से गणना करते हैं। जानिए भारत के परम (PARAM) सुपर कंप्यूटर और इनके मुख्य वैज्ञानिक उपयोग।',
    tags: ['Supercomputer', 'PARAM', 'HPC', 'Science'],
    content: [
      'सुपर कम्प्यूटर (Super Computer) दुनिया के सबसे शक्तिशाली कंप्यूटर होते हैं, जिनकी प्रोसेसिंग क्षमता सामान्य पर्सनल कंप्यूटर (PC) से हजारों गुना अधिक होती है।',
      'इनकी गति को FLOPS (Floating Point Operations Per Second) में मापा जाता है। आज के आधुनिक पेटाफ्लॉप्स सुपरकंप्यूटर एक सेकंड में अरबों-खरबों गणितीय गणनाएं करने में सक्षम हैं।',
      'भारत का पहला सुपर कंप्यूटर ‘PARAM 8000’ वर्ष 1991 में C-DAC (Centre for Development of Advanced Computing) द्वारा डॉ. विजय भटकर के नेतृत्व में तैयार किया गया था। आज भारत के पास PARAM Siddhi-AI, Pratyush और Mihir जैसे विश्वस्तरीय सुपरकंप्यूटर हैं।',
      'सुपरकंप्यूटर के प्रमुख उपयोग: मौसम पूर्वानुमान एवं चक्रवात की पूर्व चेतावनी, अंतरिक्ष अनुसंधान एवं उपग्रह प्रक्षेपण (ISRO), परमाणु ऊर्जा अनुसंधान, जटिल बायोमेडिकल जीनोम अनुक्रमण एवं दवा खोज।',
      'C-NET लुधियाना में छात्रों को कंप्यूटर आर्किटेक्चर और पैरेलल प्रोसेसिंग के सिद्धांतों से भी रूबरू कराया जाता है ताकि वे भविष्य की तकनीकों के लिए तैयार हो सकें।'
    ]
  },
  {
    id: 'speed-up-pc',
    category: 'tips-tricks',
    categoryLabel: 'टिप्स & ट्रिक्स',
    title: 'How to Speed Up Slow Windows Computer in 1-Click',
    titleHindi: 'एक क्लिक के साथ कंप्यूटर की गति कैसे बढ़ाए? प्रैक्टिकल गाइड',
    image: '/images/news_speedup.jpg',
    readTime: '3 min read',
    date: 'Updated Oct 2024',
    author: 'Chandan Kumar (Director)',
    summary: 'यदि आपका कंप्यूटर या लैपटॉप हैंग हो रहा है या बहुत धीमा चल रहा है, तो इन 5 आसान ट्रिक्स से उसकी गति को तुरंत दोगुना करें।',
    tags: ['Windows', 'Speed Up', 'Maintenance', 'RAM'],
    content: [
      'अक्सर जब हम लंबे समय तक कंप्यूटर का उपयोग करते हैं, तो सिस्टम में हजारों अस्थायी (Temporary) फाइलें और बैकग्राउंड सर्विसेज जमा हो जाती हैं, जिससे रैम और सीपीयू का उपयोग 100% तक पहुँच जाता है।',
      '1. Temporary Cache को डिलीट करें: कीबोर्ड पर "Windows + R" दबाएं और "temp", "%temp%", तथा "prefetch" टाइप करके खुली हुई सभी फाइलों को "Shift + Delete" करें।',
      '2. Startup Programs को निष्क्रिय करें: "Ctrl + Shift + Esc" दबाकर Task Manager खोलें। Startup टैब में जाकर अनचाहे सॉफ्टवेयर (Skype, Spotify, OneDrive) को Disable कर दें।',
      '3. Disk Cleanup यूटिलिटी का उपयोग: Search बार में "Disk Cleanup" टाइप करें और C: ड्राइव को सेलेक्ट करके Recycle Bin व Temporary Internet Files को साफ करें।',
      '4. Virtual Memory को अनुकूलित करें: Advanced System Settings में जाकर Paging File Size को RAM की क्षमता के अनुसार कस्टमाइज करें।',
      '5. SSD में अपग्रेड करें: यदि आपका सिस्टम अभी भी पारंपरिक मैकेनिकल HDD पर चल रहा है, तो एक NVMe या SATA SSD लगाने से कंप्यूटर की बूट स्पीड 10 गुना तेज हो जाती है।'
    ]
  },
  {
    id: 'sundar-pichai-facts',
    category: 'quiz-facts',
    categoryLabel: 'रोचक तथ्य',
    title: 'Inspiring Facts About Sundar Pichai (Google & Alphabet CEO)',
    titleHindi: 'सुंदर पिचाई के बारे में ये बातें आपको जरूर जाननी चाहिये',
    image: '/images/news_sundarpichai.jpg',
    readTime: '5 min read',
    date: 'Updated Sep 2024',
    author: 'Editorial Desk',
    summary: 'मदुरै के एक छोटे से घर से निकलकर सिलिकॉन वैली की सबसे बड़ी टेक कंपनी Google के शिखर तक पहुंचने वाले सुंदर पिचाई का प्रेरक सफर।',
    tags: ['Sundar Pichai', 'Google', 'Inspiration', 'Tech Leaders'],
    content: [
      'सुंदर पिचाई का जन्म 10 जून 1972 को तमिलनाडु के मदुरै में हुआ था। उनके पिता एक इलेक्ट्रिकल इंजीनियर थे और मां एक स्टेनोग्राफर थीं।',
      'उनकी असाधारण याददाश्त का अंदाजा इस बात से लगाया जा सकता है कि उन्हें बचपन में रोटरी टेलीफोन पर डायल किए गए हर एक फोन नंबर याद रहते थे।',
      'उन्होंने IIT खड़गपुर से मेटालर्जिकल इंजीनियरिंग में B.Tech किया और बाद में स्टैनफोर्ड यूनिवर्सिटी से MS तथा व्हार्टन बिजनेस स्कूल से MBA की डिग्री हासिल की।',
      'वर्ष 2004 में Google जॉइन करने के बाद, उन्होंने Google Toolbar और फिर Google Chrome वेब ब्राउज़र के निर्माण का ऐतिहासिक प्रस्ताव रखा, जिसने आज दुनिया के ब्राउज़र बाजार में 65%+ हिस्सेदारी हासिल कर रखी है।',
      'उन्होंने Android OS और Google Drive के विकास का भी नेतृत्व किया। उनका जीवन यह साबित करता है कि लगन, तकनीकी शिक्षा और निरंतर सीखने की भूख किसी भी विद्यार्थी को विश्व के सर्वोच्च पद तक पहुंचा सकती है।'
    ]
  },
  {
    id: 'wifi-password-recovery',
    category: 'tips-tricks',
    categoryLabel: 'टिप्स & ट्रिक्स',
    title: 'How to Recover Saved Forgotten Wi-Fi Password in Windows',
    titleHindi: 'भूला हुआ Wi-Fi पासवर्ड पुनः प्राप्त कैसे करे? CMD ट्रिक',
    image: '/images/news_wifi.jpg',
    readTime: '2 min read',
    date: 'Updated Aug 2024',
    author: 'C-NET Lab Instructor',
    summary: 'अगर आप अपने लैपटॉप या ऑफिस के कनेक्टेड वाई-फाई का पासवर्ड भूल गए हैं, तो बिना किसी थर्ड-पार्टी सॉफ्टवेयर के Windows CMD से उसे कैसे निकालें।',
    tags: ['WiFi', 'CMD', 'Windows Tips', 'Networking'],
    content: [
      'स्टेप 1: अपने कीबोर्ड पर Windows Key दबाएं और "cmd" टाइप करके "Run as administrator" पर क्लिक करें।',
      'स्टेप 2: कमांड प्रॉम्प्ट में यह कमांड टाइप करें और Enter दबाएं:\nnetsh wlan show profiles\nयह आपके कंप्यूटर से पूर्व में कनेक्टेड सभी वाई-फाई नेटवर्क के नाम (SSID) दिखाएगा।',
      'स्टेप 3: अब जिस नेटवर्क का पासवर्ड जानना है, उसके लिए यह कमांड टाइप करें:\nnetsh wlan show profile name="YOUR_WIFI_NAME" key=clear',
      'स्टेप 4: सामने प्रदर्शित विवरण में "Security settings" के अंतर्गत "Key Content" के सामने लिखा हुआ टेक्स्ट ही आपका वाई-फाई पासवर्ड है!',
      'नोट: यह विधि केवल आपके अपने लैपटॉप/कंप्यूटर की नेटवर्क सेटिंग्स की जांच के लिए है।'
    ]
  },
  {
    id: 'history-of-computer',
    category: 'it-gyan',
    categoryLabel: 'IT ज्ञान',
    title: 'History of Computer: From Abacus to AI',
    titleHindi: 'कंप्यूटर का इतिहास (History of Computer)',
    image: '/images/news_history.jpg',
    readTime: '4 min read',
    date: 'Updated Aug 2024',
    author: 'C-NET History Desk',
    summary: 'अबेकस और चार्ल्स बैबेज के एनालिटिकल इंजन से लेकर पहली पीढ़ी के वैक्यूम ट्यूब्स और आज के आर्टिफिशियल इंटेलिजेंस तक कंप्यूटर का विकास।',
    tags: ['History', 'Charles Babbage', 'Generations', 'ENIAC'],
    content: [
      'कंप्यूटर का इतिहास लगभग 4000 वर्ष पूर्व प्राचीन अबेकस (Abacus) से प्रारंभ हुआ था, जिसका उपयोग केवल जोड़ और घटाव के लिए किया जाता था।',
      '1833 में ब्रिटिश गणितज्ञ चार्ल्स बैबेज ने "एनालिटिकल इंजन" की रूपरेखा बनाई, जिसमें इनपुट, मेमोरी, प्रोसेसर और आउटपुट का आधुनिक ढांचा था। इसलिए उन्हें "कंप्यूटर का जनक" (Father of Computer) कहा जाता है।',
      'कंप्यूटर की 5 पीढ़ियां:\n• प्रथम पीढ़ी (1940-1956): वैक्यूम ट्यूब्स (ENIAC, UNIVAC)\n• द्वितीय पीढ़ी (1956-1963): ट्रांजिस्टर\n• तृतीय पीढ़ी (1964-1971): इंटीग्रेटेड सर्किट (IC)\n• चतुर्थ पीढ़ी (1971-वर्तमान): माइक्रोप्रोसेसर और VLSI (Personal Computers)\n• पंचम पीढ़ी (वर्तमान-भविष्य): आर्टिफिशियल इंटेलिजेंस (AI) और क्वांटम कंप्यूटिंग।',
      'C-NET के छात्रों को कंप्यूटर फंडामेंटल्स में इन सभी ऐतिहासिक मील के पत्थरों का गहन अध्ययन कराया जाता है।'
    ]
  },
  {
    id: 'open-source-foss',
    category: 'software',
    categoryLabel: 'सॉफ्टवेयर जगत',
    title: 'What is FOSS & Open Source Software?',
    titleHindi: 'क्या होता है ओपन सोर्स सॉफ्टवेयर (FOSS)? उपयोग और लाभ',
    image: '/images/news_opensource.jpg',
    readTime: '4 min read',
    date: 'Updated Jul 2024',
    author: 'C-NET Research Group',
    summary: 'ओपन सोर्स सॉफ्टवेयर क्या है, यह प्रोप्रायटरी सॉफ्टवेयर से कैसे अलग है, और Linux, VLC, LibreOffice, Android जैसे प्रोजेक्ट्स कैसे काम करते हैं।',
    tags: ['Open Source', 'FOSS', 'Linux', 'LibreOffice'],
    content: [
      'FOSS का पूरा नाम "Free and Open Source Software" है। इसका अर्थ ऐसा सॉफ्टवेयर है जिसका सोर्स कोड (Source Code) सार्वजनिक रूप से सभी के लिए उपलब्ध होता है।',
      'प्रोप्रायटरी सॉफ्टवेयर (जैसे Microsoft Office या Windows) में यूजर केवल कंपाइल की गई बाइनरी चला सकता है, लेकिन कोड में संशोधन नहीं कर सकता और इसके लिए लाइसेंस शुल्क देना पड़ता है।',
      'ओपन सोर्स के प्रमुख उदाहरण: Linux ऑपरेटिंग सिस्टम, LibreOffice (Writer, Calc, Impress), Android OS, VLC Media Player, Python प्रोग्रामिंग भाषा, Mozilla Firefox, और Blender।',
      'ओपन सोर्स के मुख्य लाभ: मुफ्त उपयोग, उच्च सुरक्षा (लाखों डेवलपर्स द्वारा कोड की समीक्षा), पारदर्शिता, और छात्रों व डेवलपर्स के लिए सीखने का असीमित अवसर।',
      'C-NET लुधियाना के CCC और O Level कोर्स में LibreOffice और Linux आधारित ओपन सोर्स टूल्स पर विशेष प्रैक्टिकल क्लास दी जाती है।'
    ]
  },
  {
    id: 'facts-email',
    category: 'quiz-facts',
    categoryLabel: 'रोचक तथ्य',
    title: '10 Fascinating Facts About Email History',
    titleHindi: 'ईमेल के बारे 10 रोचक तथ्य और ऐतिहासिक जानकारी',
    image: '/images/news_email.jpg',
    readTime: '3 min read',
    date: 'Updated Jun 2024',
    author: 'IT World Team',
    summary: 'दुनिया का पहला ईमेल किसने भेजा? @ चिह्न का चुनाव कैसे हुआ? और हर दिन दुनिया में कितने अरब ईमेल भेजे जाते हैं?',
    tags: ['Email', 'ARPANET', 'Tech History', 'Internet'],
    content: [
      '1. दुनिया का पहला ईमेल वर्ष 1971 में रे टॉमलिंसन (Ray Tomlinson) ने ARPANET नेटवर्क के माध्यम से भेजा था।',
      '2. रे टॉमलिंसन ने ही यूजरनेम और कंप्यूटर होस्टनेम को अलग करने के लिए कीबोर्ड से "@" (At the rate) सिंबल का चयन किया था।',
      '3. पहले ईमेल का संदेश कुछ याद रखने योग्य शब्द नहीं बल्कि कीबोर्ड की शीर्ष पंक्ति के अक्षरों का समूह जैसे "QWERTYUIOP" था।',
      '4. भारतीय मूल के सबीर भाटिया (Sabeer Bhatia) ने 1996 में "Hotmail" की स्थापना की थी, जिसे बाद में Microsoft ने खरीद लिया।',
      '5. आज विश्व भर में प्रतिदिन 330 अरब से अधिक ईमेल भेजे जाते हैं, जिनमें से 50% से अधिक ईमेल स्वचालित या प्रमोशनल स्पैम होते हैं।'
    ]
  }
];
