const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, 'resume.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Generate PDF with professional margins
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    margin: {
      top: '1.5cm',
      right: '2cm',
      bottom: '1.5cm', 
      left: '2cm'
    },
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: false
  });
  
  await browser.close();
  console.log('✅ PDF generated successfully: resume.pdf');
}

generatePDF().catch(console.error);
