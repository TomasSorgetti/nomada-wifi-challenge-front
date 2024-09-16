export function formatPhone(phone: string | null): string {
  if (phone === null || phone === undefined || phone.length !== 10) {
    return "No tiene número";
  }

  const phoneStr = phone.toString();

  return phoneStr.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2-$3");
}
