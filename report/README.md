# Technical Report - How to Combine Files

This folder contains the technical report broken into individual markdown files for easy editing and combination.

## File Structure

1. **00_Cover_Page.md** - Cover page with project title, student info, and links
2. **01_Introduction.md** - Introduction section
3. **02_Software_Development_Methodology.md** - Development methodology
4. **03_Requirements.md** - Functional and non-functional requirements
5. **04_Design_and_Architecture.md** - System design and architecture
6. **05_Implementation.md** - Technology stack and implementation details
7. **06_Testing.md** - Testing methodology and results
8. **07_Conclusion.md** - Conclusion and future work
9. **08_References.md** - References in Harvard style
10. **09_Appendices.md** - Appendices with placeholders for screenshots

## How to Combine Files

### Method 1: Using Command Line (Linux/Mac)

```bash
cd report
cat 00_Cover_Page.md 01_Introduction.md 02_Software_Development_Methodology.md \
    03_Requirements.md 04_Design_and_Architecture.md 05_Implementation.md \
    06_Testing.md 07_Conclusion.md 08_References.md 09_Appendices.md > ../COMPLETE_REPORT.md
```

### Method 2: Using Text Editor

1. Open all files in your text editor
2. Copy content from each file in order (00, 01, 02, etc.)
3. Paste into a single document
4. Save as `COMPLETE_REPORT.md`

### Method 3: Using Pandoc (Recommended for Word Conversion)

```bash
cd report
pandoc 00_Cover_Page.md 01_Introduction.md 02_Software_Development_Methodology.md \
       03_Requirements.md 04_Design_and_Architecture.md 05_Implementation.md \
       06_Testing.md 07_Conclusion.md 08_References.md 09_Appendices.md \
       -o ../COMPLETE_REPORT.docx --reference-doc=template.docx
```

## Converting to Word Document

### Using Pandoc

1. Install Pandoc: https://pandoc.org/installing.html
2. Create a reference Word template with proper formatting (Times New Roman 11pt, margins 0.5")
3. Run:
```bash
pandoc COMPLETE_REPORT.md -o StudentName_Project.docx --reference-doc=template.docx
```

### Using Online Converters

1. Combine all markdown files into one
2. Use online converter: https://www.markdowntoword.com/
3. Or use: https://dillinger.io/ (export as Word)

### Manual Method

1. Combine all markdown files
2. Open in Microsoft Word
3. Use "Insert" → "Object" → "Text from File" to import
4. Format according to template requirements

## Formatting Requirements

- **Font**: Times New Roman
- **Size**: 11pt (main content), 12pt (section headings)
- **Margins**: 0.5" on all sides
- **Page Limit**: 5 pages (main body, excluding references and appendices)
- **File Name**: `StudentName_Project.docx`

## Adding Screenshots

1. Take screenshots of your application
2. Insert them in the appropriate sections in `09_Appendices.md`
3. Use format: `![Description](path/to/image.png)`
4. Or insert directly in Word document after conversion

## Notes

- All placeholders marked with `*[Insert...]*` need to be filled
- Add your name and student ID in `00_Cover_Page.md`
- Add your video link in `00_Cover_Page.md` and `09_Appendices.md`
- Review all sections for accuracy before submission
- Ensure all references are properly cited

## Quick Start

1. Edit `00_Cover_Page.md` with your details
2. Add screenshots to `09_Appendices.md`
3. Combine all files using one of the methods above
4. Convert to Word format
5. Review and submit

Good luck with your submission! 🎓

