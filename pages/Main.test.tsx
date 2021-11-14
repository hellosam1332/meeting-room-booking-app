import {render} from "@testing-library/react";
import Main from "./Main";

describe('Main', () => {
  it('render', () => {
    const {container} = render(<Main/>);

    expect(container).toHaveTextContent('meeting-room-booking-app');
  })
})
