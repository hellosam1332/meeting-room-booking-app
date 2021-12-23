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
      floorId: it.id,
    })) as MeetingRoom[],
  })) as OfficeFloor[],
};

const { actions, reducer } = createSlice({
  name: "booking-app",
  initialState,
  reducers: {
    selectOfficeFloor(state, { payload }) {
      const targetId = payload;

      return {
        ...state,
        officeFloor: state.officeFloor.map((floor) => ({
          ...floor,
          selected: floor.id === targetId,
        })),
      };
    },
    selectMeetingRoom(state, { payload }) {
      const targetMeetingRoom: MeetingRoom = payload;

      const targetFloor = state.officeFloor.find(
        (floor) => floor.id === targetMeetingRoom.floorId
      );

      if (!targetFloor) {
        throw Error("Floor not exist");
      }

      targetFloor.meetingRooms = targetFloor.meetingRooms.map((room) => ({
        ...room,
        selected: room.id === targetMeetingRoom.id,
      }));
    },
  },
});

export default reducer;

export const { selectOfficeFloor, selectMeetingRoom } = actions;
