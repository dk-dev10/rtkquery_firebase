export function readingTime(text) {
  const wpm = 200; // average adult reading speed (words per minute) // количество слов в минуте
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
