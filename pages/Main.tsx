import { useSession } from "next-auth/react";
import { Provider } from "react-redux";
import Header from "../src/components/Header";
import MeetingScheduleContainer from "../src/container/MeetingScheduleContainer";
import store from "../src/store";
import BookingPanelContainer from "../src/container/BookingPanelContainer";

export default function Main() {
  const { data } = useSession();

  if (!data) {
    return null;
  }

  return (
    <Provider store={store}>
      <Header user={data.user} />
      <BookingPanelContainer />
      <MeetingScheduleContainer />
    </Provider>
  );
}
