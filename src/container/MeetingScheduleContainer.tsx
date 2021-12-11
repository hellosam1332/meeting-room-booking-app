import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import MeetingSchedules from "../components/MeetingSchedules";
import { AppState } from "../slice";
import { CalendarEvent, GoogleApiResponse } from "../types";

const fetchCalendarList = async (
  calendarId: string
): Promise<CalendarEvent[]> => {
  const res = await axios.get<GoogleApiResponse<CalendarEvent>>(
    `/api/calendar/events/${calendarId}`
  );

  return res.data.items;
};

export default function MeetingScheduleContainer() {
  const { officeFloor } = useSelector((state) => state as AppState);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const selectedRoom = officeFloor
    .find((floor) => floor.selected)
    ?.meetingRooms.find((room) => room.selected);

  useEffect(() => {
    if (selectedRoom) {
      setLoading(true);
      fetchCalendarList(selectedRoom.id)
        .then((items) => setEvents(items))
        .catch(console.warn)
        .finally(() => setLoading(false));
    }
  }, [selectedRoom]);

  return <MeetingSchedules loading={loading} events={events} />;
}
