type ResponseStatus = "accepted" | "needsAction" | "declined";
type EventType = "default";
type EventStatus = "confirmed";

interface Attendee {
  email: string;
  responseStatus: ResponseStatus;
  organizer?: boolean;
  displayName?: string;
  self?: boolean;
}

interface DateFormat {
  dateTime: string;
  timeZone: string;
}

export interface GoogleApiResponse<T> {
  accessRole: string;
  defaultReminders: unknown[];
  etag: string;
  items: T[];
  kind: string;
  nextPageToken: string;
  summary: string;
  timeZone: string;
  updated: string;
}

export interface CalendarEvent {
  attendees: Attendee[];
  conferenceData: any; // todo google meet url ect
  created: string;
  creator: { email: string; displayName?: string };
  organizer: { email: string; displayName?: string };
  start: DateFormat;
  end: DateFormat;
  etag: string;
  eventType: EventType;
  hangoutLink: string;
  htmlLink: string;
  iCalUID: string;
  id: string;
  kind: string;
  reminders: { useDefault: boolean };
  sequence: number;
  status: EventStatus;
  summary: string;
  updated: string;
  description?: string;
  recurringEventId?: string;
  originalStartTime?: any;
  guestsCanModify?: boolean;
  recurrence?: any;
}

export interface OfficeFloor {
  id: number;
  selected: boolean;
  meetingRooms: MeetingRoom[];
}

export interface MeetingRoom {
  id: string;
  name: string;
  selected: boolean;
}
