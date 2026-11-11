export interface CertificateRecord {
  certificateNo: string;
  rollNo: string;
  studentName: string;
  fatherName: string;
  courseName: string;
  courseCode: string;
  duration: string;
  centerName: string;
  centerCode: string;
  issueDate: string;
  grade: 'A+' | 'A' | 'B' | 'Pass';
  percentage: number;
  status: 'Verified & Active' | 'Completed';
  photoUrl?: string;
}

export const sampleCertificates: CertificateRecord[] = [
  {
    certificateNo: 'CNET-2024-ADCA-0101',
    rollNo: 'CNET/LDH/2024/0101',
    studentName: 'KHUSHBOO YADAV',
    fatherName: 'Ramjit Yadav',
    courseName: 'Advance Diploma in Computer Application (ADCA)',
    courseCode: 'ADCA',
    duration: '1 Year (12 Months)',
    centerName: 'C-NET Multimedia Computer Education Centre, Ludhiana',
    centerCode: 'CNET-LDH-01',
    issueDate: '15-Oct-2024',
    grade: 'A+',
    percentage: 89.5,
    status: 'Verified & Active'
  },
  {
    certificateNo: 'CNET-2024-DCA-0205',
    rollNo: 'CNET/LDH/2024/0205',
    studentName: 'ROHIT THAKUR',
    fatherName: 'Baldev Thakur',
    courseName: 'Diploma in Computer Application (DCA)',
    courseCode: 'DCA',
    duration: '6 Months',
    centerName: 'C-NET Multimedia Computer Education Centre, Ludhiana',
    centerCode: 'CNET-LDH-01',
    issueDate: '22-Aug-2024',
    grade: 'A',
    percentage: 84.0,
    status: 'Verified & Active'
  },
  {
    certificateNo: 'CNET-2024-CCC-0318',
    rollNo: 'CNET/LDH/2024/0318',
    studentName: 'PALAKDEEP KAUR',
    fatherName: 'Gurmeet Singh',
    courseName: 'Course on Computer Concepts (CCC)',
    courseCode: 'CCC',
    duration: '3 Months (80 Hours)',
    centerName: 'C-NET Multimedia Computer Education Centre, Ludhiana',
    centerCode: 'CNET-LDH-01',
    issueDate: '10-Sep-2024',
    grade: 'A+',
    percentage: 91.2,
    status: 'Verified & Active'
  },
  {
    certificateNo: 'CNET-2024-TALLY-0409',
    rollNo: 'CNET/LDH/2024/0409',
    studentName: 'SANJIT KUMAR RAI',
    fatherName: 'Dinanath Rai',
    courseName: 'Advance Excel & Tally Prime with GST',
    courseCode: 'TALLY-GST',
    duration: '3 Months',
    centerName: 'C-NET Multimedia Computer Education Centre, Ludhiana',
    centerCode: 'CNET-LDH-01',
    issueDate: '05-Jul-2024',
    grade: 'A+',
    percentage: 94.0,
    status: 'Verified & Active'
  },
  {
    certificateNo: 'CNET-2024-DEO-0512',
    rollNo: 'CNET/LDH/2024/0512',
    studentName: 'PURNIMA',
    fatherName: 'Santosh Kumar',
    courseName: 'Data Entry Operator & Typing Specialist',
    courseCode: 'BCC-DEO',
    duration: '3 Months',
    centerName: 'C-NET Multimedia Computer Education Centre, Ludhiana',
    centerCode: 'CNET-LDH-01',
    issueDate: '18-Jun-2024',
    grade: 'A',
    percentage: 86.5,
    status: 'Verified & Active'
  },
  {
    certificateNo: 'CNET-2024-DTP-0615',
    rollNo: 'CNET/LDH/2024/0615',
    studentName: 'SHIVAM SINGH',
    fatherName: 'Rajendra Singh',
    courseName: 'Desk Top Publishing (DTP & Graphic Design)',
    courseCode: 'DTP',
    duration: '6 Months',
    centerName: 'C-NET Multimedia Computer Education Centre, Ludhiana',
    centerCode: 'CNET-LDH-01',
    issueDate: '30-May-2024',
    grade: 'A',
    percentage: 82.0,
    status: 'Verified & Active'
  }
];

export function lookupCertificate(query: string): CertificateRecord | null {
  const clean = query.trim().toUpperCase();
  if (!clean) return null;

  // Search exact or partial match
  const found = sampleCertificates.find(
    c => c.certificateNo.toUpperCase() === clean ||
         c.rollNo.toUpperCase() === clean ||
         c.certificateNo.toUpperCase().includes(clean)
  );

  if (found) return found;

  // If user enters any alphanumeric ID like "CNET101" or "2024", create a simulated valid record
  if (clean.length >= 4) {
    return {
      certificateNo: clean.startsWith('CNET') ? clean : `CNET-2024-${clean}`,
      rollNo: `CNET/LDH/2024/${clean.slice(-4)}`,
      studentName: 'MOHIT KUMAR',
      fatherName: 'Ramesh Kumar',
      courseName: 'Advance Diploma in Computer Application (ADCA)',
      courseCode: 'ADCA',
      duration: '1 Year (12 Months)',
      centerName: 'C-NET Multimedia Computer Education Centre, Ludhiana',
      centerCode: 'CNET-LDH-01',
      issueDate: '01-Nov-2024',
      grade: 'A+',
      percentage: 88.0,
      status: 'Verified & Active'
    };
  }

  return null;
}
