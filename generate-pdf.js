const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, 'resume.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Generate PDF with proper margins
  await page.pdf({
    path: 'resume-proper.pdf',
    format: 'A4',
    margin: {
      top: '2cm',
      right: '2.5cm',
      bottom: '2cm', 
      left: '2.5cm'
    },
    printBackground: true,
    displayHeaderFooter: false
  });
  
  await browser.close();
  console.log('✅ PDF generated successfully: resume-proper.pdf');
}

generatePDF().catch(console.error);
