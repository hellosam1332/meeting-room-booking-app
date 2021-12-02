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
  schedules: CalendarEvent[];
}

export default function MeetingSchedules({ schedules }: Props) {
  return (
    <Container>
      {schedules.map((schedule) => (
        <EventCard key={schedule.id} event={schedule} />
      ))}
    </Container>
  );
}
