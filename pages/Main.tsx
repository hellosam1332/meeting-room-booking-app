import BookingPanel from "../src/components/BookingPanel";
import meetingRooms from "../resources/meeting-rooms.json";

export default function Main() {
  return (
    <>
      <BookingPanel meetingRooms={meetingRooms} />
      <h2>Hello meeting-room-booking-app</h2>
    </>
  );
}
