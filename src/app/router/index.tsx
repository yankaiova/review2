import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/layout/ui";
import { lazy } from "react";

const SearchPage = lazy(() => import("../../pages/search"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops...</div>,
    children: [
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/meeting/:id",
        element: <DetailMeetingPage />,
        children: [
          {
            path: "/meeting/:id/edit",
            element: <EditMeetingPage />,
          },
        ],
      },
      {
        path: "/slot/:id",
        element: <DetailSlotPage />,
        children: [
          {
            path: "/slot/:id/edit",
            element: <EditSlotPage />,
          },
        ],
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
