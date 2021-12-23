import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { MeetingRoom } from "../types";
import { selectMeetingRoom } from "../slice";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2vw;
  min-height: 2em;
`;

const Room = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  max-width: 20rem;
  height: 2rem;
  border: 1px solid #333;
  border-radius: 20px;
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
  background-color: ${({ selected }) => (selected ? "#66FBD2" : "#F1EDFF")};
  transition-property: background-color;
  transition-duration: 0.3s;
`;

interface Props {
  meetingRooms: MeetingRoom[];
}

export default function MeetingRoomPicker({ meetingRooms }: Props) {
  const dispatch = useDispatch();

  const handleSelectRoom = (room: MeetingRoom) => () =>
    dispatch(selectMeetingRoom(room));

  return (
    <Container>
      {meetingRooms.map((room) => (
        <Room
          key={room.id}
          selected={room.selected}
          onClick={handleSelectRoom(room)}
        >
          {room.name}
        </Room>
      ))}
    </Container>
  );
}
