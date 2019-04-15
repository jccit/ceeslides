import marked from 'marked';

export default async function(path) {
    const file = await fetch(path);
    const text = await file.text();

    return marked(text);
}