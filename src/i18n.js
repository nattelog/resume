import content from '../content.json';

export function getData(selector) {
  const { lang } = content;
  const data = content.data[selector];
  return data[lang] === undefined ? data : data[lang];
}

export function getHeader(selector) {
  const { lang } = content;
  const data = content.headers[selector];
  return data[lang] === undefined ? data : data[lang];
}
