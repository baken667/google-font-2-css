export async function fetchCss(url: string) {
    const response = await fetch(url)
    return await response.text()
}