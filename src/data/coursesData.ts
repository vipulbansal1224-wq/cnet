export interface Course {
  id: string;
  code: string;
  title: string;
  hindiTitle?: string;
  category: 'diploma' | 'certificate' | 'programming' | 'accounting';
  duration: string;
  level: string;
  eligibility: string;
  fees: string;
  badge?: string;
  description: string;
  highlights: string[];
  modules: string[];
  careerOpportunities: string[];
}

export const coursesData: Course[] = [
  {
    id: 'adca',
    code: 'ADCA',
    title: 'Advance Diploma in Computer Application',
    hindiTitle: 'एडवांस डिप्लोमा इन कंप्यूटर एप्लीकेशन',
    category: 'diploma',
    duration: '12 Months (1 Year)',
    level: 'Advanced Professional Diploma',
    eligibility: '10th / 12th Pass (Any Stream)',
    fees: 'Affordable / Easy Monthly Installments',
    badge: 'Most Popular',
    description: 'A comprehensive 1-year master diploma covering fundamental computing, advanced office automation, graphic designing, database management, web design basics, and financial accounting.',
    highlights: [
      'Govt. & Private Job Recognized Certification',
      'Hands-on Lab Training with real-world case studies',
      'Free CCC and Soft-Skills modules included',
      'Resume building and placement assistance'
    ],
    modules: [
      'Module 1: Computer Fundamentals, Windows 11 & OS Concepts',
      'Module 2: Advanced MS Office (Word, Excel, PowerPoint, Access)',
      'Module 3: Advanced Excel with Pivot Tables, VLOOKUP, XLOOKUP & Macros',
      'Module 4: Desktop Publishing (Photoshop, CorelDRAW, PageMaker)',
      'Module 5: Financial Accounting with Tally Prime & GST',
      'Module 6: HTML5, CSS3 & Internet Applications',
      'Module 7: Database Management with MS Access & SQL Basics',
      'Module 8: English & Hindi/Punjabi Typing + Final Live Project'
    ],
    careerOpportunities: [
      'Computer Operator / Executive',
      'Office Administrator',
      'Accounts & Billing Assistant',
      'Graphic Designer / DTP Operator',
      'Data Entry & MIS Specialist'
    ]
  },
  {
    id: 'dca',
    code: 'DCA',
    title: 'Diploma in Computer Application',
    hindiTitle: 'डिप्लोमा इन कंप्यूटर एप्लीकेशन',
    category: 'diploma',
    duration: '6 Months',
    level: 'Intermediate Diploma',
    eligibility: '10th Pass',
    fees: 'Pocket-Friendly',
    badge: 'High Demand',
    description: 'Designed for students and professionals looking for practical computer literacy, office automation, typing, and digital tools required across all modern offices and shops.',
    highlights: [
      'Fast-track 6-month intensive training',
      'Complete MS Office Mastery with Typing Speed Building',
      'Internet, Cyber Hygiene & Digital Payments',
      'Industry-standard certified credentials'
    ],
    modules: [
      'Computer Fundamentals & Hardware Overview',
      'Operating Systems: Windows & File Management',
      'Microsoft Office (Word, Excel, PowerPoint)',
      'Advanced Formulae in Excel & Data Filtering',
      'Internet, Emailing & Cloud Storage Operations',
      'Typing Speed Optimization (English & Punjabi/Hindi)',
      'Basic Tally Accounting Concepts'
    ],
    careerOpportunities: [
      'Front Desk Executive',
      'Computer Operator',
      'Data Entry Operator',
      'Administrative Assistant'
    ]
  },
  {
    id: 'ccc',
    code: 'CCC',
    title: 'Course on Computer Concepts (NIELIT Pattern)',
    hindiTitle: 'कोर्स ऑन कंप्यूटर कॉन्सेप्ट्स (CCC)',
    category: 'certificate',
    duration: '3 Months (80 Hours)',
    level: 'Govt. Essential Certificate',
    eligibility: 'No Minimum Qualification Required',
    fees: 'Nominal Fee',
    badge: 'Govt. Mandatory',
    description: 'The premier national standard course mandated for almost all central and state government competitive exams, clerical posts, and banking examinations.',
    highlights: [
      '100% aligned with NIELIT CCC latest syllabus',
      'Daily mock tests with bilingual question bank (Hindi + English)',
      'Focus on LibreOffice (Writer, Calc, Impress) & Digital Financial Tools',
      'Special exam clearing strategy sessions'
    ],
    modules: [
      'Introduction to Computer & Evolution',
      'Introduction to GUI-based Operating Systems',
      'Word Processing with LibreOffice Writer / MS Word',
      'Spreadsheets with LibreOffice Calc / MS Excel',
      'Presentations with LibreOffice Impress / MS PowerPoint',
      'Introduction to Internet, WWW & Web Browsers',
      'Communications and Collaboration (Email, Social Media)',
      'Digital Financial Services (UPI, AEPS, USSD, Cards, NetBanking)',
      'Cyber Security Essentials & IT Act Overview'
    ],
    careerOpportunities: [
      'Govt. Job Eligibility (Clerk, Patwari, VDO, Postal)',
      'Banking & CSC Digital Seva Operator',
      'Office Assistant'
    ]
  },
  {
    id: 'tally-prime',
    code: 'TALLY-GST',
    title: 'Tally Prime with GST & E-Way Bill',
    hindiTitle: 'टैली प्राइम विद जीएसटी एवं ई-वे बिल',
    category: 'accounting',
    duration: '3 Months',
    level: 'Professional Accounting',
    eligibility: '10th / 12th / Commerce / Non-Commerce',
    fees: 'Pocket-Friendly',
    badge: '100% Job Oriented',
    description: 'Master practical corporate bookkeeping, inventory management, GST compliance (CGST, SGST, IGST), e-Invoicing, TDS, and balance sheet preparation in Tally Prime.',
    highlights: [
      'Real company data sets and live bill voucher entries',
      'GST returns filing overview (GSTR-1, GSTR-3B)',
      'Payroll management & employee salary generation',
      'Direct interview prep for accounting jobs'
    ],
    modules: [
      'Principles of Accounting & Bookkeeping Basics',
      'Company Creation, Grouping & Ledger Management in Tally Prime',
      'Inventory, Stock Items, Units of Measure & Godown Tracking',
      'Voucher Entries: Purchase, Sales, Payment, Receipt, Journal',
      'GST Setup: HSN/SAC Codes, Tax Ledgers, Inter-State Sales',
      'E-Way Bill & E-Invoice Generation Procedures',
      'Bank Reconciliation Statement (BRS)',
      'TDS (Tax Deducted at Source) & Payroll Management',
      'Final Accounts: Profit & Loss Account, Balance Sheet, Trial Balance'
    ],
    careerOpportunities: [
      'Junior / Senior Accountant',
      'GST Billing Executive',
      'Inventory Manager',
      'Accounts Executive in CA / Tax Firms'
    ]
  },
  {
    id: 'dtp',
    code: 'DTP',
    title: 'Desk Top Publishing & Graphic Designing',
    hindiTitle: 'डेस्कटॉप पब्लिशिंग एवं ग्राफिक डिजाइनिंग',
    category: 'diploma',
    duration: '6 Months',
    level: 'Creative Professional',
    eligibility: '10th Pass',
    fees: 'Affordable',
    badge: 'Creative Careers',
    description: 'Learn visual communications, print media layout, logo design, banners, brochures, social media graphics, and photo editing using industry-standard tools.',
    highlights: [
      'Adobe Photoshop, CorelDRAW & Adobe PageMaker',
      'Color theory, typography, and prepress printing rules',
      'Designing flex banners, visiting cards, wedding cards & pamphlets',
      'Portfolio development for freelance and print houses'
    ],
    modules: [
      'CorelDRAW: Vector Art, Logo Design, Packaging & Flex Layouts',
      'Adobe Photoshop: Photo Retouching, Masking, Color Correction & Banners',
      'Adobe PageMaker: Magazine, Book Layouts & Punjabi/Hindi Typography',
      'Print Media Preparation, Resolution & Color Separation (CMYK vs RGB)',
      'Social Media Creative Designing & Digital Ad Formats',
      'Practical Projects & Client Simulation Work'
    ],
    careerOpportunities: [
      'Graphic Designer',
      'DTP Operator in Printing Press',
      'Advertising & Media Artist',
      'Freelance Digital Designer'
    ]
  },
  {
    id: 'adv-excel',
    code: 'EXCEL-MIS',
    title: 'Advanced Excel & MIS Data Reporting',
    hindiTitle: 'एडवांस्ड एक्सेल एवं एमआईएस रिपोर्टिंग',
    category: 'accounting',
    duration: '2 Months',
    level: 'Corporate Skill Booster',
    eligibility: 'Basic Computer Knowledge',
    fees: 'Special Discount',
    badge: 'Corporate Favorite',
    description: 'Transform raw data into actionable business dashboards. Master lookup formulas, data validation, automated reports, power queries, and executive presentation charts.',
    highlights: [
      'Master 50+ essential business formulas',
      'Dynamic interactive dashboard creation',
      'Automated data cleaning and pivot charts',
      'MIS reporting skills highly valued in MNCs'
    ],
    modules: [
      'Advanced Formulas: XLOOKUP, VLOOKUP, INDEX-MATCH, SUMIFS, COUNTIFS',
      'Data Cleansing, Text Functions (TRIM, CONCAT, TEXTSPLIT)',
      'Nested Logic Formulas (IF, IFS, AND, OR, SWITCH)',
      'Pivot Tables, Slicers, Timelines & Calculated Fields',
      'Data Validation, Conditional Formatting & What-If Analysis',
      'Interactive KPI Dashboards & Executive Charts',
      'Introduction to Macros & Data Automation'
    ],
    careerOpportunities: [
      'MIS Executive',
      'Data Analyst Associate',
      'Operations & Sales Reporting Analyst',
      'Billing & Inventory Controller'
    ]
  },
  {
    id: 'o-level',
    code: 'O-LEVEL',
    title: "'O' Level Diploma (NIELIT Approved Curriculum)",
    hindiTitle: "'ओ' लेवल कंप्यूटर डिप्लोमा",
    category: 'diploma',
    duration: '12 Months (1 Year)',
    level: 'Govt. Recognized Level 4 Diploma',
    eligibility: '10+2 (12th Pass) or ITI Certificate',
    fees: 'Affordable Installments',
    badge: 'Equivalent to DCA',
    description: 'NIELIT O Level is an officially recognized government foundation diploma in Information Technology, widely accepted for government vacancies and technical posts.',
    highlights: [
      'Covers 4 core modules as per revised syllabus (M1-R5 to M4-R5)',
      'Includes Python programming & Internet of Things (IoT)',
      'Practical project submission guidance',
      'Eligible for UPSC, SSC, State Police & Ministerial posts'
    ],
    modules: [
      'M1-R5: Information Technology Tools and Network Basics',
      'M2-R5: Web Designing & Publishing (HTML5, CSS3, JavaScript, W3.CSS)',
      'M3-R5: Programming and Problem Solving through Python',
      'M4-R5: Internet of Things (IoT) and its Applications',
      'Practical Examinations Preparation & Viva Voce Guidance',
      'Major Project Submission & Certification'
    ],
    careerOpportunities: [
      'Govt. Technical Assistant',
      'Junior Programmer / Web Designer',
      'Computer Teacher / Instructor',
      'IoT & Systems Operator'
    ]
  },
  {
    id: 'c-cpp',
    code: 'PROG-C',
    title: 'Programming in C & C++ (Object Oriented)',
    hindiTitle: 'सी एवं सी++ प्रोग्रामिंग',
    category: 'programming',
    duration: '3 Months',
    level: 'Foundation Coding',
    eligibility: '10th / 12th / BCA / B.Tech / Diploma Students',
    fees: 'Pocket-Friendly',
    badge: 'Coding Core',
    description: 'Build an rock-solid logic foundation for software development. Understand algorithms, memory pointers, data structures, and Object-Oriented Programming (OOPs).',
    highlights: [
      '100+ hands-on coding problems solved in class',
      'Crucial for college semester exams (BCA, B.Tech, MCA)',
      'OOPs concepts: Inheritance, Polymorphism, Encapsulation',
      'Data structures: Stacks, Queues, Linked Lists basics'
    ],
    modules: [
      'Introduction to Logic Building & Flowcharts',
      'Variables, Data Types, Operators & Control Statements',
      'Functions, Recursion & Storage Classes',
      'Arrays, Strings, Pointers & Memory Allocation',
      'Structures, Unions & File Handling in C',
      'C++ Object-Oriented Principles (Classes, Objects, Constructors)',
      'Operator Overloading, Inheritance & Virtual Functions',
      'Mini Console Application Project'
    ],
    careerOpportunities: [
      'Junior Software Developer',
      'Embedded / Systems Trainee',
      'Academic Excellence for Engineering & BCA'
    ]
  },
  {
    id: 'autocad',
    code: 'CAD-2D3D',
    title: 'Certificate in AutoCAD (2D Drafting & 3D Modeling)',
    hindiTitle: 'ऑटोकैड सर्टिफिकेट (2D एवं 3D)',
    category: 'certificate',
    duration: '3 Months',
    level: 'Engineering / Architectural Drafting',
    eligibility: '10th / ITI / Diploma / Civil / Mech Students',
    fees: 'Affordable',
    badge: 'Industry Essential',
    description: 'Learn architectural floor plans, engineering drawings, elevation, sectional views, and 3D modeling using Autodesk AutoCAD software.',
    highlights: [
      'Practical architectural & mechanical sample blueprints',
      'Dimensioning, layers, blocks, and plot configurations',
      '3D solid modeling and rendering basics',
      'Preparation for interior design & construction firm roles'
    ],
    modules: [
      'AutoCAD Interface, Coordinates & Grid Units',
      'Drawing Tools: Line, Arc, Circle, Polyline, Spline',
      'Modify Tools: Offset, Trim, Extend, Mirror, Array, Fillet',
      'Layers Management, Text Styles & Dimensioning Rules',
      'Blocks, Attributes & External References (Xref)',
      'Floor Plan Drafting & Sectional Elevation Views',
      'Isometric Drawings & 3D Solids Basics',
      'Plotting, Layout Printing to Scale (PDF/DWG)'
    ],
    careerOpportunities: [
      'AutoCAD Draftsman (Civil / Architecture / Mechanical)',
      'Interior Design Assistant',
      'Site Layout Planner'
    ]
  },
  {
    id: 'bcc-deo',
    code: 'BCC-DEO',
    title: 'BCC (Basic Computer Course) & Data Entry Operator',
    hindiTitle: 'बेसिक कंप्यूटर कोर्स एवं डाटा एंट्री ऑपरेटर',
    category: 'certificate',
    duration: '2 Months',
    level: 'Beginner Friendly',
    eligibility: 'Anyone interested in learning computers',
    fees: 'Ultra Affordable',
    badge: 'Quick Certification',
    description: 'Specially created for beginners, housewives, rural youth, and shop owners to overcome computer fear and gain confidence in typing, internet, and office work.',
    highlights: [
      'Zero prior computer experience required',
      'Bilingual friendly teaching (Hindi & Punjabi)',
      'Special focus on typing speed (English + Punjabi Raavi/Asees)',
      'Hands-on everyday tasks: billing, printing, browsing, online forms'
    ],
    modules: [
      'Computer Parts: CPU, Monitor, Keyboard, Mouse & Printers',
      'Windows Basics: Files, Folders, Copy, Paste, Pen Drives',
      'MS Word: Typing letters, biodata/resume, tables & formatting',
      'MS Excel: Basic calculations, lists, attendance & bills',
      'Internet: Web browsing, searching, ticket booking, bills payment',
      'Typing Tutor practice (English & Punjabi/Hindi)',
      'Safe online banking and UPI payment training'
    ],
    careerOpportunities: [
      'Data Entry Operator',
      'Shop / Retail Billing Operator',
      'Cyber Cafe / CSC Center Assistant',
      'Personal & Home Office Work'
    ]
  }
];
