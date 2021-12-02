import { useSession } from "next-auth/react";
import Header from "../src/components/Header";
import MeetingScheduleContainer from "../src/container/MeetingScheduleContainer";

export default function Main() {
  const { data } = useSession();

  if (!data) {
    return null;
  }

  // temporary
  const calendarId = "c_qslsg84640cdcd43l5tr2s2gcg@group.calendar.google.com";

  return (
    <>
      <Header user={data.user} />
      <MeetingScheduleContainer calendarId={calendarId} />
    </>
  );
}
