import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getToken } from "next-auth/jwt";

import { addDays, format } from "date-fns";

const secret = process.env.SECRET ?? "";

const getFormattedTime = (date: Date) => {
  return format(date, "yyyy-MM-dd'T'00:00:00'Z'");
};

export default async function event(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { calendarId } = req.query;
    try {
      const key = process.env.GOOGLE_API_KEY;

      const token = await getToken({ req, secret });

      if (!token) {
        res.status(500).json({ message: "cannot get token" });
        return;
      }

      const currentDate = new Date();
      const tomorrow = addDays(currentDate, 1);

      const apiResponse = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${key}`,
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
          params: {
            singleEvents: true,
            timeMin: getFormattedTime(currentDate),
            timeMax: getFormattedTime(tomorrow),
          },
        }
      );

      res.status(200).send(apiResponse.data);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
