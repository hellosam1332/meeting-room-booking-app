import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { MeetingRoom } from "../types";
import { selectMeetingRoom } from "../slice";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2vw;
`;

const Room = styled.div<{ selected: boolean }>`
  width: 30vw;
  max-width: 20rem;
  height: 2rem;
  border-radius: 20px;
  border: 1px solid;
  background-color: ${({ selected }) =>
    selected ? "lightgreen" : "lightgray"};
  display: flex;
  justify-content: center;
  align-items: center;
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
