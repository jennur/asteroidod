export default function formatNumber(number) {
  let formattedNumber = new Intl.NumberFormat().format(number);
  return formattedNumber;
}
