import styled from "@emotion/styled";
import { CalendarEvent } from "../types";
import EventCard from "./EventCard";

const Container = styled.div`
  min-height: 20em;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h2`
  display: inline-block;
  margin-top: 5em;
`;

interface Props {
  loading: boolean;
  events: CalendarEvent[];
}

export default function MeetingSchedules({ loading, events }: Props) {
  const eventElements =
    events.length > 0 ? (
      events.map((event) => <EventCard key={event.id} event={event} />)
    ) : (
      <Text>No Events</Text>
    );

  return (
    <Container>{loading ? <Text>Loading...</Text> : eventElements}</Container>
  );
}
