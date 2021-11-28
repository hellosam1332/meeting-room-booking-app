import { useSession } from "next-auth/react";
import BookingPanel from "../src/components/BookingPanel";
import meetingRooms from "../resources/meeting-rooms.json";
import Header from "../src/components/Header";

export default function Main() {
  const { data } = useSession();

  if (!data?.user) {
    return null;
  }

  return (
    <>
      <Header user={data.user} />
      <BookingPanel meetingRooms={meetingRooms} />
      <h2>Hello meeting-room-booking-app</h2>
    </>
  );
}
