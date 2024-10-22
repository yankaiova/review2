import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/layout/ui";
import { lazy } from "react";
import { CalendarPage } from "../../pages/calendar";
import { MeetingEditPage } from "../../pages/meeting-edit";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops...</div>,
    children: [
      {
        path: "/",
        element: <CalendarPage />,
      },
      // {
      //   path: "/meeting/:id",
      //   element: <DetailMeetingPage />,
      //   children: [
      {
        path: "/meeting/:id/edit",
        element: <MeetingEditPage />,
      },
      //   ],
      // },
      // {
      //   path: "/slot/:id",
      //   element: <DetailSlotPage />,
      //   children: [
      // {
      //   path: "/slot/:id/edit",
      //   element: <EditSlotPage />,
      // },
      //   ],
      // },
      // {
      //   path: "/search",
      //   element: <SearchPage />,
      // },
    ],
  },
]);
