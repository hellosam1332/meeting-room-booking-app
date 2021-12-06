import styled from "@emotion/styled";
import { CalendarEvent } from "../types";
import EventCard from "./EventCard";

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  loading: boolean;
  events: CalendarEvent[];
}

export default function MeetingSchedules({ loading, events }: Props) {
  return (
    <Container>
      {loading && <h2>Loading ...</h2>}
      {events.length === 0 && <h2>Empty</h2>}
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Container>
  );
}
