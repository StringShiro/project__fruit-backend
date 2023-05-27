export function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
    ].join(":")
  );
}

export function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

// const date = new Date()
// const year = date.getFullYear();
// const month = date.getMonth(+1)
// const today =String(date.getDate()).padStart(2,'0')
// const datePattern = today + '-' + month + '-' + year
