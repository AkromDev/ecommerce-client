export function convertUnixToLocalDate(unix: number) {
  const dateObject = new Date(unix);
  const humanDateFormat = dateObject.toLocaleTimeString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }); //2019-12-9 10:30:15
  return humanDateFormat;
}
