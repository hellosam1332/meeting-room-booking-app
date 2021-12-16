import { parseISO, isEqual, isAfter } from "date-fns";
import { CalendarEvent } from "./types";

type SortingKey = "start" | "end";

export default function sortEvents({
  events,
  sortingKey = "start",
}: {
  events: Array<CalendarEvent>;
  sortingKey?: SortingKey;
}) {
  const compareFn = (eventA: CalendarEvent, eventB: CalendarEvent) => {
    const { dateTime: dateTimeA } = eventA[sortingKey];
    const { dateTime: dateTimeB } = eventB[sortingKey];
    const parseDateTimeA = parseISO(dateTimeA);
    const parseDateTimeB = parseISO(dateTimeB);
    if (isEqual(parseDateTimeA, parseDateTimeB)) return 0;
    return isAfter(parseDateTimeA, parseDateTimeB) ? 1 : -1;
  };
  return events.sort(compareFn);
}
