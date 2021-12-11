import React from "react";
import styled from "@emotion/styled";
import { MeetingRoom, OfficeFloor } from "../types";
import FloorPicker from "./FloorPicker";
import MeetingRoomPicker from "./MeetingRoomPicker";

const Container = styled.div`
  height: 15rem;
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
  background-color: #c49ecf;
`;

interface Props {
  officeFloors: OfficeFloor[];
  selectedMeetingRoom: MeetingRoom[];
}

export default function BookingPanel({
  officeFloors,
  selectedMeetingRoom,
}: Props) {
  return (
    <Container>
      <FloorPicker officeFloors={officeFloors} />
      <MeetingRoomPicker meetingRooms={selectedMeetingRoom} />
    </Container>
  );
}
