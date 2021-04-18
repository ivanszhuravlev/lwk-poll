export const toUpperCase = (string: string) => {
  const chars = string.split('');

  const charCodes = chars.map(letter => {
    const shift = /[a-z]/.test(letter) ? 32 : 0;
    return letter.charCodeAt(0) - shift;
  });

  return String.fromCharCode(...charCodes);
};
