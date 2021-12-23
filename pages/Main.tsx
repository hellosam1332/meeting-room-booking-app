import { useSession } from "next-auth/react";
import { Provider } from "react-redux";
import styled from "@emotion/styled";
import store from "../src/store";
import BookingPanelContainer from "../src/container/BookingPanelContainer";
import MeetingScheduleContainer from "../src/container/MeetingScheduleContainer";
import User from "../src/components/User";

const Header = styled.div`
  min-height: 16rem;
  padding: 0.5rem;
  border-radius: 0 0 15px 15px;
  background-color: #9c9eff;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 7px 0, rgba(0, 0, 0, 0.22) 0 0 10px 0;
`;

export default function Main() {
  const { data } = useSession();

  if (!data) {
    return null;
  }

  return (
    <Provider store={store}>
      <Header>
        <User user={data.user} />
        <BookingPanelContainer />
      </Header>
      <MeetingScheduleContainer />
    </Provider>
  );
}
