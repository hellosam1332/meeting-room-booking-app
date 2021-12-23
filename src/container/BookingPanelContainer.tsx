import { useSelector } from "react-redux";
import BookingPanel from "../components/BookingPanel";
import { AppState } from "../slice";

export default function BookingPanelContainer() {
  const { officeFloor } = useSelector((state) => state as AppState);
  const selectedFloor = officeFloor.find((floor) => floor.selected);

  return selectedFloor ? (
    <BookingPanel
      officeFloors={officeFloor}
      selectedMeetingRoom={selectedFloor.meetingRooms}
    />
  ) : null;
}
