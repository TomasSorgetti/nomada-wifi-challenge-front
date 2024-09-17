/**
 * Funcion para cortar el texto segun el maximo de caracteres
 * @param text
 * @param maxLength
 * @returns
 */
export function cutText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  }
  return text;
}
