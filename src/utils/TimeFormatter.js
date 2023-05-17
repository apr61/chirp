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

export function formatTimeAgo(seconds) {
  const date = new Date(seconds * 1000);
  let duration = (date - new Date()) / 1000;
  const timeAgo = -Math.round(duration / 86400);
  if (timeAgo >= 7) return dateFormatterDDMM(seconds);
  return timeWhenltweek(seconds);
}

function dateFormatterDDMM(seconds) {
  const formatter = Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
  });
  return formatter.format(new Date(seconds * 1000));
}

function timeWhenltweek(timestamp) {
  const now = new Date().getTime();
  const seconds = Math.floor((now - timestamp * 1000) / 1000);
  if (seconds < 60) {
    return seconds + "s";
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes + "m";
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours + "h";
  }
  const days = Math.floor(hours / 24);
  if (days < 30) {
    return days + "d";
  }
}
