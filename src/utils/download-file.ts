function DownloadFile(filename: string, content: string) {
    const element = document.createElement('a');
    const blob = new Blob([content], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    element.href = url;
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(url);
    return true;
}

export default DownloadFile