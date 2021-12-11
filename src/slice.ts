import { createSlice } from "@reduxjs/toolkit";
import resource from "../resources/meeting-rooms.json";
import { MeetingRoom, OfficeFloor } from "./types";

export interface AppState {
  officeFloor: OfficeFloor[];
}

const initialState: AppState = {
  officeFloor: resource.map((it) => ({
    ...it,
    selected: it.id === 18, // temporary
    meetingRooms: it.meetingRooms.map((room, roomIdx) => ({
      ...room,
      selected: roomIdx === 0,
    })) as MeetingRoom[],
  })) as OfficeFloor[],
};

const { actions, reducer } = createSlice({
  name: "booking-app",
  initialState,
  reducers: {},
});

export default reducer;
