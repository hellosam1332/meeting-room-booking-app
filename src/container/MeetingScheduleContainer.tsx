import { useEffect, useState } from "react";
import axios from "axios";
import MeetingSchedules from "../components/MeetingSchedules";
import { CalendarEvent, GoogleApiResponse } from "../types";

const fetchCalendarList = async (
  calendarId: string
): Promise<CalendarEvent[]> => {
  const res = await axios.get<GoogleApiResponse<CalendarEvent>>(
    `/api/calendar/events/${calendarId}`
  );

  return res.data.items;
};

interface Props {
  calendarId: string;
}

export default function MeetingScheduleContainer({ calendarId }: Props) {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchCalendarList(calendarId)
      .then((items) => setEvents(items))
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [calendarId]);

  return loading ? (
    <h2>loading ...</h2>
  ) : (
    <MeetingSchedules schedules={events} />
  );
}
