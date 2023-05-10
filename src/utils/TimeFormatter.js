export function formatFirebaseTime(seconds) {
  const formatter = Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  });
  return formatter.format(new Date(seconds * 1000));
}
