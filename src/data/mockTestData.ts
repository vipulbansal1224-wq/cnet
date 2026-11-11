export interface MockQuestion {
  id: number;
  questionHindi: string;
  questionEnglish: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationHindi: string;
  explanationEnglish: string;
  topic: string;
}

export const cccMockQuestions: MockQuestion[] = [
  {
    id: 1,
    questionHindi: 'LibreOffice Calc में किसी सेल की डिफ़ॉल्ट चौड़ाई कितनी होती है?',
    questionEnglish: 'What is the default column width in LibreOffice Calc?',
    options: {
      A: '0.89 इंच (2.26 cm)',
      B: '0.50 इंच (1.27 cm)',
      C: '1.00 इंच (2.54 cm)',
      D: '1.25 इंच (3.17 cm)'
    },
    correctAnswer: 'A',
    explanationHindi: 'LibreOffice Calc में कॉलम की डिफ़ॉल्ट चौड़ाई 0.89 इंच या लगभग 2.26 सेमी होती है।',
    explanationEnglish: 'The default column width in LibreOffice Calc is 0.89 inches (approx. 2.26 cm).',
    topic: 'LibreOffice Calc'
  },
  {
    id: 2,
    questionHindi: 'निम्नलिखित में से कौन सा एक ओपन-सोर्स ऑपरेटिंग सिस्टम है?',
    questionEnglish: 'Which of the following is an open-source operating system?',
    options: {
      A: 'Microsoft Windows 11',
      B: 'Linux (Ubuntu/Fedora)',
      C: 'macOS Sonoma',
      D: 'iOS'
    },
    correctAnswer: 'B',
    explanationHindi: 'Linux एक लोकप्रिय फ्री और ओपन सोर्स ऑपरेटिंग सिस्टम (FOSS) है।',
    explanationEnglish: 'Linux is a renowned free and open-source operating system (FOSS).',
    topic: 'Operating System'
  },
  {
    id: 3,
    questionHindi: 'UPI (Unified Payments Interface) किसके द्वारा विकसित किया गया है?',
    questionEnglish: 'UPI (Unified Payments Interface) was developed by which organization?',
    options: {
      A: 'RBI (Reserve Bank of India)',
      B: 'NPCI (National Payments Corporation of India)',
      C: 'SEBI',
      D: 'NITI Aayog'
    },
    correctAnswer: 'B',
    explanationHindi: 'NPCI (National Payments Corporation of India) ने वर्ष 2016 में UPI सिस्टम लॉन्च किया था।',
    explanationEnglish: 'NPCI developed and launched the UPI real-time payment system in 2016.',
    topic: 'Digital Financial Tools'
  },
  {
    id: 4,
    questionHindi: 'LibreOffice Writer में प्रिंट प्रिव्यू देखने के लिए किस शॉर्टकट कुंजी का उपयोग किया जाता है?',
    questionEnglish: 'Which shortcut key is used for Print Preview in LibreOffice Writer?',
    options: {
      A: 'Ctrl + P',
      B: 'Ctrl + Shift + O',
      C: 'Ctrl + F2',
      D: 'Alt + P'
    },
    correctAnswer: 'B',
    explanationHindi: 'LibreOffice Writer में प्रिंट प्रिव्यू के लिए "Ctrl + Shift + O" शॉर्टकट होता है, जबकि साधारण प्रिंट के लिए "Ctrl + P" होता है।',
    explanationEnglish: 'In LibreOffice Writer, "Ctrl + Shift + O" toggles Print Preview, while "Ctrl + P" initiates print.',
    topic: 'LibreOffice Writer'
  },
  {
    id: 5,
    questionHindi: 'IPv4 पते (IP Address) का आकार कितने बिट्स का होता है?',
    questionEnglish: 'What is the size of an IPv4 address in bits?',
    options: {
      A: '16 Bits',
      B: '32 Bits (4 Bytes)',
      C: '64 Bits',
      D: '128 Bits'
    },
    correctAnswer: 'B',
    explanationHindi: 'IPv4 का आकार 32 बिट्स होता है जिसे 4 ऑक्टेट्स में दर्शाया जाता है। IPv6 128 बिट्स का होता है।',
    explanationEnglish: 'IPv4 uses 32-bit addresses divided into 4 octets. IPv6 uses 128 bits.',
    topic: 'Networking & Internet'
  },
  {
    id: 6,
    questionHindi: 'ईमेल में "BCC" का पूर्ण रूप क्या होता है?',
    questionEnglish: 'What is the full form of "BCC" in an email?',
    options: {
      A: 'Basic Carbon Copy',
      B: 'Blind Carbon Copy',
      C: 'Business Contact Copy',
      D: 'Backup Confidential Copy'
    },
    correctAnswer: 'B',
    explanationHindi: 'BCC का मतलब Blind Carbon Copy होता है, जिससे ईमेल प्राप्तकर्ता एक-दूसरे के ईमेल पते नहीं देख पाते।',
    explanationEnglish: 'BCC stands for Blind Carbon Copy, which keeps recipients hidden from each other.',
    topic: 'Email & Communication'
  },
  {
    id: 7,
    questionHindi: 'कंप्यूटर की मुख्य मेमोरी (Primary Memory) कौन सी होती है?',
    questionEnglish: 'Which of the following is the main / primary memory of a computer?',
    options: {
      A: 'Hard Disk Drive (HDD)',
      B: 'RAM (Random Access Memory)',
      C: 'Optical DVD-ROM',
      D: 'Pen Drive / USB'
    },
    correctAnswer: 'B',
    explanationHindi: 'RAM और ROM कंप्यूटर की प्राइमरी मेमोरी होती हैं, जो सीधे CPU के साथ काम करती हैं।',
    explanationEnglish: 'RAM and ROM constitute primary memory directly accessible by the CPU.',
    topic: 'Hardware Basics'
  },
  {
    id: 8,
    questionHindi: 'QR कोड में "QR" का क्या अर्थ है?',
    questionEnglish: 'What does "QR" stand for in QR Code?',
    options: {
      A: 'Quick Response',
      B: 'Quick Read',
      C: 'Quality Register',
      D: 'Quantum Receiver'
    },
    correctAnswer: 'A',
    explanationHindi: 'QR कोड का पूरा नाम Quick Response Code होता है, जिसे जापानी कंपनी Denso Wave ने बनाया था।',
    explanationEnglish: 'QR stands for Quick Response, originally invented by Denso Wave.',
    topic: 'Digital Technologies'
  },
  {
    id: 9,
    questionHindi: 'LibreOffice Impress में नई स्लाइड जोड़ने के लिए शॉर्टकट कुंजी क्या है?',
    questionEnglish: 'What is the shortcut key to insert a new slide in LibreOffice Impress?',
    options: {
      A: 'Ctrl + N',
      B: 'Ctrl + M',
      C: 'Ctrl + Shift + N',
      D: 'Alt + S'
    },
    correctAnswer: 'B',
    explanationHindi: 'नई स्लाइड जोड़ने के लिए "Ctrl + M" का इस्तेमाल किया जाता है, जबकि नई प्रस्तुति (Presentation) फाइल के लिए "Ctrl + N" होता है।',
    explanationEnglish: '"Ctrl + M" inserts a new slide, whereas "Ctrl + N" creates a new presentation file.',
    topic: 'LibreOffice Impress'
  },
  {
    id: 10,
    questionHindi: 'भारत में साइबर सुरक्षा और IT नियमों को लागू करने वाला प्रमुख अधिनियम कौन सा है?',
    questionEnglish: 'Which is the primary Act governing cyber law and IT security in India?',
    options: {
      A: 'Indian Penal Code 1860',
      B: 'Information Technology (IT) Act, 2000',
      C: 'Digital India Act 1995',
      D: 'Consumer Protection Act'
    },
    correctAnswer: 'B',
    explanationHindi: 'भारत में सूचना प्रौद्योगिकी अधिनियम (IT Act) वर्ष 2000 में संसद द्वारा पारित किया गया था।',
    explanationEnglish: 'The Information Technology (IT) Act, 2000 is India\'s foundational cyber legislation.',
    topic: 'Cyber Security & Ethics'
  }
];
