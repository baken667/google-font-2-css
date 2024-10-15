function ExtractNamesFromUrl(url: string): string {
    const fontRegex = /family=([^:&]*)/g;
    const fonts: { name: string }[] = [];
    let match: RegExpExecArray | null;

    while ((match = fontRegex.exec(url)) !== null) {
        const fontName = match[1].replace(/\+/g, '_');
        fonts.push({ name: fontName });
    }

    let fileName = '';

    fonts.forEach((font, i) => {
        if (i === 0) {
            fileName = font.name;
        } else {
            fileName += `-${font.name}`;
        }
    });

    return fileName + '.css';
}

export default ExtractNamesFromUrl