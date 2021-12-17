import { parseISO, isEqual, isAfter } from "date-fns";
import { CalendarEvent } from "./types";

const SortingIndex = {
  ASCENDING: 1,
  DESCENDING: -1,
} as const;

type SortingKey = "start" | "end";

type SortingOrder = keyof typeof SortingIndex;

interface Params {
  events: Array<CalendarEvent>;
  sortingKey?: SortingKey;
  sortingOrder?: SortingOrder;
}

export default function sortEvents({
  events,
  sortingKey = "start",
  sortingOrder = "ASCENDING",
}: Params): CalendarEvent[] {
  const compareFn = (eventA: CalendarEvent, eventB: CalendarEvent) => {
    const { dateTime: dateTimeA } = eventA[sortingKey];
    const { dateTime: dateTimeB } = eventB[sortingKey];
    const parseDateTimeA = parseISO(dateTimeA);
    const parseDateTimeB = parseISO(dateTimeB);

    if (isEqual(parseDateTimeA, parseDateTimeB)) return 0;

    return isAfter(parseDateTimeA, parseDateTimeB)
      ? SortingIndex[sortingOrder]
      : -1 * SortingIndex[sortingOrder];
  };

  return events.sort(compareFn);
}
