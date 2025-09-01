# Egor Lyfar - Resume

This is my professional resume built using [JSON Resume](https://jsonresume.org/).

## Features

- Built with JSON Resume framework
- Responsive design
- Multiple export formats (HTML, PDF, Markdown, Text)
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
resume serve
```
The resume will be available at `http://localhost:4000`

#### Export Resume
```bash
# Export as HTML
resume export resume.html

# Export as PDF
resume export resume.pdf

# Export as Markdown
resume export resume.md

# Export as Text
resume export resume.txt
```

#### Edit Resume
Edit the `resume.json` file to update your information. The JSON Resume schema is well-documented and easy to follow.

## Structure

- `resume.json` - Main resume data in JSON format
- `resume.html` - Exported HTML version of the resume
- `resume.pdf` - Exported PDF version of the resume
- `README.md` - This file

## License

This project is open source and available under the [MIT License](LICENSE).
