import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useAsync from "../hooks/useAsync";
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
  const { status, data: events, run } = useAsync<CalendarEvent[]>();

  const selectedRoom = officeFloor
    .find((floor) => floor.selected)
    ?.meetingRooms.find((room) => room.selected);

  useEffect(() => {
    if (selectedRoom) {
      run(fetchCalendarList(selectedRoom.id));
    }
  }, [run, selectedRoom]);

  return (
    <MeetingSchedules loading={status === "PENDING"} events={events || []} />
  );
}
