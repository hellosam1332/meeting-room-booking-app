import styled from "@emotion/styled";
import { format } from "date-fns";
import { CalendarEvent } from "../types";

const Container = styled.div`
  width: 95vw;
  padding: 1em 0.5em;
  border-radius: 15px;
  margin-bottom: 0.8rem;
  box-shadow: rgba(60, 64, 67, 0.2) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 4px 2px;
`;

const EventSummary = styled.p`
  margin: 0 0 0.2em;
  color: #333;
  font-size: 20px;
  font-weight: 700;
`;

const EventStartEndTime = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 600;
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
      <EventSummary>📆 {event.summary}</EventSummary>
      <EventStartEndTime>
        ✨
        {`${formatDateTime(event.start.dateTime)} ~ ${formatDateTime(
          event.end.dateTime
        )}`}
      </EventStartEndTime>
    </Container>
  );
}
