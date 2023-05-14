export { get, set, has } from 'lodash';

// simple uuid
export function uuid() {
  return ((Math.random() * 1e6) >> 0).toString(36);
}

export function getTextReader(lang: string) {
  return (input: Text): string => {
    if (typeof input === 'string') {
      return input;
    }
    if (typeof input === 'object' && input.type === 'i18n') {
      return input[lang];
    }
    return '';
  };
}