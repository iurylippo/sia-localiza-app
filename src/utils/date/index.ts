import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/pt-br';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

export { dayjs };

export function formatDate(date: string | Date): string {
  if (!date) return '';

  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  return formattedDate;
}

export function formatDateHour(date: string | Date): string {
  if (!date) return '';

  const formattedDate = dayjs(date).format('HH:mm');
  return formattedDate;
}

export function formatDateDay(date: string | Date): string {
  if (!date) return '';

  const formattedDate = dayjs(date)
    .utc()
    .local()
    .tz('America/Recife')
    .locale('pt-br')
    .format('dddd, D');
  return formattedDate;
}

export function convert12to24(hour12: string, amPm: string) {
  let hour24 = parseInt(hour12, 10);

  if (amPm === 'am' && hour24 === 12) {
    hour24 = 0;
  } else if (amPm === 'pm' && hour24 < 12) {
    hour24 += 12;
  }

  return hour24;
}

export function compareHourIsGtHour(hourCompare: string, hour: string) {
  const hourCompareDate = dayjs(dayjs().format(`YYYY-MM-DD ${hourCompare}`));
  const hourDate = dayjs(dayjs().format(`YYYY-MM-DD ${hour}`));
  return hourCompareDate.isAfter(hourDate);
}

export function getAmPmFromHour(hour: string) {
  const hourDate = dayjs(dayjs().format(`YYYY-MM-DD ${hour}`));
  return hourDate.format('A');
}

export function convert24to12(hour24: string) {
  const hour = Number(hour24);
  const hour12 = hour % 12 || 12;

  return [hour12, hour < 12 ? 'am' : 'pm'];
}
