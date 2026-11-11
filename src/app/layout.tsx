import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA | NDLM India',
  description: 'Official portal of C-NET Multimedia Computer Education Centre, Ludhiana. Offering ADCA, DCA, CCC, Tally Prime with GST, O Level, Online Mock Tests, and Certificate Verification.',
  keywords: [
    'C-NET Ludhiana',
    'Computer Education Ludhiana',
    'Mundian Kalan Computer Centre',
    'National Digital Literacy Mission',
    'ADCA',
    'DCA',
    'CCC Online Test',
    'Certificate Verification',
    'Tally Prime GST',
    'Chandan Kumar'
  ],
  authors: [{ name: 'C-NET Multimedia' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
