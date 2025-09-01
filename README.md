# Egor Lyfar - Resume

This is my professional resume built using [JSON Resume](https://jsonresume.org/).

## Features

- Built with JSON Resume framework
- **Dual theme approach**: Styled web version + clean PDF document version
- Custom MM/DD/YYYY date format support
- Responsive web design with professional styling
- Clean, minimal PDF output optimized for printing
- Easy to maintain and update

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Install JSON Resume CLI globally:
   ```bash
   npm install -g resume-cli
   ```

2. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/egor-lyfar-resume.git
   cd egor-lyfar-resume
   ```

### Usage

#### View Resume Online
```bash
resume serve --theme ./themes/onepage-plus-custom
```
The resume will be available at `http://localhost:4000`

#### Export Resume
```bash
# Export as HTML (styled web version)
resume export resume.html --theme ./themes/onepage-plus-custom

# Export as PDF (proper generation with consistent margins)
resume export resume.html --theme ./themes/onepage-plus-pdf
node generate-pdf.js
```

#### Edit Resume
Edit the `resume.json` file to update your information. The JSON Resume schema is well-documented and easy to follow.

## Deployment

This resume is automatically deployed to GitHub Pages using GitHub Actions. When you push changes to the `master` branch, the workflow will:

1. Install dependencies
2. Export the resume as `index.html` using the onepage-plus theme
3. Deploy to GitHub Pages

The resume will be available at: `https://lyfar.github.io/egor-lyfar-resume/`

## Structure

- `resume.json` - Main resume data in JSON format
- `index.html` - Main resume page (served by GitHub Pages)
- `resume.html` - Exported HTML version of the resume
- `resume.pdf` - Exported PDF version of the resume
- `README.md` - This file

## License

This project is open source and available under the [MIT License](LICENSE).
