import styled from "@emotion/styled";
import { format } from "date-fns";
import { CalendarEvent } from "../types";

const Container = styled.div`
  height: 8rem;
  width: 90vw;
  border: 1px solid;
  margin-bottom: 1rem;
`;

interface Props {
  event: CalendarEvent;
}

const formatDateTime = (dateTime: string) => {
  return format(new Date(dateTime), "HH:mm");
};

export default function EventCard({ event }: Props) {
  return (
    <Container>
      <h3>{event.summary}</h3>
      <h3>{`${formatDateTime(event.start.dateTime)} 
      ~ ${formatDateTime(event.end.dateTime)}`}</h3>
    </Container>
  );
}
