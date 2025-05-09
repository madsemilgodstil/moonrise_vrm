import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateQuotePDF } from '@/components/pdf/QuotePDF';

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Modtaget data:', data);
    
    const pdfBase64 = generateQuotePDF(data);
    console.log('PDF genereret');
    
    // Fjern data:application/pdf;base64, fra starten
    const pdfData = pdfBase64.split(',')[1];

    // Opret email transporter med Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rasmusolsen071197@gmail.com",
        pass: "niwq qpzl gmtl iosm"
      }
    });

    console.log('Forsøger at sende email til:', data.email);

    // Send email
    await transporter.sendMail({
      from: '"Moonrise Droner" <rasmusolsen071197@gmail.com>',
      to: data.email,
      subject: 'Dit tilbud fra Moonrise Droner',
      text: `
        Kære ${data.name},
        
        Tak for din interesse i Moonrise Droner. Vedhæftet finder du dit personlige tilbud.
        
        Tilbudsoversigt:
        - Samlet pris: ${new Intl.NumberFormat("da-DK").format(data.price)} kr.
        - Antal droner: ${data.droneCount}
        
        Vi vil kontakte dig hurtigst muligt for at diskutere de nærmere detaljer.
        
        Med venlig hilsen
        Moonrise Droner
      `,
      attachments: [
        {
          filename: `Moonrise_Tilbud_${data.name.replace(/\s+/g, '_')}.pdf`,
          content: pdfData,
          encoding: 'base64'
        }
      ]
    });

    console.log('Email sendt!');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detaljeret fejl:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error.message
    }, { status: 500 });
  }
}
