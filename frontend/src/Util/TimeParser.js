export const timeToString = (time) => {
  const [date, rest] = time?.split("T") ?? ["", ""];
  const [clock, _rest] = rest?.split(".") ?? [""];
  return [date, clock].join(" ");
};
