var aryIannaTimeZones = ['Europe/Brussels','Atlantic/Reykjavik','America/Anchorage','Europe/Moscow'];

let date = new Date;
aryIannaTimeZones.forEach((timeZone) =>
{
  let strTime = date.toLocaleString("en-US", {timeZone: `${timeZone}`});
  console.log(timeZone, strTime);
});
console.log();