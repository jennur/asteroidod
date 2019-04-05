export default function formatNumber(number) {
  var formattedNumber = new Intl.NumberFormat().format(number);
  return formattedNumber;
}
