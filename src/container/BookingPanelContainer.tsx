import { useSelector } from "react-redux";
import BookingPanel from "../components/BookingPanel";
import { AppState } from "../slice";

export default function BookingPanelContainer() {
  const { officeFloor } = useSelector((state) => state as AppState);

  return <BookingPanel officeFloors={officeFloor} />;
}
