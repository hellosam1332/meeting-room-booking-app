import React from "react";
import { MeetingRoom, OfficeFloor } from "../types";
import FloorPicker from "./FloorPicker";
import MeetingRoomPicker from "./MeetingRoomPicker";

interface Props {
  officeFloors: OfficeFloor[];
  selectedMeetingRoom: MeetingRoom[];
}

export default function BookingPanel({
  officeFloors,
  selectedMeetingRoom,
}: Props) {
  return (
    <>
      <FloorPicker officeFloors={officeFloors} />
      <MeetingRoomPicker meetingRooms={selectedMeetingRoom} />
    </>
  );
}
