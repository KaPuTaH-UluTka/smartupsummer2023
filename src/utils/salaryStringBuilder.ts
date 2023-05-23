export const salaryStringBuilder = (paymentFrom: number, paymentTo: number, currency: string) => {
  if (paymentFrom === 0 && paymentTo === 0) {
    return 'з/п не указана';
  } else if (paymentTo === 0 || paymentFrom === 0) {
    return `з/п ${paymentFrom || paymentTo} ${currency}`;
  }

  return `з/п ${paymentFrom} - ${paymentTo} ${currency}`;
};
