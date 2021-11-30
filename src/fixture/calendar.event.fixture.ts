import { CalendarEvent } from "../types";

const calendarEventFixture: CalendarEvent[] = [
  {
    kind: "calendar#event",
    etag: '"3276343931664000"',
    id: "2vim2tu7rraam60ke58ihrmphn_20211129T070000Z",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=MnZpbTJ0dTdycmFhbTYwa2U1OGlocm1waG5fMjAyMTExMjlUMDcwMDAwWiBqaW5zZW9nLmh1ckBrdXJseWNvcnAuY29t",
    created: "2021-10-04T23:58:41.000Z",
    updated: "2021-11-29T07:46:05.832Z",
    summary: "웹개발홈 리더 Weekly",
    description:
      "https://kurly0521.atlassian.net/wiki/spaces/CF/pages/2038169628",
    creator: {
      email: "seyoun.kim@kurlycorp.com",
      displayName: "커머스프론트엔드개발김세윤",
    },
    organizer: {
      email: "c_3oduoe8o1sj79trpvh3sbfkrqc@group.calendar.google.com",
      displayName: "15F 회의실 - [밀크티] 4인실",
    },
    start: {
      dateTime: "2021-11-29T16:10:00+09:00",
      timeZone: "Asia/Seoul",
    },
    end: {
      dateTime: "2021-11-29T17:00:00+09:00",
      timeZone: "Asia/Seoul",
    },
    recurringEventId: "2vim2tu7rraam60ke58ihrmphn",
    originalStartTime: {
      dateTime: "2021-11-29T16:00:00+09:00",
      timeZone: "Asia/Seoul",
    },
    iCalUID: "2vim2tu7rraam60ke58ihrmphn@google.com",
    sequence: 3,
    attendees: [
      {
        email: "seyoun.kim@kurlycorp.com",
        displayName: "커머스프론트엔드개발김세윤",
        responseStatus: "accepted",
      },
      {
        email: "serim.kim@kurlycorp.com",
        responseStatus: "accepted",
      },
      {
        email: "younghoon.koo@kurlycorp.com",
        responseStatus: "needsAction",
      },
      {
        email: "yunseok.han@kurlycorp.com",
        responseStatus: "needsAction",
      },
      {
        email: "jinseog.hur@kurlycorp.com",
        self: true,
        responseStatus: "needsAction",
      },
    ],
    hangoutLink: "https://meet.google.com/eau-eorj-mdy",
    conferenceData: {
      entryPoints: [
        {
          entryPointType: "video",
          uri: "https://meet.google.com/eau-eorj-mdy",
          label: "meet.google.com/eau-eorj-mdy",
        },
        {
          entryPointType: "more",
          uri: "https://tel.meet/eau-eorj-mdy?pin=9478042756302",
          pin: "9478042756302",
        },
        {
          regionCode: "US",
          entryPointType: "phone",
          uri: "tel:+1-929-287-3645",
          label: "+1 929-287-3645",
          pin: "106160179",
        },
      ],
      conferenceSolution: {
        key: {
          type: "hangoutsMeet",
        },
        name: "Google Meet",
        iconUri:
          "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png",
      },
      conferenceId: "eau-eorj-mdy",
      signature: "AGirE/KjJxv7rPrNMvx00Eg8zu6a",
    },
    guestsCanModify: true,
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
  {
    kind: "calendar#event",
    etag: '"3276344982444000"',
    id: "fhmod8tiiu0us6qdcuugdg4daj",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=Zmhtb2Q4dGlpdTB1czZxZGN1dWdkZzRkYWpfMjAyMTEyMDFUMDUwMDAwWiBqaW5zZW9nLmh1ckBrdXJseWNvcnAuY29t",
    created: "2021-10-14T05:05:07.000Z",
    updated: "2021-11-29T07:54:51.222Z",
    summary: "[정기] 이벤트 로깅 기술 검토 미팅",
    creator: {
      email: "yeajin.jeon@kurlycorp.com",
    },
    organizer: {
      email: "c_r4p8mjhgtktofqc4qh3ph9ggqo@group.calendar.google.com",
      displayName: "16F 회의실 - [채끝] 12인실,",
    },
    start: {
      dateTime: "2021-12-01T14:00:00+09:00",
      timeZone: "Asia/Seoul",
    },
    end: {
      dateTime: "2021-12-01T15:00:00+09:00",
      timeZone: "Asia/Seoul",
    },
    recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;INTERVAL=2;BYDAY=WE"],
    iCalUID: "fhmod8tiiu0us6qdcuugdg4daj@google.com",
    sequence: 2,
    attendees: [
      {
        email: "jungho.park@kurlycorp.com",
        displayName: "박정호",
        responseStatus: "needsAction",
      },
      {
        email: "taejun.kim@kurlycorp.com",
        displayName: "APP김태준",
        responseStatus: "needsAction",
      },
      {
        email: "jinseog.hur@kurlycorp.com",
        self: true,
        responseStatus: "declined",
      },
      {
        email: "chasuk.jang@kurlycorp.com",
        displayName: "WEB장차석",
        responseStatus: "accepted",
      },
      {
        email: "seyoun.kim@kurlycorp.com",
        displayName: "WEB김세윤",
        responseStatus: "accepted",
      },
      {
        email: "yeajin.jeon@kurlycorp.com",
        responseStatus: "accepted",
      },
      {
        email: "euisuk.lee@kurlycorp.com",
        displayName: "커머스모바일앱개발이의석",
        responseStatus: "needsAction",
      },
      {
        email: "yunseok.han@kurlycorp.com",
        displayName: "커머스프론트엔드개발한윤석",
        responseStatus: "accepted",
      },
      {
        email: "yongjin.kwon@kurlycorp.com",
        displayName: "커머스모바일앱개발권용진",
        responseStatus: "needsAction",
      },
      {
        email: "jehee.lee@kurlycorp.com",
        displayName: "커머스모바일앱개발이제희",
        responseStatus: "needsAction",
      },
      {
        email: "yeseul.bae@kurlycorp.com",
        responseStatus: "needsAction",
      },
      {
        email: "jinwoo.song@kurlycorp.com",
        responseStatus: "needsAction",
      },
      {
        email: "kyuhyeon.lee@kurlycorp.com",
        responseStatus: "accepted",
      },
      {
        email: "seunghyeok.lim@kurlycorp.com",
        responseStatus: "needsAction",
      },
    ],
    hangoutLink: "https://meet.google.com/isx-jeke-ugz",
    conferenceData: {
      entryPoints: [
        {
          entryPointType: "video",
          uri: "https://meet.google.com/isx-jeke-ugz",
          label: "meet.google.com/isx-jeke-ugz",
        },
        {
          entryPointType: "more",
          uri: "https://tel.meet/isx-jeke-ugz?pin=1515102262453",
          pin: "1515102262453",
        },
        {
          regionCode: "US",
          entryPointType: "phone",
          uri: "tel:+1-216-505-9642",
          label: "+1 216-505-9642",
          pin: "714532481",
        },
      ],
      conferenceSolution: {
        key: {
          type: "hangoutsMeet",
        },
        name: "Google Meet",
        iconUri:
          "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png",
      },
      conferenceId: "isx-jeke-ugz",
      signature: "AGirE/IRHs2Tcl7fRUMqlaXNZdLh",
    },
    reminders: {
      useDefault: true,
    },
    eventType: "default",
  },
];

export default calendarEventFixture;
