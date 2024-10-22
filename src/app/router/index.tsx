import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/layout/ui";
import { CalendarPage } from "../../pages/calendar";
import { MeetingEditPage } from "../../pages/meeting-edit";
import { HomePage } from "../../pages/main";
import { lazy } from "react";

//const SearchPage = lazy(() => import("../../pages/search"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops...</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },

      {
        path: "/meeting/:id/edit",
        element: <MeetingEditPage />,
      },
    ],
  },
]);
